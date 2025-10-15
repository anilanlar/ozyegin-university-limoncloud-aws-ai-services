import Link from 'next/link';
import Image from 'next/image';

export default function Introduction() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 rounded-3xl p-12 text-white text-center mb-10 shadow-2xl">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="relative">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Part 1: Introduction • 5 Minutes
            </div>
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              Understanding Cloud AI
            </h1>
            <p className="text-2xl text-purple-100 font-medium">AWS Bedrock & Generative AI Fundamentals</p>
          </div>
        </div>

        {/* What is Cloud Computing Section */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10 border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                What is Cloud Computing?
              </h2>
              <p className="text-gray-500 font-medium">The Foundation of Modern Technology</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-sky-600">Cloud Computing</strong> is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.
            </p>

            {/* Cloud Computing Image */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border border-sky-100">
              <div className="relative w-full h-[500px] rounded-xl overflow-hidden bg-white">
                <Image 
                  src="/cloud_ai/what-is-cloud-computing-3196.png" 
                  alt="What is Cloud Computing" 
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                Cloud computing enables on-demand access to computing resources without direct management
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl border border-sky-100">
                <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Physical Infrastructure</h3>
                <p className="text-gray-700">Access powerful computing resources without owning physical servers</p>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl border border-sky-100">
                <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">On-Demand Resources</h3>
                <p className="text-gray-700">Scale up or down instantly based on your needs</p>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl border border-sky-100">
                <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Access</h3>
                <p className="text-gray-700">Access your applications and data from anywhere in the world</p>
              </div>
            </div>
          </div>
        </div>

        {/* What is AWS Section */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10 border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-100">
              <Image 
                src="/cloud_ai/aws.png" 
                alt="AWS Logo" 
                width={64} 
                height={64}
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                What is AWS?
              </h2>
              <p className="text-gray-500 font-medium">Amazon Web Services</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* AWS Logo Image */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
              <div className="relative w-full h-[150px] rounded-xl overflow-hidden bg-white flex items-center justify-center p-4">
                <Image 
                  src="/cloud_ai/aws_logo.png" 
                  alt="AWS Logo" 
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-orange-600">Amazon Web Services (AWS)</strong> is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Launched in 2006, AWS has become the market leader in cloud computing, powering millions of businesses from startups to Fortune 500 companies.
            </p>

            {/* Cloud Companies Comparison */}
            <div className="bg-white rounded-2xl p-6 border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Major Cloud Providers</h3>
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <Image 
                  src="/cloud_ai/cloud_companies.webp" 
                  alt="Cloud Computing Companies Comparison" 
                  fill
                  className="object-contain p-4"
                />
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                AWS leads the cloud computing market, followed by Microsoft Azure, Google Cloud, and other major providers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable</h3>
                <p className="text-gray-700">Grow from startup to enterprise with resources that scale automatically</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Secure</h3>
                <p className="text-gray-700">Enterprise-grade security with compliance certifications</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cost-Effective</h3>
                <p className="text-gray-700">Pay only for what you use with no upfront costs</p>
              </div>
            </div>
          </div>
        </div>

        {/* What is AWS Bedrock Section */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10 border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                What is AWS Bedrock?
              </h2>
              <p className="text-gray-500 font-medium">Fully Managed AI Service</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-purple-600">Amazon Bedrock</strong> is a fully managed service that offers a choice of high-performing foundation models (FMs) from leading AI companies like Anthropic, Meta, Cohere, and Amazon through a single API. It provides a serverless experience, meaning you can get started quickly, easily experiment with different models, and seamlessly integrate AI capabilities into your applications.
            </p>

            {/* Bedrock Architecture Image */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AWS Bedrock Architecture</h3>
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-white p-4">
                <Image 
                  src="/cloud_ai/bedrock_architecture.jpg" 
                  alt="AWS Bedrock Architecture" 
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                AWS Bedrock provides a unified API to access multiple AI models with enterprise-grade security and privacy
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Multiple AI Models</h4>
                    <p className="text-gray-700 text-sm">Access Claude, Llama, Titan, and more through one API</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">No Infrastructure Management</h4>
                    <p className="text-gray-700 text-sm">Focus on your application, not on managing servers</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Enterprise Security</h4>
                    <p className="text-gray-700 text-sm">Your data stays private and is never used to train models</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Customizable</h4>
                    <p className="text-gray-700 text-sm">Fine-tune models with your own data for specific use cases</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Available AI Models */}
            <div className="bg-white rounded-2xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Available Foundation Models</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                  <h4 className="font-bold text-lg text-purple-900 mb-2">Anthropic Claude</h4>
                  <p className="text-sm text-gray-700">Advanced conversational AI with strong reasoning and coding capabilities</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-lg text-blue-900 mb-2">Meta Llama</h4>
                  <p className="text-sm text-gray-700">Open-source models for text generation and understanding</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                  <h4 className="font-bold text-lg text-green-900 mb-2">Amazon Titan</h4>
                  <p className="text-sm text-gray-700">Amazon's own models for text generation and embeddings</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                  <h4 className="font-bold text-lg text-orange-900 mb-2">Cohere</h4>
                  <p className="text-sm text-gray-700">Specialized in text generation and semantic search</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200">
                  <h4 className="font-bold text-lg text-pink-900 mb-2">Stability AI</h4>
                  <p className="text-sm text-gray-700">Text-to-image generation with Stable Diffusion</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200">
                  <h4 className="font-bold text-lg text-indigo-900 mb-2">AI21 Labs</h4>
                  <p className="text-sm text-gray-700">Jurassic models for complex text generation tasks</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What is Generative AI Section */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10 border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                What is Generative AI?
              </h2>
              <p className="text-gray-500 font-medium">Creating New Content with AI</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-blue-600">Generative AI</strong> is a type of artificial intelligence that can create new content—including text, images, code, audio, and video—based on patterns learned from existing data. Unlike traditional AI that simply classifies or analyzes data, generative AI produces entirely new, original content that didn't exist before.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">Training on Massive Data</h4>
                    <p className="text-gray-700">AI models are trained on billions of examples from books, websites, and other sources</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">Pattern Recognition</h4>
                    <p className="text-gray-700">The AI learns patterns, relationships, and context from this training data</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">Content Generation</h4>
                    <p className="text-gray-700">When you provide a prompt, the AI uses learned patterns to create original content</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white border-2 border-blue-200 p-6 rounded-2xl">
                <div className="text-4xl mb-3">💬</div>
                <h4 className="font-bold text-gray-900 mb-2">Text</h4>
                <p className="text-gray-700 text-sm">Chat responses, articles, code, translations</p>
              </div>

              <div className="bg-white border-2 border-blue-200 p-6 rounded-2xl">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="font-bold text-gray-900 mb-2">Images</h4>
                <p className="text-gray-700 text-sm">Art, designs, photos, illustrations</p>
              </div>

              <div className="bg-white border-2 border-blue-200 p-6 rounded-2xl">
                <div className="text-4xl mb-3">🎵</div>
                <h4 className="font-bold text-gray-900 mb-2">Media</h4>
                <p className="text-gray-700 text-sm">Music, videos, voice synthesis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Applications Section */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10 border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Real-World Applications
              </h2>
              <p className="text-gray-500 font-medium">How Companies Use Generative AI Today</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Customer Service */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Customer Service</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">24/7 AI chatbots providing instant support, answering questions, and resolving issues automatically</p>
            </div>

            {/* Content Creation */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Content Creation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">Generate marketing copy, blog posts, social media content, and product descriptions at scale</p>
            </div>

            {/* Software Development */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Software Development</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">AI coding assistants help developers write code faster, debug errors, and learn new technologies</p>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Education</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">Personalized tutoring, homework help, language learning, and interactive educational experiences</p>
            </div>

            {/* Healthcare */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Healthcare</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">Medical research assistance, patient communication, diagnosis support, and treatment planning</p>
            </div>

            {/* Business Intelligence */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Business Intelligence</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">Analyze data, generate reports, predict trends, and provide actionable business insights</p>
            </div>
          </div>
        </div>

        {/* Why Cloud AI Matters Section */}
        <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 rounded-3xl shadow-xl p-10 mb-10 text-white">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Why Cloud AI Matters</h2>
            <p className="text-xl text-purple-100">The Future of Innovation is Here</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Accelerated Innovation</h3>
                  <p className="text-purple-100">Build AI applications in hours instead of months, without needing specialized ML expertise</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reduced Costs</h3>
                  <p className="text-purple-100">No infrastructure to manage, pay only for what you use, and avoid expensive AI talent hiring</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                  <p className="text-purple-100">Your data stays private, meets compliance requirements, and never trains public models</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Flexibility & Choice</h3>
                  <p className="text-purple-100">Choose from multiple AI models, switch between them easily, and use the best tool for each job</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <p className="text-lg font-medium">
              <span className="text-2xl font-bold">94%</span> of enterprises say AI is critical to their success over the next 5 years
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/agenda"
            className="inline-flex items-center gap-2 bg-white text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg border-2 border-gray-200 hover:border-gray-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Agenda</span>
          </Link>
          <Link
            href="/chat"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-bold text-lg px-10 py-4 rounded-full hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105"
          >
            <span>Try the AI Chatbot</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

