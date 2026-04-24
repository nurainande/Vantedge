import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RegionBadge = ({ name }: { name: string }) => (
  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
    <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
    <span className="text-[10px] font-semibold text-primary">{name}</span>
  </span>
);

const streamers = [
  { rank: 1, name: "THORNE_01", earnings: 18003.70, country: "AFRICA CENTRAL", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200" },
  { rank: 2, name: "CYBER_FLUX", earnings: 17066.20, country: "EUROPE WEST", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200" },
  { rank: 3, name: "NEURAL_MINT", earnings: 13005.30, country: "NORTH AMERICA", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200" },
  { rank: 4, name: "VANTEDGE_PIONEER", earnings: 12466.30, country: "AFRICA CENTRAL", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200" },
  { rank: 5, name: "GRID_COMMANDER", earnings: 11355.60, country: "AFRICA CENTRAL", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200" },
  { rank: 6, name: "NEXUS_CORE", earnings: 10530.90, country: "AFRICA CENTRAL", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200" },
  { rank: 7, name: "SOVEREIGN_AI", earnings: 9812.40, country: "AFRICA CENTRAL", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200" },
  { rank: 8, name: "GHOST_NODE", earnings: 9450.10, country: "AFRICA CENTRAL", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200" },
];

const countries = ["AFRICA CENTRAL", "EUROPE WEST", "NORTH AMERICA", "ASIA PACIFIC"];

const TopStreamer = () => {
  const [selectedCountry, setSelectedCountry] = useState("AFRICA CENTRAL");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const top3 = streamers.slice(0, 3);
  const rest = streamers.slice(3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-40 pb-20 px-4 md:px-8 lg:px-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-8">
            {/* Title + Subtitle */}
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold text-white/40">Live Stats</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                Top <span className="text-primary">Creators</span>
              </h1>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Meet the top creators on Vantedge. See how they're growing their communities 
                 and making an impact across the globe.
              </p>
            </div>

            {/* Country Filter */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-bold hover:border-primary/50 transition-all group"
              >
                <span>{selectedCountry}</span>
                <ChevronDown size={16} className={`transition-transform duration-500 group-hover:text-primary ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-4 bg-[#0A0F14] border border-white/10 rounded-[2rem] shadow-2xl z-20 min-w-[240px] py-4 overflow-hidden backdrop-blur-3xl animate-in fade-in slide-in-from-top-4 duration-500">
                  {countries.map((country) => (
                    <button
                      key={country}
                      onClick={() => {
                        setSelectedCountry(country);
                        setDropdownOpen(false);
                      }}
                      className={`w-full px-8 py-4 text-left text-[10px] font-bold hover:bg-white/5 transition-colors ${
                        selectedCountry === country
                          ? "text-primary bg-white/5"
                          : "text-white/40"
                      }`}
                    >
                      {country}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ============ TOP 3 PODIUM ============ */}
          <div className="relative flex items-end justify-center gap-6 md:gap-16 mb-24 pt-12">
            {/* 2nd Place - Left */}
            <PodiumAvatar
              rank={2}
              name={top3[1].name}
              earnings={top3[1].earnings}
              img={top3[1].img}
              size="md"
              accent="indigo"
            />

            {/* 1st Place - Center */}
            <div className="-mt-16 scale-110 md:scale-125 relative z-10">
              <PodiumAvatar
                rank={1}
                name={top3[0].name}
                earnings={top3[0].earnings}
                img={top3[0].img}
                size="lg"
                accent="cyan"
              />
            </div>

            {/* 3rd Place - Right */}
            <PodiumAvatar
              rank={3}
              name={top3[2].name}
              earnings={top3[2].earnings}
              img={top3[2].img}
              size="md"
              accent="indigo"
            />
          </div>

          {/* ============ LEADERBOARD LIST ============ */}
          <div className="flex flex-col gap-4">
            {rest.map((streamer) => (
              <div
                key={streamer.rank}
                className="flex items-center gap-6 bg-white/5 border border-white/5 rounded-[2rem] px-8 py-6 hover:bg-white/[0.08] hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Rank */}
                <span className="text-white/10 font-bold text-2xl w-10 shrink-0">
                  {streamer.rank}
                </span>

                {/* Avatar */}
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shrink-0 group-hover:border-primary/30 transition-all duration-500 relative">
                  <img
                    src={streamer.img}
                    alt={streamer.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                </div>

                {/* Name + Region */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-bold text-lg md:text-xl truncate group-hover:text-primary transition-colors">
                    {streamer.name}
                  </h4>
                  <div className="mt-2">
                    <RegionBadge name={streamer.country} />
                  </div>
                </div>

                {/* Earnings */}
                <div className="text-right shrink-0">
                  <span className="text-white font-bold text-lg md:text-xl tracking-tight">
                    ${streamer.earnings.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                  <p className="text-[10px] font-semibold text-white/20 mt-1">Total Earnings</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

/* ============ PODIUM AVATAR COMPONENT ============ */
interface PodiumAvatarProps {
  rank: number;
  name: string;
  earnings: number;
  img: string;
  size: "lg" | "md";
  accent: "cyan" | "indigo";
}

const PodiumAvatar = ({ rank, name, earnings, img, size, accent }: PodiumAvatarProps) => {
  const isFirst = rank === 1;
  const avatarSize = size === "lg" ? "w-28 h-28" : "w-20 h-20";
  const glowColor = accent === "cyan" ? "rgba(14,165,233,0.3)" : "rgba(99,102,241,0.3)";
  const ringColor = accent === "cyan" ? "border-primary" : "border-indigo-500/50";

  return (
    <div className="flex flex-col items-center">
      {/* Rank Indicator */}
      <div className="mb-4">
        <span className={`text-[10px] font-bold ${isFirst ? 'text-primary' : 'text-white/20'}`}>
          Rank {rank}
        </span>
      </div>

      {/* Avatar Container */}
      <div className="relative group">
        {/* Glow Effect */}
        <div 
          className="absolute inset-0 blur-[30px] rounded-full transition-all duration-1000 group-hover:blur-[50px]"
          style={{ backgroundColor: glowColor }}
        />
        
        {/* Ring */}
        <div className={`relative ${avatarSize} rounded-[2rem] overflow-hidden border-2 ${ringColor} bg-background p-1.5 shadow-2xl transition-transform duration-700 group-hover:scale-105`}>
          <img
            src={img}
            alt={name}
            className={`w-full h-full object-cover rounded-[1.5rem] ${isFirst ? '' : 'grayscale'} group-hover:grayscale-0 transition-all duration-1000`}
          />
        </div>

        {/* Rank Badge */}
        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-background border border-white/10 flex items-center justify-center text-white font-bold text-sm shadow-2xl">
          #{rank}
        </div>
      </div>

      {/* Name */}
      <h3 className="text-white font-bold text-sm md:text-base mt-8 tracking-tight">{name}</h3>
      
      {/* Yield */}
      <div className="mt-2 text-center">
        <span className="text-primary font-bold text-sm tracking-tight">
          ${earnings.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </span>
      </div>
    </div>
  );
};

export default TopStreamer;