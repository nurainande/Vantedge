import { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

const faqs = [
  {
    q: "What is Vantedge?",
    a: "Vantedge is a platform that helps creators own their digital identity and work. It's built to give you total control over how you share and monetize your content.",
  },
  {
    q: "How does it protect my work?",
    a: "We use secure technology to link your creative works directly to your profile. This means you have full ownership and control over your intellectual property without needing a middleman.",
  },
  {
    q: "Can I use my existing tools?",
    a: "Absolutely. Vantedge is designed to work with the tools you already use, including professional creative software and third-party platforms.",
  },
  {
    q: "How do I get paid?",
    a: "Earnings are handled automatically through secure systems. You get paid directly based on how people engage with your work, and the funds go straight to your secure account.",
  },
  {
    q: "Is it easy to set up?",
    a: "Yes! We've made the process as simple as possible so you can focus on what you do best—creating. Just follow the steps in our 'Get Started' section.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-background" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Everything you need to know about the Vantedge ecosystem
          </p>
        </div>

        <div className="border-t border-white/10">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-bottom border-white/10"
            >
              <div className="border-b border-white/10">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-8 flex items-start justify-between text-left group transition-all"
                >
                  <div className="flex-1 pr-8">
                    <h4 className={`text-white font-bold text-base transition-colors group-hover:text-primary ${openIndex === i ? 'mb-4' : ''}`}>
                      {faq.q}
                    </h4>
                    {openIndex === i && (
                      <p className="text-white/50 text-[13px] leading-relaxed font-medium transition-all animate-in fade-in slide-in-from-top-2 duration-500">
                        {faq.a}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 mt-1">
                    {openIndex === i ? (
                      <MinusCircle size={24} className="text-white/40 group-hover:text-primary transition-colors" />
                    ) : (
                      <PlusCircle size={24} className="text-white/40 group-hover:text-primary transition-colors" />
                    )}
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
