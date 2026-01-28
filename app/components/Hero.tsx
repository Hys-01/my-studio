export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-6">
      {/* Background Mesh Glow */}
      <div className="bg-mesh" />

      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 pb-2">
        Design. Code.
      </h1>
      
      <p className="mt-6 text-zinc-400 max-w-lg text-center text-lg font-light leading-relaxed">
        Building high-fidelity digital products with a focus on 
        <span className="text-pastel-purple"> minimalist aesthetics</span> and 
        <span className="text-pastel-blue"> polished motion</span>.
      </p>

      {/* Gradient Glass Button */}
      <button className="group mt-10 relative p-[1px] rounded-full transition-all hover:scale-105 active:scale-95">
        <div className="absolute inset-0 bg-gradient-to-r from-pastel-purple via-pastel-blue to-pastel-pink rounded-full opacity-30 group-hover:opacity-100 transition-opacity" />
        <div className="relative px-8 py-3 rounded-full bg-brand-black/80 backdrop-blur-xl text-white text-sm font-medium">
          Get in touch
        </div>
      </button>
    </section>
  );
}