import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-24 bg-navy">
      <div className="text-center flex flex-col items-center gap-6 max-w-md">
        {/* 404 number */}
        <span className="font-display text-8xl font-bold text-gold/30 select-none">
          404
        </span>

        <h1 className="font-display text-3xl font-bold text-white">
          Page Not Found
        </h1>

        <p className="text-white/60 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Gold divider */}
        <span className="block w-16 h-0.5 bg-gold mx-auto" />

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded-full hover:bg-gold-light transition-colors min-h-[44px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Group
        </Link>
      </div>
    </main>
  );
}
