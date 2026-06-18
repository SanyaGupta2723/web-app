export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* Card 1 */}

        <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition-all">

          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500 flex items-center justify-center text-2xl mb-6">
            📈
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            AI Predictions
          </h3>

          <p className="text-slate-400 leading-7">
            Advanced AI models analyze patterns
            and generate smarter lottery predictions.
          </p>

        </div>

        {/* Card 2 */}

        <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8 hover:border-orange-500 transition-all">

          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500 flex items-center justify-center text-2xl mb-6">
            🔥
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Hot & Cold Numbers
          </h3>

          <p className="text-slate-400 leading-7">
            Track trending and inactive
            numbers in real time.
          </p>

        </div>

        {/* Card 3 */}

        <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8 hover:border-violet-500 transition-all">

          <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500 flex items-center justify-center text-2xl mb-6">
            📊
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Detailed Analytics
          </h3>

          <p className="text-slate-400 leading-7">
            Interactive charts and insights
            to understand lottery behavior.
          </p>

        </div>

        {/* Card 4 */}

        <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8 hover:border-emerald-500 transition-all">

          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500 flex items-center justify-center text-2xl mb-6">
            🛡️
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Secure & Reliable
          </h3>

          <p className="text-slate-400 leading-7">
            Fast, secure and scalable
            analytics platform.
          </p>

        </div>

      </div>

    </section>
  );
}