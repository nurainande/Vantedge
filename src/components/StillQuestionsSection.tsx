const StillQuestionsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        <img
          src="https://streamafrica.org/assets/img/avatar-group.png"
          alt="Avatar group"
          className="h-10 mx-auto mb-6"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Still have questions?
        </h2>
        <p className="text-muted-foreground text-sm mb-8">
          Can't find the answer you're looking for? Please chat to our friendly team.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default StillQuestionsSection;
