export default function Footer() {
  return (
    <footer className="border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-3xl font-bold">
              Lottery
              <span className="text-cyan-400">
                AI
              </span>
            </h2>

            <p className="text-slate-400 mt-4">
              AI Powered Lottery Analytics &
              Prediction Platform.
            </p>

          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Product
            </h3>

            <div className="space-y-2 text-slate-400">
              <p>Features</p>
              <p>Analytics</p>
              <p>Predictions</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <div className="space-y-2 text-slate-400">
              <p>About</p>
              <p>Contact</p>
              <p>Support</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Legal
            </h3>

            <div className="space-y-2 text-slate-400">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">

          © 2026 LotteryAI. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}