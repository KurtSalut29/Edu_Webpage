import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { members } from '@/data/members';
import BusinessHero from '@/components/BusinessHero';
import MissionVision from '@/components/MissionVision';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from './AnimatedSection';

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = members.find((m) => m.slug === slug);
  if (!member) return { title: 'Not Found' };
  return {
    title: `${member.business.name} — Venture Collective`,
    description: member.business.description.split('\n')[0],
  };
}

export default async function MemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = members.find((m) => m.slug === slug);
  if (!member) notFound();

  const currentIndex = members.findIndex((m) => m.slug === slug);
  const prevMember = currentIndex > 0 ? members[currentIndex - 1] : null;
  const nextMember = currentIndex < members.length - 1 ? members[currentIndex + 1] : null;

  return (
    /* data-theme drives CSS variable overrides for accent color */
    <main className="flex-1" data-theme={slug}>

      {/* ── Hero ── */}
      <BusinessHero business={member.business} memberName={member.name} slug={slug} />

      {/* ── About ── */}
      <AnimatedSection className="relative py-20 px-4 overflow-hidden" data-theme={slug}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#060D24]/80 to-[#0B1437]/75" />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 0% 60%, var(--accent-muted, rgba(201,168,76,0.05)), transparent)' }} />

        <div className="relative max-w-5xl mx-auto">
          <SectionHeading title="About the Business" eyebrow="Our Story" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text side */}
            <div className="flex flex-col gap-5">
              {member.business.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-white/62 leading-relaxed">{para}</p>
              ))}

              {/* Founder card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/4 border border-white/8 mt-2 w-fit">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 flex-shrink-0 bg-navy-dark"
                  style={{ borderColor: 'var(--accent-muted, rgba(201,168,76,0.4))' }}>
                  <Image src={member.photo} alt={member.name} fill sizes="44px" className="object-contain" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{member.name}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: 'var(--accent, #C9A84C)' }}>{member.role}</p>
                </div>
              </div>
            </div>

            {/* Poster side */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden border shadow-2xl shadow-black/50 max-w-xs w-full"
                style={{ borderColor: 'var(--accent-muted, rgba(201,168,76,0.2))' }}>
                <Image
                  src={member.business.poster}
                  alt={`${member.business.name} poster`}
                  width={400} height={400}
                  sizes="400px"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Mission & Vision ── */}
      <AnimatedSection className="relative py-20 px-4 overflow-hidden" delay={0.1} data-theme={slug}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1437]/75 to-[#0B1437]/75" />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 100% 50%, var(--accent-muted, rgba(201,168,76,0.05)), transparent)' }} />

        <div className="relative max-w-5xl mx-auto">
          <SectionHeading title="Mission & Vision" eyebrow="Our Purpose" />
          <MissionVision mission={member.business.mission} vision={member.business.vision} slug={slug} />
        </div>
      </AnimatedSection>

      {/* ── Video ── */}
      <AnimatedSection className="relative py-20 px-4 overflow-hidden" delay={0.1} data-theme={slug}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1437]/75 to-[#060D24]/80" />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, var(--accent-muted, rgba(201,168,76,0.05)), transparent)' }} />

        <div className="relative max-w-3xl mx-auto">
          <SectionHeading title="Our Video" eyebrow="Watch" centered />
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 ring-1"
            style={{ '--tw-ring-color': 'var(--accent-muted, rgba(201,168,76,0.2))' } as React.CSSProperties}>
            <YouTubeEmbed youtubeUrl={member.business.youtubeUrl} />
          </div>
        </div>
      </AnimatedSection>

      {/* ── Member navigation ── */}
      <section className="relative py-14 px-4 border-t border-white/8 bg-[#060D24]/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          {/* Prev */}
          <div className="flex-1">
            {prevMember ? (
              <Link href={`/members/${prevMember.slug}`}
                className="group inline-flex items-center gap-3 text-white/45 hover:text-white transition-colors">
                <div className="w-9 h-9 rounded-full border border-white/12 group-hover:border-gold/45 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <div className="hidden sm:block">
                  <p className="text-[10px] text-white/28 uppercase tracking-widest mb-0.5">Previous</p>
                  <p className="text-sm font-medium group-hover:text-gold transition-colors">{prevMember.name}</p>
                </div>
              </Link>
            ) : <div />}
          </div>

          {/* Home */}
          <Link href="/"
            className="flex flex-col items-center gap-1 text-white/35 hover:text-gold transition-colors">
            <div className="w-9 h-9 rounded-full border border-white/12 hover:border-gold/45 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-[9px] uppercase tracking-widest">Home</span>
          </Link>

          {/* Next */}
          <div className="flex-1 flex justify-end">
            {nextMember ? (
              <Link href={`/members/${nextMember.slug}`}
                className="group inline-flex items-center gap-3 text-white/45 hover:text-white transition-colors">
                <div className="hidden sm:block text-right">
                  <p className="text-[10px] text-white/28 uppercase tracking-widest mb-0.5">Next</p>
                  <p className="text-sm font-medium group-hover:text-gold transition-colors">{nextMember.name}</p>
                </div>
                <div className="w-9 h-9 rounded-full border border-white/12 group-hover:border-gold/45 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </main>
  );
}
