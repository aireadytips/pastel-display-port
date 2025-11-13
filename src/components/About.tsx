import designerProfile from "@/assets/designer-profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src={designerProfile}
              alt="Creative Designer Profile"
              className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              style={{ aspectRatio: "3/4" }}
            />
          </div>
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              With over 8 years of experience in graphic design, I specialize in creating
              compelling visual identities that resonate with audiences and elevate brands.
            </p>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              My approach combines strategic thinking with artistic vision, ensuring every
              project not only looks beautiful but also achieves its intended purpose. From
              branding and packaging to web design and illustration, I bring creativity and
              professionalism to every collaboration.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h3 className="font-playfair text-3xl font-bold text-primary mb-2">50+</h3>
                <p className="font-inter text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="font-playfair text-3xl font-bold text-primary mb-2">30+</h3>
                <p className="font-inter text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
