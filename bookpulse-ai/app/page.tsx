export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-black to-black" />

      <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">

        <div className="mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur">
          Emmrex presents BookPulse AI
        </div>

        <h1 className="max-w-5xl text-5xl md:text-7xl font-bold leading-tight">

          <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">

            Know if AI recommends your book

          </span>

          <br />

          before readers do.

        </h1>

        <p className="mt-8 max-w-2xl text-zinc-400 text-lg md:text-xl leading-8">

          BookPulse AI helps authors understand how AI platforms
          discover, rank and recommend books in the AI era.

        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <button className="rounded-2xl bg-purple-600 px-8 py-4 font-medium hover:bg-purple-500 transition-all duration-300 hover:scale-105">

            Analyze My Book

          </button>

          <button className="rounded-2xl border border-zinc-700 px-8 py-4 hover:border-cyan-400 transition">

            See Demo Report

          </button>

        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur">

            <h3 className="text-xl font-semibold">
              AI Visibility Score
            </h3>

            <p className="mt-3 text-zinc-400">
              Discover whether AI systems recognize and recommend your books.
            </p>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur">

            <h3 className="text-xl font-semibold">
              Genre Intelligence
            </h3>

            <p className="mt-3 text-zinc-400">
              Learn trending themes, genres and recommendation patterns.
            </p>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur">

            <h3 className="text-xl font-semibold">
              Competitor Analysis
            </h3>

            <p className="mt-3 text-zinc-400">
              See which books appear beside yours and why.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}
