import { 
  Cpu, 
  ShieldCheck, 
  BarChart3, 
  Globe, 
  Zap, 
  Database, 
  Layers, 
  Activity, 
  Users 
} from "lucide-react";

const features = [
  { 
    title: "Nexus Protocol", 
    desc: "Unified authentication and identity management across the entire Vantedge ecosystem, ensuring seamless cross-platform continuity.", 
    icon: <Cpu className="w-8 h-8 text-primary" /> 
  },
  { 
    title: "Sovereign Assets", 
    desc: "End-to-end encrypted management of your digital intellectual property with granular permission control and audit logs.", 
    icon: <ShieldCheck className="w-8 h-8 text-white/80" /> 
  },
  { 
    title: "Neural Analytics", 
    desc: "Advanced predictive modeling for audience engagement, sentiment analysis, and multi-channel performance tracking.", 
    icon: <BarChart3 className="w-8 h-8 text-accent" /> 
  },
  { 
    title: "Global Node Network", 
    desc: "Decentralized content delivery architecture providing ultra-low latency streaming and data propagation globally.", 
    icon: <Globe className="w-8 h-8 text-primary" /> 
  },
  { 
    title: "Quantum Bandwidth", 
    desc: "Optimized data transport protocols designed for 8K video streaming and real-time interactive experiences.", 
    icon: <Zap className="w-8 h-8 text-primary" /> 
  },
  { 
    title: "Legacy Vault", 
    desc: "Distributed cold storage infrastructure for the permanent archiving of high-value creative assets and metadata.", 
    icon: <Database className="w-8 h-8 text-white/60" /> 
  },
  { 
    title: "Bridge Interface", 
    desc: "Comprehensive API suite and SDKs for deep integration with professional creative tools and third-party platforms.", 
    icon: <Layers className="w-8 h-8 text-accent" /> 
  },
  { 
    title: "Real-time Governance", 
    desc: "Transparent, on-chain management of platform parameters and community-driven development initiatives.", 
    icon: <Activity className="w-8 h-8 text-primary" /> 
  },
  { 
    title: "Vantedge Bazaar", 
    desc: "P2P marketplace for high-performance computing resources, creative assets, and specialized technical services.", 
    icon: <Users className="w-8 h-8 text-white/80" /> 
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 bg-background relative" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Our <span className="text-primary">Ecosystem</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Vantedge is built on reliable tools designed to help 
            the next generation of independent creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((f) => (
            <div 
              key={f.title} 
              className="bg-card/50 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-primary/20 hover:bg-card group h-full"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 group-hover:bg-primary/10">
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-4 group-hover:text-primary transition-colors">{f.title}</h3>
              <p className="text-white/50 text-[13px] leading-relaxed font-medium group-hover:text-white/70">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
