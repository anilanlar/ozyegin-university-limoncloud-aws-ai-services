"""
FastAPI Backend for AWS Bedrock Chatbot
Simple and clean implementation
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import boto3
import json
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(title="Bedrock Chatbot API")

# CORS middleware for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Bedrock client
bedrock_runtime = boto3.client(
    service_name='bedrock-runtime',
    region_name=os.getenv('AWS_REGION', 'us-east-1'),
    aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
    aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY')
)

# Claude model ID
CLAUDE_MODEL_ID = os.getenv('CLAUDE_MODEL_ID', 'anthropic.claude-3-5-sonnet-20240620-v1:0')


class ChatRequest(BaseModel):
    message: str
    conversation_history: list = []


class ChatResponse(BaseModel):
    response: str
    success: bool
    error: str = None


@app.get("/")
async def root():
    """Health check endpoint"""
    return {"status": "healthy", "service": "Bedrock Chatbot API"}


@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Send message to Claude via AWS Bedrock
    """
    try:
        # Prepare messages for Claude
        messages = []
        
        # Add conversation history
        for msg in request.conversation_history:
            messages.append({
                "role": msg["role"],
                "content": msg["content"]
            })
        
        # Add current user message
        messages.append({
            "role": "user",
            "content": request.message
        })
        
        # Prepare request body for Claude
        request_body = {
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 2000,
            "messages": messages,
            "temperature": 0.7,
        }
        
        # Call Bedrock API
        response = bedrock_runtime.invoke_model(
            modelId=CLAUDE_MODEL_ID,
            contentType='application/json',
            accept='application/json',
            body=json.dumps(request_body)
        )
        
        # Parse response
        response_body = json.loads(response['body'].read())
        
        # Extract Claude's response
        claude_response = response_body['content'][0]['text']
        
        return ChatResponse(
            response=claude_response,
            success=True
        )
        
    except Exception as e:
        return ChatResponse(
            response="",
            success=False,
            error=str(e)
        )


@app.get("/health")
async def health_check():
    """Check if AWS Bedrock is accessible"""
    try:
        # Try to list available models (simple test)
        bedrock_runtime.list_foundation_models()
        return {"status": "healthy", "bedrock": "connected"}
    except Exception as e:
        return {"status": "unhealthy", "error": str(e)}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

