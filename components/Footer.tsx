import Link from 'next/link';
import { members } from '@/data/members';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060D24]/80 backdrop-blur-sm overflow-hidden">
      {/* Top gold border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(201,168,76,0.05),transparent)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand column — wider */}
          <div className="md:col-span-4 flex flex-col gap-5">
            {/* Logo mark + name */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center">
                <span className="font-display text-gold font-bold">V</span>
              </div>
              <span className="font-display text-gold text-xl font-semibold tracking-wide">
                Venture Collective
              </span>
            </div>

            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Five entrepreneurs. Five visions. One shared commitment to building
              businesses that matter.
            </p>

            {/* Divider */}
            <div className="w-16 h-px bg-gold/30" />

            <p className="text-white/30 text-xs">
              &copy; {currentYear} Venture Collective. All rights reserved.
            </p>
          </div>

          {/* Members column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="text-white/80 font-semibold text-xs uppercase tracking-[0.2em]">
              Our Members
            </h3>
            <nav className="flex flex-col gap-2.5">
              {members.map((m) => (
                <Link
                  key={m.slug}
                  href={`/members/${m.slug}`}
                  className="group flex items-center gap-2 text-white/45 hover:text-gold transition-colors text-sm w-fit"
                >
                  <span className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                  {m.name}
                  <span className="text-white/25 text-xs">— {m.business.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick links column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="text-white/80 font-semibold text-xs uppercase tracking-[0.2em]">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/#members', label: 'Meet the Team' },
                { href: '/#about', label: 'About the Group' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center gap-2 text-white/45 hover:text-gold transition-colors text-sm w-fit"
                >
                  <span className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            Built with Next.js, Tailwind CSS &amp; Framer Motion
          </p>
          <p className="text-white/25 text-xs">
            Group Academic Portfolio · {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
