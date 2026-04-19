'use client';

import { useState, useEffect } from 'react';

interface YouTubeEmbedProps {
  youtubeUrl: string;
}

/**
 * Extracts the YouTube video ID from various URL formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - https://youtube.com/shorts/VIDEO_ID
 */
export function extractVideoId(url: string): string | null {
  const patterns = [
    /[?&]v=([^&#]+)/,        // watch?v=
    /youtu\.be\/([^?&#]+)/,  // youtu.be/
    /embed\/([^?&#]+)/,      // already an embed URL
    /shorts\/([^?&#]+)/,     // youtube.com/shorts/
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export default function YouTubeEmbed({ youtubeUrl }: YouTubeEmbedProps) {
  // Only render the iframe on the client to avoid SSR/hydration mismatches
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const videoId = extractVideoId(youtubeUrl);

  // Placeholder shown during SSR and before hydration
  if (!mounted) {
    return (
      <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-navy-dark flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-gold/30 border-t-gold animate-spin" />
      </div>
    );
  }

  if (!videoId) {
    return (
      <div className="aspect-video flex items-center justify-center bg-navy-light rounded-2xl border border-white/10 text-gold/60 text-sm">
        Video unavailable
      </div>
    );
  }

  return (
    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-black/40">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Business video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
