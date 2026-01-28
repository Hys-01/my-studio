export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 py-24 overflow-hidden">
      {/* Background Mesh for depth */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-center">
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-pastel-purple via-pastel-blue to-white bg-[length:200%_auto] animate-shine">
          Build the Future.
        </span>
      </h1>
      
      <p className="mt-6 text-zinc-400 max-w-lg text-center text-lg md:text-xl font-light">
        Developing high-performance interfaces with a minimalist aesthetic.
      </p>

      <div className="relative group mt-12">
        {/* Glow effect behind button */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pastel-purple to-pastel-blue rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <button className="relative px-8 py-3 rounded-full glass border-white/20 text-white transition-all cursor-pointer">          Explore Projects
        </button>
      </div>
    </section>
  );
}