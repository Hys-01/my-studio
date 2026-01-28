interface ProjectProps {
  title: string;
  description: string;
  color: 'purple' | 'blue' | 'pink';
}

function ProjectCard({ title, description, color }: ProjectProps) {
  // Mapping colors to Tailwind classes for the gradient border
  const borderColors = {
    purple: "group-hover:from-pastel-purple/50",
    blue: "group-hover:from-pastel-blue/50",
    pink: "group-hover:from-pastel-pink/50",
  };

  return (
    <div className="group relative p-[1px] rounded-2xl transition-all duration-500">
      {/* 1. The Gradient Border Layer */}
      <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl transition-all duration-500 ${borderColors[color]}`} />
      
      {/* 2. The Glass Body */}
      <div className="relative glass-card rounded-2xl p-8 h-full flex flex-col justify-between group-hover:bg-white/5 transition-colors">
        <div>
          <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
        </div>
        
        {/* Subtle Shine Flare */}
        <div className="mt-8 flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-600 uppercase group-hover:text-white transition-colors">
          View Details →
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const myProjects: ProjectProps[] = [
    { title: "Project Alpha", description: "High-end metrics dashboard with custom GLSL shaders.", color: "purple" },
    { title: "Project Beta", description: "E-commerce platform focused on seamless glass UI.", color: "blue" },
    { title: "Project Gamma", description: "Design system for a minimalist luxury brand.", color: "pink" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <div className="flex flex-col items-center mb-16">
        <div className="h-px w-12 bg-pastel-purple mb-4" />
        <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-500">Selected Works</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}