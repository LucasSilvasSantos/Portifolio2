import { describe, it, expect } from 'vitest';
import { projects } from '@/data/projects';
import { technologies } from '@/data/technologies';
import { highlights } from '@/data/about';

describe('Data Validation', () => {
  describe('Projects', () => {
    it('should have valid project structure', () => {
      projects.forEach(project => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('shortDescription');
        expect(project).toHaveProperty('fullDescription');
        expect(project).toHaveProperty('technologies');
        expect(project).toHaveProperty('status');
        expect(Array.isArray(project.technologies)).toBe(true);
        expect(project.technologies.length).toBeGreaterThan(0);
      });
    });

    it('should have unique project IDs', () => {
      const ids = projects.map(p => p.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });
  });

  describe('Technologies', () => {
    it('should have valid technology structure', () => {
      technologies.forEach(tech => {
        expect(tech).toHaveProperty('name');
        expect(tech).toHaveProperty('description');
        expect(tech).toHaveProperty('level');
        expect(tech).toHaveProperty('category');
        expect(tech.level).toBeGreaterThanOrEqual(0);
        expect(tech.level).toBeLessThanOrEqual(100);
      });
    });

    it('should have at least 5 technologies', () => {
      expect(technologies.length).toBeGreaterThanOrEqual(5);
    });
  });

  describe('Highlights', () => {
    it('should have valid highlights structure', () => {
      highlights.forEach(highlight => {
        expect(highlight).toHaveProperty('title');
        expect(highlight).toHaveProperty('description');
        expect(highlight).toHaveProperty('icon');
      });
    });

    it('should have exactly 4 highlights', () => {
      expect(highlights.length).toBe(4);
    });
  });
});
