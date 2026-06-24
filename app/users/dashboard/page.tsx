export default function UserDashboard() {
  return (
    <div className="space-y-8">

      {/* Welcome Section */}

      <div>
        <h1 className="text-5xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-slate-400 mt-3 text-lg">
          Here's what's happening with your lottery journey today.
        </p>
      </div>

      {/* Stats Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-slate-400">
            Total Predictions
          </h3>

          <p className="text-4xl font-bold mt-3 text-cyan-400">
            --
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-slate-400">
            Total Matches
          </h3>

          <p className="text-4xl font-bold mt-3 text-green-400">
            --
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-slate-400">
            Accuracy Rate
          </h3>

          <p className="text-4xl font-bold mt-3 text-yellow-400">
            --
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-slate-400">
            Best Match
          </h3>

          <p className="text-4xl font-bold mt-3 text-purple-400">
            --
          </p>
        </div>

      </div>

      {/* AI Prediction Banner */}

      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-8">

        <h2 className="text-3xl font-bold">
          AI Prediction Engine
        </h2>

        <p className="mt-3 text-slate-100">
          Generate smart lottery predictions using our AI analysis system.
        </p>

        <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl font-semibold">
          Generate Prediction
        </button>

      </div>

      {/* Bottom Section */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Predictions */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-semibold">
              Recent Predictions
            </h2>

            <span className="text-cyan-400 cursor-pointer">
              View All
            </span>
          </div>

          <div className="text-slate-500">
            No predictions found.
          </div>

        </div>

        {/* Latest Results */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-semibold">
              Latest Results
            </h2>

            <span className="text-cyan-400 cursor-pointer">
              View All
            </span>
          </div>

          <div className="text-slate-500">
            No results found.
          </div>

        </div>

      </div>

    </div>
  );
}