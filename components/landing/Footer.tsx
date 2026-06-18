export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-b from-[#081126] to-[#0F172A]">

  <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

  

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo Section */}

          <div>

            <h2 className="text-4xl font-bold text-white">

              Lottery

              <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]">
                AI
              </span>

            </h2>

            <p className="text-slate-400 mt-5 leading-7">
              AI Powered Lottery Analytics &
              Prediction Platform built for
              smarter insights and data-driven decisions.
            </p>

            <div className="flex gap-3 mt-6">

              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs">
                AI Powered
              </span>

              <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs">
                Real-Time
              </span>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-semibold text-white mb-5">
              Product
            </h3>

            <div className="space-y-3">

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Features
              </p>

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Analytics
              </p>

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Predictions
              </p>

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Dashboard
              </p>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-semibold text-white mb-5">
              Company
            </h3>

            <div className="space-y-3">

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                About Us
              </p>

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Contact
              </p>

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Support
              </p>

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Careers
              </p>

            </div>

          </div>

          {/* Legal */}

          <div>

            <h3 className="font-semibold text-white mb-5">
              Legal
            </h3>

            <div className="space-y-3">

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Privacy Policy
              </p>

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Terms of Service
              </p>

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Security
              </p>

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Cookies
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-700 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between">

          <p className="text-slate-400 text-sm">
            © 2026 LotteryAI. All Rights Reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">

            <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300">
              Next.js
            </span>

            <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300">
              MongoDB
            </span>

            <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300">
              AI Powered
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}