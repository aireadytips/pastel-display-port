import { useState } from "react";
import { Button } from "@/components/ui/button";
import projectBranding from "@/assets/project-branding.jpg";
import projectWeb from "@/assets/project-web.jpg";
import projectPackaging from "@/assets/project-packaging.jpg";
import projectIllustration from "@/assets/project-illustration.jpg";
import projectEditorial from "@/assets/project-editorial.jpg";

type Category = "All" | "Branding" | "Web Design" | "Packaging" | "Illustration" | "Editorial";

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
}

const projects: Project[] = [
  { id: 1, title: "Luxury Brand Identity", category: "Branding", image: projectBranding },
  { id: 2, title: "Modern Web Interface", category: "Web Design", image: projectWeb },
  { id: 3, title: "Cosmetic Packaging", category: "Packaging", image: projectPackaging },
  { id: 4, title: "Abstract Artwork", category: "Illustration", image: projectIllustration },
  { id: 5, title: "Fashion Magazine Layout", category: "Editorial", image: projectEditorial },
  { id: 6, title: "Minimalist Branding", category: "Branding", image: projectBranding },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const categories: Category[] = [
    "All",
    "Branding",
    "Web Design",
    "Packaging",
    "Illustration",
    "Editorial",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my recent work across various design disciplines
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`font-inter rounded-full transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "hover:scale-105"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-playfair text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="font-inter text-sm opacity-90">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
