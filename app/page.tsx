import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Nav />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">
              We build <span className="text-cyan-500">whatever wins</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
              crowdbuild is a daily build experiment.
              We haven’t shipped anything yet.
              Our first build goes live on{" "}
              <span className="font-medium text-zinc-800">
                February 5, 2026
              </span>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
