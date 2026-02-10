import { SectionHeader } from '../SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/data/portfolio';
import { Pen, Share2, Palette, ShoppingCart, Camera, Video } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  writing: Pen,
  social: Share2,
  design: Palette,
  ecommerce: ShoppingCart,
  photography: Camera,
  videography: Video
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="What I Offer"
          subtitle="Comprehensive content creation and management services tailored to your brand's needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Pen;
            return (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
