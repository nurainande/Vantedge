const GetStartedSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden relative shadow-[0_0_80px_-20px_rgba(14,165,233,0.15)] group">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 p-8 md:p-16 relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 tracking-tight leading-tight">
              Ready to join <span className="text-primary">Vantedge</span>?
            </h2>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all font-medium"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all font-medium"
                />
              </div>
            </div>
            <button className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-sm hover:brightness-110 transition-all shadow-xl shadow-primary/20 mb-6">
              Join Now
            </button>
            <p className="text-white/40 text-xs leading-relaxed">
              By joining, you agree to our terms of service and 
              privacy policy.
            </p>
          </div>
          <div className="lg:w-1/2 relative h-[400px] lg:h-full min-h-[400px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10 hidden lg:block" />
            <img
              src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=2000"
              alt="Join Vantedge Network"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
