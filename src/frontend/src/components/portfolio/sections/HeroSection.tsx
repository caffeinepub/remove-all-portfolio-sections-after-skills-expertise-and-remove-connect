import { ArrowRight, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/portfolio-hero.dim_1920x800.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 backdrop-blur-sm mb-6">
            <Camera className="h-4 w-4" />
            <span className="text-sm font-medium">Social Media Executive / Graphic Designer / Content Writer</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm
            <span className="block text-primary mt-2">Pradip Maity</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Creative and results-driven Social Media Executive, Graphic Designer & Content Writer with a proven track record and experience of around 4 years of developing and implementing successful social media strategies. Skilled in SEO blog writing, website content, e-commerce content, PR content, photography, videography, graphic design, content creation, community management, and driving engagement and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('#skills')}
              className="group"
            >
              View My Skills
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#experience')}
            >
              See My Experience
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
