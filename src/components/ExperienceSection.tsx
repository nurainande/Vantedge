const ExperienceSection = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          Your <span className="text-primary">Dashboard</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Manage your work and community through the Vantedge Command Center. 
          Real-time activity and asset management at your fingertips.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative px-4">
        {/* Terminal/Browser Mockup */}
        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#020617] shadow-[0_0_100px_-20px_rgba(14,165,233,0.3)] transition-all duration-700 hover:scale-[1.01] hover:border-primary/30 group">
          {/* Header Bar */}
          <div className="bg-white/5 backdrop-blur-md h-12 flex items-center px-6 relative border-b border-white/5">
            {/* Window Controls */}
            <div className="flex gap-2 absolute left-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
            </div>
            
            {/* Center Pill */}
            <div className="mx-auto bg-white/5 border border-white/10 px-8 py-1.5 rounded-full flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-white/40 font-semibold text-[10px]">vantedge-dashboard.sh</span>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="relative aspect-video bg-slate-900/50 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
              alt="Vantedge Dashboard Interface"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100 transition-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
            
            {/* Overlays */}
            <div className="absolute top-8 right-8 p-4 glass-effect rounded-2xl border border-white/10 animate-float">
              <div className="text-[10px] text-white/50 font-semibold mb-1">Live Activity</div>
              <div className="text-xl font-bold text-primary">99.9% Uptime</div>
            </div>
          </div>
        </div>

        {/* Background Glows */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] -z-10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 blur-[100px] -z-10 rounded-full" />
      </div>
    </section>
  );
};

export default ExperienceSection;
