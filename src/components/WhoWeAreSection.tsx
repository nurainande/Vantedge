import { Globe, MoveRight } from "lucide-react";

const WhoWeAreSection = () => {
  return (
    <section className="py-24 px-4 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight">
          The <span className="text-primary">Vision</span> Behind Vantedge
        </h2>
        
        <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-4xl mx-auto">
          Vantedge is built on the belief that creators should have full ownership of their digital legacy. 
          We provide the tools and infrastructure needed to bridge the gap between creative passion and 
          sustainable growth. Our mission is to empower every individual with the technology to build, 
          manage, and scale their community on their own terms.
        </p>

        <a 
          href="#" 
          className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold text-xs hover:bg-white/10 transition-all mb-20 group"
        >
          Learn More
          <MoveRight size={16} className="group-hover:translate-x-2 transition-transform text-primary" />
        </a>

        <div className="relative group max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full group-hover:bg-primary/30 transition-all duration-700" />
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
            alt="Global Vantedge Network"
            className="w-full rounded-[2.5rem] shadow-2xl relative z-10 border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          
          {/* Floating Badge */}
          <div className="absolute top-[20%] -left-4 md:-left-12 glass-effect p-6 rounded-[2rem] shadow-2xl animate-float z-20 border border-primary/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Globe size={24} />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-2xl leading-none">1.2B+</div>
                <div className="text-white/40 text-[10px] font-semibold mt-1">Global Community</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
