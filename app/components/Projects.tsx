interface ProjectProps {
  title: string;
  description: string;
  accentColor: "purple" | "blue" | "pink";
}

function ProjectCard({ title, description, accentColor }: ProjectProps) {
  const glows = {
    purple: "group-hover:shadow-[0_0_40px_-10px_rgba(195,165,255,0.4)] border-pastel-purple/30",
    blue: "group-hover:shadow-[0_0_40px_-10px_rgba(165,216,255,0.4)] border-pastel-blue/30",
    pink: "group-hover:shadow-[0_0_40px_-10px_rgba(255,180,225,0.4)] border-pastel-pink/30",
  };

  const lineColors = {
    purple: "bg-pastel-purple",
    blue: "bg-pastel-blue",
    pink: "bg-pastel-pink",
  };

  return (
    <div className={`group relative rounded-2xl glass p-8 transition-all duration-500 hover:-translate-y-2 ${glows[accentColor]}`}>
      {/* Glossy sheen reflection overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent pointer-events-none rounded-2xl" />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-medium text-white tracking-tight">{title}</h3>
        <p className="mt-3 text-zinc-400 text-sm leading-relaxed font-light">
          {description}
        </p>
        
        {/* Your extending line logic */}
        <div className={`mt-6 h-[1px] w-12 ${lineColors[accentColor]} opacity-60 group-hover:w-full transition-all duration-700`} />
      </div>
    </div>
  );
}

export default function Projects() {
  const myProjects: { title: string; description: string; color: "purple" | "blue" | "pink" }[] = [
    { title: "Lumina UI", description: "A high-fidelity design system built for modern startups.", color: "purple" },
    { title: "Velocity", description: "Real-time analytics engine with glassmorphism dashboards.", color: "blue" },
    { title: "Aura", description: "Experimental ambient background generator for creative focus.", color: "pink" },
  ];

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-32 overflow-visible">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-xs uppercase tracking-[0.5em] text-pastel-blue font-semibold mb-4">Portfolio</h2>
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-pastel-blue to-transparent" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {myProjects.map((p, i) => (
          <ProjectCard key={i} title={p.title} description={p.description} accentColor={p.color} />
        ))}
      </div>
    </section>
  );
}