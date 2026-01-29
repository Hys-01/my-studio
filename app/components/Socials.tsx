interface SocialProps {
  platform: string;
  handle: string;
  color: "red" | "blurple" | "cyan";
  link: string;
}

function SocialCard({ platform, handle, color }: SocialProps) {
  const glows = {
    red: "group-hover:shadow-[0_0_50px_-10px_rgba(255,100,100,0.4)] border-red-500/30",
    blurple: "group-hover:shadow-[0_0_50px_-10px_rgba(88,101,242,0.4)] border-[#5865F2]/30",
    cyan: "group-hover:shadow-[0_0_50px_-10px_rgba(0,255,255,0.4)] border-cyan-400/30",
  };

  const lineColors = {
    red: "bg-red-500",
    blurple: "bg-[#5865F2]",
    cyan: "bg-cyan-400",
  };

  return (
    <div className={`group relative rounded-2xl glass p-8 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${glows[color]}`}>
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white tracking-tight">{platform}</h3>
        <p className="mt-1 text-white/50 text-sm font-mono tracking-tighter">{handle}</p>
        
        {/* Extending Line */}
        <div className={`mt-6 h-[2px] w-12 ${lineColors[color]} opacity-60 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(255,255,255,0.3)]`} />
      </div>
    </div>
  );
}

export default function Socials() {
  const socialList: SocialProps[] = [
    { platform: "YouTube", handle: "@YourChannel", color: "red", link: "#" },
    { platform: "Discord", handle: "Community Server", color: "blurple", link: "#" },
    { platform: "Twitter / X", handle: "@YourTag", color: "cyan", link: "#" },
  ];

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-xs uppercase tracking-[0.5em] text-white/30 font-bold mb-4">Connect</h2>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {socialList.map((s, i) => (
          <SocialCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}