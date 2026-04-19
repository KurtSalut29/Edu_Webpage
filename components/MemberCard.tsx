'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Member } from '@/data/members';
import { fadeInUp } from '@/lib/animations';

interface MemberCardProps {
  member: Member;
  index: number;
}

// Industry color accents per index
const accentColors = [
  'from-gold/20 to-gold/5',
  'from-blue-500/20 to-blue-500/5',
  'from-emerald-500/20 to-emerald-500/5',
  'from-orange-500/20 to-orange-500/5',
  'from-pink-500/20 to-pink-500/5',
];

export default function MemberCard({ member, index }: MemberCardProps) {
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.3)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-navy-light rounded-2xl overflow-hidden border border-white/8 flex flex-col"
    >
      {/* Photo area */}
      <div className="relative h-60 w-full overflow-hidden bg-navy-dark">
        <Image
          src={member.photo}
          alt={`${member.name} photo`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay on photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-navy-light/20 to-transparent" />

        {/* Index badge */}
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-navy-dark/80 backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <span className="text-gold text-xs font-bold font-display">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Industry tag on photo */}
        <div className="absolute top-4 right-4">
          <span className="text-[10px] text-white/70 bg-navy-dark/70 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 uppercase tracking-wider">
            {member.role.split('&')[0].trim()}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        {/* Name */}
        <h3 className="font-display text-xl font-semibold text-white leading-tight group-hover:text-gold transition-colors duration-300">
          {member.name}
        </h3>

        {/* Business name with gradient pill */}
        <div className={`inline-flex items-center gap-1.5 self-start bg-gradient-to-r ${accent} rounded-full px-3 py-1 border border-white/10`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold/70" />
          <span className="text-gold text-xs font-medium">{member.business.name}</span>
        </div>

        {/* Role */}
        <p className="text-white/50 text-sm leading-relaxed flex-1">{member.role}</p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-gold/20 via-white/5 to-transparent" />

        {/* CTA */}
        <Link
          href={`/members/${member.slug}`}
          className="group/btn mt-1 inline-flex items-center justify-between text-sm font-medium text-white/70 hover:text-gold transition-colors duration-200"
        >
          <span>View Business</span>
          <motion.span
            className="w-7 h-7 rounded-full border border-white/15 group-hover/btn:border-gold/50 flex items-center justify-center transition-colors"
            whileHover={{ x: 3 }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
}
