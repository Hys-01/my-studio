interface SocialProps {
  platform: string;
  handle: string;
  color: "red" | "blurple" | "cyan" | "pink" | "aqua" | "orange";
  link: string;
}

function SocialCard({ platform, handle, color, link }: SocialProps) {
  // Mapping for hover glows
  const glows = {
    red: "group-hover:shadow-[0_0_50px_-10px_rgba(255,100,100,0.4)] border-red-500/30",
    blurple: "group-hover:shadow-[0_0_50px_-10px_rgba(88,101,242,0.4)] border-[#5865F2]/30",
    cyan: "group-hover:shadow-[0_0_50px_-10px_rgba(0,255,255,0.4)] border-cyan-400/30",
    pink: "group-hover:shadow-[0_0_50px_-10px_rgba(255,100,255,0.4)] border-pink-400/30",
    aqua: "group-hover:shadow-[0_0_50px_-10px_rgba(100,255,255,0.4)] border-aqua-400/30",
    orange: "group-hover:shadow-[0_0_50px_-10px_rgba(255,180,100,0.4)] border-orange-400/30",
  };

  // Mapping for the expanding lines (using your pastel variables from CSS)
  const lineColors = {
    blurple: "bg-[#5865F2]",
    cyan: "bg-pastel-sky",
    red: "bg-pastel-red",
    pink: "bg-pastel-pink",
    aqua: "bg-pastel-aqua",
    orange: "bg-pastel-orange",
  };

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group relative rounded-2xl glass p-8 transition-all duration-500 hover:-translate-y-2 block ${glows[color]}`}
    >
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white tracking-tight">{platform}</h3>
        <p className="mt-1 text-white/50 text-sm font-mono tracking-tighter">{handle}</p>

        {/* Extending Line */}
        <div className={`mt-6 h-[2px] w-12 ${lineColors[color]} opacity-60 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(255,255,255,0.3)]`} />
      </div>
    </a>
  );
}

export default function Socials() {
  const socialList: SocialProps[] = [
    { 
        platform: "Steam", 
        handle: "@I M X ★", 
        color: "cyan", 
        link: "https://steamcommunity.com/profiles/76561198398937916" 
    },
    { 
        platform: "Roblox", 
        handle: "@Bubbly_Budgie (IsoAlgorithm)", 
        color: "red", 
        link: "https://www.roblox.com/users/236371601/profile" 
    },
    { 
        platform: "Discord", 
        handle: "@hys01", 
        color: "blurple", 
        link: "https://discord.com/users/590678030356185095" // Update this!
    },
    { 
        platform: "Instagram alt", 
        handle: "@---", 
        color: "pink", 
        link: "#" 
    },
  ];

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-20">
      <div className="relative z-10 flex flex-col items-center mb-16">
        <h2 className="text-sm uppercase tracking-[0.8em] text-pastel-sky font-bold mb-6">Connect</h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-pastel-sky to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {socialList.map((s, i) => (
          <SocialCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}