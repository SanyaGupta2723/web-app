export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-b from-[#081126] to-[#0F172A]">

      {/* Top Line */}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-4 gap-8">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-white">

              Lottery

              <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]">
                AI
              </span>

            </h2>

            <p className="text-slate-400 mt-3 leading-6 text-sm">
              AI Powered Lottery Analytics &
              Prediction Platform for smarter insights.
            </p>

            <div className="flex gap-2 mt-4">

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

            <h3 className="font-semibold text-white mb-3">
              Product
            </h3>

            <div className="space-y-2 text-sm">

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Features
              </p>

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Analytics
              </p>

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Predictions
              </p>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-semibold text-white mb-3">
              Company
            </h3>

            <div className="space-y-2 text-sm">

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                About
              </p>

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Contact
              </p>

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Support
              </p>

            </div>

          </div>

          {/* Legal */}

          <div>

            <h3 className="font-semibold text-white mb-3">
              Legal
            </h3>

            <div className="space-y-2 text-sm">

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Privacy Policy
              </p>

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Terms
              </p>

              <p className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Security
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-700 mt-8 pt-5 flex flex-col md:flex-row items-center justify-between">

          <p className="text-slate-400 text-xs">
            © 2026 LotteryAI. All Rights Reserved.
          </p>

          <div className="flex gap-2 mt-3 md:mt-0">

            <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300">
              Next.js
            </span>

            <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300">
              MongoDB
            </span>

            <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300">
              AI
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}