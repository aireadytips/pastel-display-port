const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6">
          Creative Designer
        </h1>
        <p className="font-inter text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Crafting beautiful visual experiences through elegant design and thoughtful branding
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-primary text-primary-foreground font-inter font-medium rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-secondary text-secondary-foreground font-inter font-medium rounded-full hover:scale-105 transition-transform"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
