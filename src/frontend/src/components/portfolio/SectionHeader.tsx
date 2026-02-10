interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const containerClass = align === 'center' ? 'mx-auto max-w-3xl' : '';

  return (
    <div className={`${alignClass} ${containerClass} mb-12`}>
      {eyebrow && (
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
