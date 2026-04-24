const partners = [
  { name: "Instagram", src: "https://streamafrica.org/assets/img/partners/instagram.png" },
  { name: "SoundCloud", src: "https://streamafrica.org/assets/img/partners/soundcloud.png" },
  { name: "Netflix", src: "https://streamafrica.org/assets/img/partners/netflix.png" },
  { name: "Spotify", src: "https://streamafrica.org/assets/img/partners/spotify.png" },
  { name: "Apple Watch", src: "https://streamafrica.org/assets/img/partners/apple-watch.png" },
  { name: "YouTube", src: "https://streamafrica.org/assets/img/partners/youtube.png" },
  { name: "TikTok", src: "https://streamafrica.org/assets/img/partners/tiktok.png" },
];

const PartnersSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white/30 font-semibold text-xs mb-16">
          Trusted by 287+ million creatives and businesses
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 lg:gap-x-20 max-w-6xl mx-auto">
          {partners.map((p) => (
            <div key={p.name} className="relative group">
              <img 
                src={p.src} 
                alt={p.name} 
                className="h-7 md:h-9 object-contain opacity-20 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110" 
              />
              <div className="absolute -inset-2 bg-primary/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
