'use client';

interface MissionVisionProps {
  mission: string;
  vision: string;
  slug?: string;
}

function MissionIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0v4m0 12v4M2 12h4m12 0h4" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}

function Card({ icon, label, text }: { icon: React.ReactNode; label: string; text: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-navy-light/70 backdrop-blur-sm border border-white/8 hover:border-white/16 transition-colors">
      {/* Top accent bar */}
      <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, var(--accent, #C9A84C), transparent)' }} />

      <div className="p-7 flex flex-col gap-4">
        {/* Icon + label */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'var(--accent-muted, rgba(201,168,76,0.1))', color: 'var(--accent, #C9A84C)' }}>
            {icon}
          </div>
          <div>
            <p className="text-white/35 text-[10px] uppercase tracking-[0.2em]">Our</p>
            <h3 className="font-display text-lg font-semibold text-white leading-none">{label}</h3>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px opacity-30"
          style={{ background: 'linear-gradient(90deg, var(--accent, #C9A84C) 0%, transparent 60%)' }} />

        {/* Text */}
        <p className="text-white/62 leading-relaxed text-sm">{text}</p>
      </div>
    </div>
  );
}

export default function MissionVision({ mission, vision, slug }: MissionVisionProps) {
  return (
    <div data-theme={slug} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Card icon={<MissionIcon />} label="Mission" text={mission} />
      <Card icon={<VisionIcon />} label="Vision"  text={vision}  />
    </div>
  );
}
