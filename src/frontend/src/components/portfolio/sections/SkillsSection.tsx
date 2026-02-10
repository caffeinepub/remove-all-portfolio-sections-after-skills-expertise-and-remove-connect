import { SectionHeader } from '../SectionHeader';
import { skillCategories } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Skills & Tools"
          title="Technical Expertise"
          subtitle="A diverse skill set spanning content creation, design, and visual media production."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
