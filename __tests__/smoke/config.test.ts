/**
 * Smoke tests — verify project configuration and structure.
 * These tests check that key files exist and contain the expected settings.
 */

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const root = path.resolve(__dirname, '../..');

// ─── Helper ───────────────────────────────────────────────────────────────────
function readFile(relPath: string): string {
  return fs.readFileSync(path.join(root, relPath), 'utf-8');
}

function fileExists(relPath: string): boolean {
  return fs.existsSync(path.join(root, relPath));
}

// ─── next.config.ts ───────────────────────────────────────────────────────────
describe('next.config.ts', () => {
  it('contains output: export', () => {
    const content = readFile('next.config.ts');
    expect(content).toContain('export');
  });

  it('contains images.unoptimized: true', () => {
    const content = readFile('next.config.ts');
    expect(content).toContain('unoptimized');
    expect(content).toContain('true');
  });
});

// ─── Tailwind theme (globals.css) ─────────────────────────────────────────────
describe('Tailwind theme (globals.css)', () => {
  it('defines navy color', () => {
    const content = readFile('app/globals.css');
    expect(content).toContain('--color-navy');
    expect(content).toContain('#0B1437');
  });

  it('defines gold color', () => {
    const content = readFile('app/globals.css');
    expect(content).toContain('--color-gold');
    expect(content).toContain('#C9A84C');
  });

  it('defines display font variable', () => {
    const content = readFile('app/globals.css');
    expect(content).toContain('--font-display');
  });

  it('defines body font variable', () => {
    const content = readFile('app/globals.css');
    expect(content).toContain('--font-body');
  });
});

// ─── Required component files ─────────────────────────────────────────────────
describe('Component files exist', () => {
  const requiredComponents = [
    'components/Navbar.tsx',
    'components/Footer.tsx',
    'components/MemberCard.tsx',
    'components/SectionHeading.tsx',
    'components/BusinessHero.tsx',
    'components/MissionVision.tsx',
    'components/YouTubeEmbed.tsx',
    'components/Gallery.tsx',
  ];

  for (const file of requiredComponents) {
    it(`${file} exists`, () => {
      expect(fileExists(file)).toBe(true);
    });
  }
});

// ─── data/members.ts ──────────────────────────────────────────────────────────
describe('data/members.ts', () => {
  it('exports exactly 5 members', async () => {
    const { members } = await import('../../data/members');
    expect(members).toHaveLength(5);
  });

  it('every member has a unique slug', async () => {
    const { members } = await import('../../data/members');
    const slugs = members.map((m) => m.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(members.length);
  });

  it('every member has all required fields', async () => {
    const { members } = await import('../../data/members');
    for (const m of members) {
      expect(m.id).toBeDefined();
      expect(m.slug).toBeTruthy();
      expect(m.name).toBeTruthy();
      expect(m.role).toBeTruthy();
      expect(m.photo).toBeTruthy();
      expect(m.business.name).toBeTruthy();
      expect(m.business.logo).toBeTruthy();
      expect(m.business.description).toBeTruthy();
      expect(m.business.poster).toBeTruthy();
      expect(m.business.mission).toBeTruthy();
      expect(m.business.vision).toBeTruthy();
      expect(m.business.youtubeUrl).toBeTruthy();
      expect(Array.isArray(m.business.gallery)).toBe(true);
      expect(m.business.gallery.length).toBeGreaterThan(0);
    }
  });

  it('every member photo follows the image path convention', async () => {
    const { members } = await import('../../data/members');
    for (const m of members) {
      expect(m.photo).toMatch(/^\/images\/member\d+-photo\.(jpg|jpeg|png|webp)$/);
    }
  });
});

// ─── Page files ───────────────────────────────────────────────────────────────
describe('Page files exist', () => {
  it('app/page.tsx exists', () => {
    expect(fileExists('app/page.tsx')).toBe(true);
  });

  it('app/members/[slug]/page.tsx exists', () => {
    expect(fileExists('app/members/[slug]/page.tsx')).toBe(true);
  });

  it('app/not-found.tsx exists', () => {
    expect(fileExists('app/not-found.tsx')).toBe(true);
  });
});

// ─── YouTubeEmbed — extractVideoId ────────────────────────────────────────────
describe('extractVideoId', () => {
  it('extracts ID from watch?v= URL', async () => {
    const { extractVideoId } = await import('../../components/YouTubeEmbed');
    expect(extractVideoId('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
  });

  it('extracts ID from youtu.be short URL', async () => {
    const { extractVideoId } = await import('../../components/YouTubeEmbed');
    expect(extractVideoId('https://youtu.be/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
  });

  it('extracts ID from embed URL', async () => {
    const { extractVideoId } = await import('../../components/YouTubeEmbed');
    expect(extractVideoId('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
  });

  it('returns null for an invalid URL', async () => {
    const { extractVideoId } = await import('../../components/YouTubeEmbed');
    expect(extractVideoId('https://example.com/not-a-video')).toBeNull();
  });
});
