import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Logos */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-12 border border-gray-100">
          <div className="text-center mb-10">
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 bg-clip-text text-transparent mb-4 leading-tight">
              AWS Bedrock AI Chatbot
            </h1>
            <p className="text-2xl text-gray-600 font-medium">
              Interactive Demo for University Students
            </p>
          </div>

          {/* Logos Section */}
          <div className="mt-12">
            <p className="text-center text-sm uppercase tracking-widest text-gray-500 font-semibold mb-8">
              Presented by
            </p>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {/* LimonCloud */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 p-1 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-white p-8 rounded-2xl h-full flex flex-col justify-center items-center">
                  <div className="relative w-full h-32 mb-4">
                    <Image
                      src="/limon.png"
                      alt="LimonCloud Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="text-gray-700 font-semibold text-center mt-2">
                    AWS Advanced Tier Partner
                  </p>
                  <div className="mt-3 h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                </div>
              </div>

              {/* Özyeğin University */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-blue-50 p-1 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-white p-8 rounded-2xl h-full flex flex-col justify-center items-center">
                  <div className="relative w-full h-32 mb-4">
                    <Image
                      src="/ou_logo_tr.jpg"
                      alt="Özyeğin University Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="text-gray-700 font-semibold text-center mt-2">
                    Innovation and Excellence in Education
                  </p>
                  <div className="mt-3 h-1 w-16 bg-gradient-to-r from-red-600 to-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-3xl p-10 shadow-xl mb-12 border border-gray-100">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 text-center mb-12">
            What You'll Experience Today
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-6xl mb-5 transform group-hover:scale-110 transition-transform">🤖</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                AI Technology
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Experience cutting-edge generative AI models in real-time
              </p>
            </div>
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-6xl mb-5 transform group-hover:scale-110 transition-transform">☁️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Cloud Computing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Discover the power of AWS Bedrock platform
              </p>
            </div>
            <div className="group bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-6xl mb-5 transform group-hover:scale-110 transition-transform">💬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                AI Chatbot
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Interact with Claude, an advanced AI assistant
              </p>
            </div>
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-6xl mb-5 transform group-hover:scale-110 transition-transform">💻</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Hands-On Demo
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Engage with interactive and practical examples
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 rounded-3xl p-12 shadow-2xl">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]"></div>
          <div className="relative text-center">
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Ready to explore the future of AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join us on an interactive journey through generative AI and cloud computing
            </p>
            <Link
              href="/agenda"
              className="inline-flex items-center gap-3 bg-white text-purple-700 font-bold text-xl px-10 py-5 rounded-full hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
            >
              <span>Continue to Session Agenda</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

