'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Business } from '@/data/members';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface BusinessHeroProps {
  business: Business;
  memberName: string;
  slug: string;
}

export default function BusinessHero({ business, memberName, slug }: BusinessHeroProps) {
  return (
    <section
      data-theme={slug}
      className="relative min-h-[75vh] flex items-center overflow-hidden"
    >
      {/* Base background — semi-transparent so particles show through */}
      <div className="absolute inset-0 bg-[#060D24]/75" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#060D24]/80 via-[#0B1437]/60 to-[#162050]/40" />

      {/* Accent glow — top right, uses CSS var */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent-muted, rgba(201,168,76,0.12)) 0%, transparent 70%)' }} />
      {/* Accent glow — bottom left */}
      <div className="absolute -bottom-16 -left-16 w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent-muted, rgba(201,168,76,0.07)) 0%, transparent 70%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.018]"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      {/* Horizontal accent line */}
      <div className="absolute top-1/2 left-0 right-0 h-px opacity-10"
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent, #C9A84C), transparent)' }} />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: text ── */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible"
            className="flex flex-col gap-5 order-2 lg:order-1">

            {/* Eyebrow */}
            <motion.div variants={fadeInUp}
              className="inline-flex items-center gap-2.5 w-fit">
              <div className="w-8 h-px" style={{ background: 'var(--accent, #C9A84C)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: 'var(--accent, #C9A84C)' }}>
                Business Profile
              </span>
            </motion.div>

            {/* Business name */}
            <motion.h1 variants={fadeInUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight">
              {business.name}
            </motion.h1>

            {/* Founder line */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="w-6 h-px bg-white/25" />
              <p className="text-white/55 text-sm">
                Founded by{' '}
                <span className="font-semibold" style={{ color: 'var(--accent, #C9A84C)' }}>
                  {memberName}
                </span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p variants={fadeInUp}
              className="text-white/55 text-base leading-relaxed max-w-md">
              {business.description.split('\n')[0]}
            </motion.p>

            {/* Meta pills */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 flex-wrap pt-1">
              <span className="text-xs border rounded-full px-3.5 py-1.5 text-white/50 border-white/12">
                Est. 2025
              </span>
              <span className="text-xs border rounded-full px-3.5 py-1.5 font-medium"
                style={{ color: 'var(--accent, #C9A84C)', borderColor: 'var(--accent-muted, rgba(201,168,76,0.3))' }}>
                ● Active
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: logo ── */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible"
            className="flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-3xl scale-[1.12] border opacity-20"
                style={{ borderColor: 'var(--accent, #C9A84C)' }} />
              <div className="absolute inset-0 rounded-3xl scale-[1.25] border opacity-8"
                style={{ borderColor: 'var(--accent, #C9A84C)' }} />
              {/* Glow blur */}
              <div className="absolute inset-0 rounded-3xl blur-2xl scale-110 opacity-30"
                style={{ background: 'var(--accent-muted, rgba(201,168,76,0.15))' }} />

              {/* Logo box */}
              <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-3xl overflow-hidden border-2 bg-navy-light flex items-center justify-center"
                style={{ borderColor: 'var(--accent-muted, rgba(201,168,76,0.35))' }}>
                <Image src={business.logo} alt={`${business.name} logo`}
                  fill sizes="240px" className="object-contain p-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
