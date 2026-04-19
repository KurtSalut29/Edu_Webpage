interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  /** Optional eyebrow label shown above the title */
  eyebrow?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      {/* Optional eyebrow */}
      {eyebrow && (
        <p className={`text-gold/70 text-xs font-semibold uppercase tracking-[0.25em] mb-3 ${centered ? '' : ''}`}>
          {eyebrow}
        </p>
      )}

      {/* Title */}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>

      {/* Animated gold underline */}
      <div className={`mt-4 mb-5 flex ${centered ? 'justify-center' : ''}`}>
        <div className="relative h-0.5 w-20 overflow-hidden rounded-full bg-white/10">
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gold to-gold-light rounded-full" />
        </div>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-white/55 text-base md:text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
