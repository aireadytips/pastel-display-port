import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, Luxe Beauty",
    text: "Working with this designer transformed our brand identity completely. The attention to detail and creative vision exceeded all expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, TechFlow",
    text: "Exceptional work on our website redesign. The design is not only beautiful but also highly functional and user-friendly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Founder, Artisan Co.",
    text: "Our packaging design has received countless compliments. The elegant aesthetic perfectly captures our brand essence.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-playfair text-lg font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
