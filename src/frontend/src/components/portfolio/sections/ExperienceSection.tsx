import { SectionHeader } from '../SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { experiences } from '@/data/portfolio';
import { CheckCircle2 } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Professional Journey"
          subtitle="A track record of delivering exceptional content and creative solutions."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl">{exp.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground mt-1">
                      {exp.organization}
                    </CardDescription>
                    {exp.location && (
                      <CardDescription className="text-sm mt-0.5">
                        {exp.location}
                      </CardDescription>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
