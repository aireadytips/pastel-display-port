import { Mail, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="font-inter text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate on new projects. Whether you have a question or
            just want to say hello, feel free to reach out.
          </p>

          <a href="mailto:hello@designer.com">
            <Button
              size="lg"
              className="mb-12 bg-primary text-primary-foreground hover:scale-105 transition-transform shadow-lg font-inter rounded-full px-8 py-6 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              hello@designer.com
            </Button>
          </a>

          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="group"
                aria-label={social.label}
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-md">
                  <social.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
