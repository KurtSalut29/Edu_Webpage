'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { members } from '@/data/members';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Detect if we're on a member page and find the member
  const memberSlug = pathname.startsWith('/members/') ? pathname.split('/members/')[1] : null;
  const currentMember = memberSlug ? members.find((m) => m.slug === memberSlug) : null;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-[#060D24]/70 backdrop-blur-xl border-b border-white/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo / group name */}
          <Link
            href="/"
            aria-current={isHome ? 'page' : undefined}
            className="flex items-center gap-2.5 group"
          >
            {/* Logo mark */}
            <div className="w-7 h-7 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center group-hover:bg-gold/25 transition-colors">
              <span className="font-display text-gold text-xs font-bold">V</span>
            </div>
            <span className="font-display text-white font-semibold text-base tracking-wide group-hover:text-gold transition-colors">
              Venture{' '}
              <span className="text-gold">Collective</span>
            </span>
          </Link>

          {/* Center — breadcrumb on member pages */}
          {currentMember && (
            <div className="hidden md:flex items-center gap-2 text-sm text-white/40">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/70">{currentMember.business.name}</span>
            </div>
          )}

          {/* Right nav links */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/#members"
              className="text-white/60 hover:text-gold transition-colors text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-white/5"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </div>

      {/* Gold gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </motion.nav>
  );
}
