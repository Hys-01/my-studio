export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 py-24 overflow-hidden">
      {/* MEGA BACKGROUND GLOW */}
      <div className="bg-mesh-strong pointer-events-none" />

      <h1 className="relative z-10 text-6xl md:text-9xl font-extrabold tracking-tighter text-center">
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-pastel-purple via-pastel-blue to-white bg-[length:200%_auto] animate-shine">
          Build the Future.
        </span>
      </h1>
      
      <p className="relative z-10 mt-8 text-white/70 max-w-xl text-center text-xl md:text-2xl font-light">
        Developing high-performance interfaces with a <span className="text-white font-medium">minimalist aesthetic.</span>
      </p>

      <div className="relative group mt-14 z-10">
        <div className="absolute -inset-2 bg-gradient-to-r from-pastel-purple to-pastel-blue rounded-full blur-xl opacity-40 group-hover:opacity-100 transition duration-700"></div>
        <button className="relative px-10 py-4 rounded-full glass border-white/40 text-white text-lg font-semibold transition-all cursor-pointer hover:scale-105 active:scale-95">
          Explore Projects
        </button>
      </div>
    </section>
  );
}