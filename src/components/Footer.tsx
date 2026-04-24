import { Facebook, Twitter, Youtube, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-20 px-4 bg-background overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20 px-4">
          <div>
            <h4 className="text-white font-bold text-xs mb-8">Ecosystem</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors text-[13px] font-medium">Nexus Protocol</a></li>
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors text-[13px] font-medium">Sovereign Identity</a></li>
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors text-[13px] font-medium">Neural Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs mb-8">Developer</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors text-[13px] font-medium">Documentation</a></li>
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors text-[13px] font-medium">Bridge API</a></li>
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors text-[13px] font-medium">Grid SDK</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs mb-8">Governance</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors text-[13px] font-medium">Vantedge DAO</a></li>
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors text-[13px] font-medium">Voting</a></li>
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors text-[13px] font-medium">Framework</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs mb-8">Infrastructure</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors text-[13px] font-medium">Global Nodes</a></li>
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors text-[13px] font-medium">Status Grid</a></li>
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors text-[13px] font-medium">Telemetrics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs mb-8">Organization</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors text-[13px] font-medium">About</a></li>
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors text-[13px] font-medium">Mission</a></li>
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors text-[13px] font-medium">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mb-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {["Privacy", "Terms", "Support", "Contact"].map((link) => (
                <a key={link} href="#" className="text-white/40 hover:text-white transition-colors text-[11px] font-semibold">
                  {link}
                </a>
              ))}
              <button className="flex items-center gap-2 text-primary font-semibold text-[11px]">
                <Globe size={14} />
                <span>English</span>
              </button>
            </div>

            <div className="flex items-center gap-6">
              {[Twitter, Youtube, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="text-white/20 hover:text-primary transition-all transform hover:scale-110">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <p className="text-white/20 text-[11px] font-semibold">
            © 2026 Vantedge. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
