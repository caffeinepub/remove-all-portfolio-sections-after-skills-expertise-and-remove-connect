import { SectionHeader } from '../SectionHeader';
import { Sparkles, Users, Palette, Camera } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: Users,
      title: 'Social Media Expert',
      description: 'Experienced in managing social media handles and creating engaging content for organizations across multiple platforms.'
    },
    {
      icon: Sparkles,
      title: 'Versatile Writer',
      description: 'Skilled in writing for e-commerce, websites, blogs, and marketing materials that drive results and engagement.'
    },
    {
      icon: Palette,
      title: 'Creative Designer',
      description: 'Proficient in Photoshop and Canva, creating eye-catching graphics and brand assets that stand out.'
    },
    {
      icon: Camera,
      title: 'Visual Storyteller',
      description: 'Professional photographer and videographer with expertise in capturing compelling visuals with professional equipment.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Multi-Disciplinary Content Creator"
          subtitle="Combining the art of storytelling with visual excellence to create impactful content that resonates with audiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
