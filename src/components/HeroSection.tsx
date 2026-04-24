import { Sparkles, Plus, User, Phone, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden bg-[#0A0F0D]">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.png" 
          alt="hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0F0D]/70" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Content Centered */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-white/10 mb-8 shadow-xl">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-semibold text-white/70">The Creator Ecosystem</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            The Future of <span className="text-primary">Digital Ownership</span>.
          </h1>

          <p className="text-white/70 text-sm md:text-lg max-w-2xl mb-12 leading-relaxed">
            Vantedge provides the tools for the next generation of creators. 
            Build, scale, and own your creative legacy on a platform designed for true control.
          </p>

          {/* Action Box */}
          <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl relative transition-all duration-500 hover:border-primary/30 group">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                  <Plus size={20} />
                </div>
                
                <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm transition-all hover:bg-white/10">
                  <User size={16} className="text-white/40" />
                  <span className="text-white/40 font-medium">Your Profile</span>
                </div>

                <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm transition-all hover:bg-white/10">
                  <Phone size={16} className="text-white/40" />
                  <span className="text-white/40 font-medium">Your Node</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-primary transition-colors">
                  <Sparkles size={20} />
                </div>
                <button className="px-10 py-3.5 bg-primary text-primary-foreground hover:brightness-110 border border-white/10 text-sm rounded-xl font-bold transition-all shadow-xl shadow-primary/20">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
