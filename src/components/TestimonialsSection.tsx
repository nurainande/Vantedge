import { ChevronLeft, ChevronRight, Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Thorne",
    role: "Digital Architect",
    quote: "Vantedge has completely redefined how we manage our creative pipeline. The sovereign identity model is a game-changer for digital ownership.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Sarah Chen",
    role: "Neural Artist",
    quote: "The integration was seamless. Having real-time telemetry on my creative assets has allowed me to scale in ways I never thought possible.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-background relative" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        {/* Centered Badge & Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 shadow-xl">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-semibold text-white/60">Powering 50k+ creators</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            What our <span className="text-primary">creators</span> say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/5 rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center gap-10 hover:border-primary/20 transition-all duration-500 shadow-2xl overflow-hidden relative group">
              <div className="w-48 h-48 md:w-52 md:h-52 shrink-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-105">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-primary" fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/70 text-[15px] leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-lg tracking-tight">{t.name}</h4>
                  <p className="text-primary text-xs font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <button className="flex items-center gap-4 text-white/40 hover:text-white transition-all group">
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold">Previous</span>
          </button>
          <button className="flex items-center gap-4 text-white/40 hover:text-white transition-all group">
            <span className="text-xs font-bold">Next</span>
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
