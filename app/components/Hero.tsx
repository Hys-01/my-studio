"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-black text-white">
      
      {/* 1. Background Gradient Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 text-center max-w-2xl px-4">
        
        {/* 2. "Available for work" Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300 font-mono">Available for Hire</span>
        </motion.div>

        {/* 3. Main Title with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent"
        >
          Building the <br /> Digital Future.
        </motion.h1>

        {/* 4. Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed"
        >
          I'm a Full Stack Developer transforming ideas into 
          high-performance web applications. Obsessed with clean code and modern design.
        </motion.p>

        {/* 5. Social Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <SocialButton icon={<Github size={20} />} href="https://github.com/YOUR_USERNAME" label="GitHub" />
          <SocialButton icon={<Linkedin size={20} />} href="https://linkedin.com/in/YOUR_USERNAME" label="LinkedIn" />
          <SocialButton icon={<Code2 size={20} />} href="https://leetcode.com/YOUR_USERNAME" label="LeetCode" />
        </motion.div>
      </div>
    </section>
  );
}

// Reusable Button Component
function SocialButton({ icon, href, label }: { icon: any; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 hover:border-white/20 transition-all duration-300 group relative"
    >
      <span className="text-gray-300 group-hover:text-white transition-colors">{icon}</span>
    </a>
  );
}