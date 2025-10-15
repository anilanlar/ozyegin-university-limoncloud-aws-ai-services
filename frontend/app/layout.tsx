import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AWS Bedrock AI Chatbot",
  description: "Interactive demo for university students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}

