'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  // Render nothing when the gallery is empty
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <motion.div
          key={src}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative aspect-square overflow-hidden rounded-xl border border-white/10 cursor-pointer"
        >
          <Image
            src={src}
            alt={`Gallery image ${i + 1}`}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
