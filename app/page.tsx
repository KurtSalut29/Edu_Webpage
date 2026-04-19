'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { members } from '@/data/members';
import SectionHeading from '@/components/SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/animations';

// ─── Stat ─────────────────────────────────────────────────────────────────────
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 px-6 py-5 rounded-2xl bg-white/4 border border-white/8">
      <span className="font-display text-4xl font-bold text-gold">{value}</span>
      <span className="text-white/50 text-xs uppercase tracking-[0.18em]">{label}</span>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const handleScroll = () =>
    document.getElementById('members')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Semi-transparent overlay — lets particles show through */}
      <div className="absolute inset-0 bg-[#060D24]/70" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#060D24]/80 via-[#0B1437]/60 to-[#162050]/40" />
      {/* Gold spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_45%,rgba(201,168,76,0.11),transparent)]" />
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/4 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      {/* Fine dot grid */}
      <div className="absolute inset-0 opacity-[0.018]"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible"
          className="flex flex-col items-center gap-8">

          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2.5 text-gold/90 text-[11px] font-semibold uppercase tracking-[0.28em] border border-gold/25 rounded-full px-5 py-2 bg-gold/6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Academic Group Portfolio · 2025
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={fadeInUp}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-white leading-[1.04] tracking-tight">
            Venture<br />
            <span className="text-shimmer">Collective</span>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={fadeInUp}
            className="text-white/55 text-lg md:text-xl max-w-lg leading-relaxed">
            Five entrepreneurs. Five visions. One shared commitment to building
            businesses that matter.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mt-1">
            <button onClick={handleScroll}
              className="bg-gold text-navy font-semibold px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-gold-light transition-colors shadow-lg shadow-gold/20">
              Meet Our Members
            </button>
            <button onClick={handleScroll}
              className="border border-white/18 text-white/65 hover:text-white hover:border-white/35 font-medium px-8 py-3.5 rounded-full text-sm tracking-wide transition-colors">
              Learn More
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl mt-4">
            <Stat value="5" label="Members" />
            <Stat value="5" label="Businesses" />
            <Stat value="5" label="Industries" />
            <Stat value="1" label="Collective" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/20">
        <span className="text-[9px] uppercase tracking-[0.35em]">Scroll</span>
        <div className="w-px h-7 bg-gradient-to-b from-gold/35 to-transparent" />
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const industries = [
    { label: 'Environment',    color: 'text-emerald-400 border-emerald-400/25 bg-emerald-400/6' },
    { label: 'Food & BBQ',     color: 'text-orange-400 border-orange-400/25 bg-orange-400/6' },
    { label: 'Livestock',      color: 'text-pink-400 border-pink-400/25 bg-pink-400/6' },
    { label: 'Poultry',        color: 'text-red-400 border-red-400/25 bg-red-400/6' },
    { label: 'Books & Stories',color: 'text-amber-400 border-amber-400/25 bg-amber-400/6' },
  ];

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060D24]/75 via-[#0B1437]/70 to-[#0B1437]/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(201,168,76,0.05),transparent)]" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-gold/70 text-xs font-semibold uppercase tracking-[0.25em] mb-3">Who We Are</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                About the<br />
                <span className="text-shimmer">Group</span>
              </h2>
              <div className="w-14 h-0.5 bg-gradient-to-r from-gold to-gold-light mb-6" />
            </div>
            <p className="text-white/60 leading-relaxed">
              We are a cohort of five driven entrepreneurs, each building a distinct business
              across different industries — united by a shared academic journey and a belief
              that great businesses start with great ideas.
            </p>
            <p className="text-white/50 leading-relaxed text-sm">
              From environmental advocacy to artisan food, our collective represents the
              diversity of ambition and the power of community-driven enterprise.
            </p>
            {/* Industry tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {industries.map(({ label, color }) => (
                <span key={label}
                  className={`text-xs font-medium border rounded-full px-3.5 py-1.5 ${color}`}>
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — member photo mosaic */}
          <div className="grid grid-cols-3 gap-2.5">
            {members.slice(0, 3).map((m, i) => (
              <Link key={m.slug} href={`/members/${m.slug}`}
                className="group relative aspect-square rounded-xl overflow-hidden border border-white/8 hover:border-gold/40 transition-colors">
                <Image src={m.photo} alt={m.name} fill sizes="120px"
                  className="object-contain bg-navy-dark group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
                <p className="absolute bottom-1.5 left-0 right-0 text-center text-[9px] text-white/70 font-medium px-1 truncate">
                  {m.name.split(' ')[0]}
                </p>
              </Link>
            ))}
            {members.slice(3, 5).map((m) => (
              <Link key={m.slug} href={`/members/${m.slug}`}
                className="group relative aspect-square rounded-xl overflow-hidden border border-white/8 hover:border-gold/40 transition-colors">
                <Image src={m.photo} alt={m.name} fill sizes="120px"
                  className="object-contain bg-navy-dark group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
                <p className="absolute bottom-1.5 left-0 right-0 text-center text-[9px] text-white/70 font-medium px-1 truncate">
                  {m.name.split(' ')[0]}
                </p>
              </Link>
            ))}
            {/* Placeholder tile */}
            <div className="relative aspect-square rounded-xl border border-dashed border-gold/20 flex items-center justify-center bg-gold/3">
              <span className="text-gold/40 text-xs text-center px-2">More<br/>Coming</span>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Member Card ──────────────────────────────────────────────────────────────
const accentClasses = [
  { border: 'hover:border-emerald-400/40', badge: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20' },
  { border: 'hover:border-orange-400/40',  badge: 'bg-orange-400/10  text-orange-300  border-orange-400/20'  },
  { border: 'hover:border-pink-400/40',    badge: 'bg-pink-400/10    text-pink-300    border-pink-400/20'    },
  { border: 'hover:border-red-400/40',     badge: 'bg-red-400/10     text-red-300     border-red-400/20'     },
  { border: 'hover:border-amber-400/40',   badge: 'bg-amber-400/10   text-amber-300   border-amber-400/20'   },
];

function MemberCard({ member, index }: { member: typeof members[0]; index: number }) {
  const ac = accentClasses[index % accentClasses.length];
  return (
    <motion.div variants={fadeInUp} custom={index}
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.45)' }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className={`group bg-navy-light/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/8 ${ac.border} transition-colors flex flex-col`}>

      {/* Photo */}
      <div className="relative h-56 bg-navy-dark overflow-hidden">
        <Image src={member.photo} alt={member.name} fill
          sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
          className="object-contain group-hover:scale-[1.03] transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-transparent to-transparent" />
        {/* Number */}
        <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-navy-dark/75 border border-white/12 flex items-center justify-center">
          <span className="text-gold text-[10px] font-bold font-display">{String(index+1).padStart(2,'0')}</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="font-display text-lg font-semibold text-white leading-snug group-hover:text-gold transition-colors">
            {member.name}
          </h3>
          <p className="text-white/45 text-xs">{member.role}</p>
        </div>

        {/* Business badge */}
        <span className={`self-start text-[11px] font-medium border rounded-full px-3 py-1 ${ac.badge}`}>
          {member.business.name}
        </span>

        <div className="flex-1" />
        <div className="h-px bg-white/6" />

        <Link href={`/members/${member.slug}`}
          className="inline-flex items-center justify-between text-sm text-white/55 hover:text-gold transition-colors pt-1">
          <span className="font-medium">View Business</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Members Grid ─────────────────────────────────────────────────────────────
function MembersGridSection() {
  return (
    <section id="members" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1437]/75 to-[#060D24]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,168,76,0.06),transparent)]" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading title="Meet the Members"
          subtitle="Five founders. Five stories. Click any card to explore a member's business."
          centered />

        <motion.div variants={staggerContainer} initial="hidden" animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {members.map((m, i) => <MemberCard key={m.id} member={m} index={i} />)}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <AboutSection />
      <MembersGridSection />
    </main>
  );
}
