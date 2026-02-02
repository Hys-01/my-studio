interface ProjectProps {
  title: string;
  description: string;
  accentColor: "red" | "pink" | "aqua";
}

function ProjectCard({ title, description, accentColor }: ProjectProps) {
  // Stronger accent border for visibility
  const glows = {
    red: "group-hover:shadow-[0_0_50px_-10px_rgba(195,165,255,0.6)] border-pastel-red/50",
    pink: "group-hover:shadow-[0_0_50px_-10px_rgba(165,216,255,0.6)] border-pastel-pink/50",
    aqua: "group-hover:shadow-[0_0_50px_-10px_rgba(255,180,225,0.6)] border-pastel-aqua/50",
  };

  const lineColors = {
    red: "bg-pastel-red",
    pink: "bg-pastel-pink",
    aqua: "bg-pastel-aqua",
  };

  return (
    <div className={`group relative rounded-3xl glass p-10 transition-all duration-500 hover:-translate-y-4 ${glows[accentColor]}`}>
      {/* High-visibility gloss reflection */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/[0.2] via-transparent to-transparent pointer-events-none rounded-3xl" />
      
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-white tracking-tight">{title}</h3>
        <p className="mt-4 text-white/60 text-base leading-relaxed font-light">
          {description}
        </p>
        
        {/* Your extending line (Now higher opacity) */}
        <div className={`mt-8 h-[2px] w-12 ${lineColors[accentColor]} opacity-80 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(255,255,255,0.5)]`} />
      </div>
    </div>
  );
}

export default function Projects() {
  const myProjects: { title: string; description: string; color: "red" | "pink" | "aqua" }[] = [
    { title: "YouTube", description: "TAKEN DOWN :(", color: "red" },
    { title: "Instagram", description: ".", color: "pink" },
    { title: "TikTok", description: ".", color: "aqua" },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-40 overflow-visible">
      {/* PROJECT AREA MESH (Solves the "Pure Black" problem) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-mesh-strong opacity-40 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center mb-24">
        <h2 className="text-sm uppercase tracking-[0.8em] text-pastel-sky font-bold mb-6">Channels</h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-pastel-sky to-transparent" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {myProjects.map((p, i) => (
          <ProjectCard key={i} title={p.title} description={p.description} accentColor={p.color} />
        ))}
      </div>
    </section>
  );
}