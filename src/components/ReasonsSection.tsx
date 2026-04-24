import { Shield, Brain, Zap, Globe } from "lucide-react";

const reasons = [
  { 
    title: "Sovereign Identity", 
    desc: "Establish a permanent, cryptographically secured identity that you own completely, across the entire ecosystem.", 
    icon: <Shield className="w-8 h-8 text-primary" /> 
  },
  { 
    title: "Neural Intelligence", 
    desc: "Harness the power of decentralized AI to analyze trends, predict engagement, and optimize your creative strategy.", 
    icon: <Brain className="w-8 h-8 text-accent" /> 
  },
  { 
    title: "Instant Settlement", 
    desc: "Experience zero-latency revenue distribution with automated smart contracts that settle value in real-time.", 
    icon: <Zap className="w-8 h-8 text-primary" /> 
  },
];

const ReasonsSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/5 border border-white/5 rounded-[3rem] p-8 md:p-16 relative shadow-2xl overflow-hidden group hover:border-primary/20 transition-all duration-700">
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-all duration-700" />

          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Why <span className="text-primary">Vantedge</span>?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Vantedge gives you the tools you need to succeed as an independent creator. 
              We focus on efficiency, ownership, and scale.
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative px-4">
            {reasons.map((r, idx) => (
              <div key={r.title} className="relative flex flex-col items-center text-center group/item">
                <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-xl group-hover/item:scale-110 group-hover/item:border-primary/30 transition-all duration-500">
                  {r.icon}
                </div>
                
                <h4 className="text-white font-bold text-lg mb-4 tracking-tight">{r.title}</h4>
                <p className="text-white/40 text-[13px] leading-relaxed font-medium max-w-[280px] group-hover/item:text-white/60 transition-colors">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
 
          <div className="mt-20 flex justify-center">
            <a 
              href="#" 
              className="px-10 py-4 bg-primary text-primary-foreground font-bold text-sm rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-primary/20"
            >
              Start Creating
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
