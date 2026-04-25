import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Ecosystem", href: "#" },
  { name: "Vantedge ID", href: "#" },
  { name: "Governance", href: "#" },
  { name: "Infrastructure", href: "#" },
  // { name: "Documentation", href: "/animation" }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl transition-all duration-500 ${
        scrolled ? "bg-black/60 backdrop-blur-2xl border-white/10 py-2.5" : "bg-[#0A0F0D]/40 backdrop-blur-xl border-white/5 py-3"
      } rounded-[2.5rem] border px-4 md:px-8 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-3 md:gap-4 cursor-pointer group">
        <div className="relative w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
          <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/30 transition-all" />
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="w-1.5 h-6 bg-primary rounded-full transform -rotate-12 translate-x-0.5" />
            <div className="w-1.5 h-4 bg-white rounded-full transform rotate-12 -translate-x-0.5 opacity-80" />
          </div>
        </div>
        <span className="text-white font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
          Vantedge
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden xl:flex items-center gap-4 2xl:gap-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-xs font-semibold text-white/50 hover:text-white transition-all duration-300 relative group py-2"
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-[60%]" />
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden xl:flex items-center gap-2">
        <button className="px-5 py-2.5 text-xs font-semibold text-white/80 hover:text-white transition-colors">
          Sign In
        </button>
        <button 
          onClick={() => navigate('/signup')}
          className="px-6 py-2.5 text-xs font-bold text-primary-foreground bg-primary rounded-2xl hover:brightness-110 transition-all shadow-[0_10px_20px_-5px_rgba(34,197,94,0.4)] flex items-center gap-2 group"
        >
          Get Started
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="xl:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-5 p-8 bg-[#0A0F0D]/95 backdrop-blur-2xl border border-white/5 rounded-[2rem] animate-in fade-in slide-in-from-top-4 duration-500 xl:hidden shadow-2xl">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-base font-bold text-white/60 hover:text-white transition-colors block py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-10">
            <button className="w-full px-6 py-4 text-sm font-bold text-white bg-white/5 border border-white/10 rounded-2xl">Sign In</button>
            <button 
              onClick={() => {
                setMobileOpen(false);
                navigate('/signup');
              }}
              className="w-full px-6 py-4 text-sm font-bold text-primary-foreground bg-primary rounded-2xl shadow-xl shadow-primary/20"
            >
              Get Started
            </button>
          </div>
        </div>
      )}


    </nav>
  );
};

export default Navbar;
