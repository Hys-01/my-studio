import { Lock } from "lucide-react"; // npm install lucide-react

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 pointer-events-none">
      {/* Your Gaming Tag / Logo */}
      <div className="text-white font-bold tracking-tighter text-xl pointer-events-auto">
        GAMER_TAG
      </div>

      {/* The "Forbidden" Button */}
      <div className="group relative pointer-events-auto">
        <button 
          className="flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-white/40 cursor-not-allowed transition-all"
          title="Access Denied"
        >
          <Lock size={14} />
          <span className="text-xs font-mono tracking-widest uppercase">Personal Portfolio</span>
        </button>
        
        {/* Tooltip on hover */}
        <div className="absolute top-full mt-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] px-2 py-1 rounded font-mono whitespace-nowrap">
          403: AUTHORIZED PERSONNEL ONLY
        </div>
      </div>
    </nav>
  );
}