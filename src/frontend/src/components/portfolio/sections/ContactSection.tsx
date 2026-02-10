import { SectionHeader } from '../SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { contactInfo } from '@/data/portfolio';
import { Mail, Download, ExternalLink, Phone, MapPin } from 'lucide-react';
import { SiLinkedin, SiInstagram, SiX, SiBehance } from 'react-icons/si';

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: SiLinkedin,
  instagram: SiInstagram,
  twitter: SiX,
  behance: SiBehance
};

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Ready to bring your content vision to life? Reach out and let's discuss your project."
        />

        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="space-y-3 text-center">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                {contactInfo.phoneNumber && (
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{contactInfo.phoneNumber}</span>
                  </div>
                )}
                {contactInfo.location && (
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{contactInfo.location}</span>
                  </div>
                )}
              </div>

              {/* Email CTA */}
              <div className="text-center pt-2">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <a href={`mailto:${contactInfo.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Me an Email
                  </a>
                </Button>
              </div>

              {/* Resume Download */}
              <div className="text-center">
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                  <a href={contactInfo.resumePath} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t">
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Connect with me on social media
                </p>
                <div className="flex justify-center gap-4">
                  {contactInfo.social.map((social) => {
                    const Icon = socialIconMap[social.icon] || ExternalLink;
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-accent transition-colors"
                        aria-label={social.platform}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
