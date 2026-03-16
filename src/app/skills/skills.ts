import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../constants';
import { SkillLevel } from '../types';

interface MatrixGlyph {
  id: string;
  value: number;
  left: number;
  top: number;
  delay: number;
}

interface SkillPill {
  id: string;
  name: string;
  level: SkillLevel;
  left: number;
  start: number;
  delay: number;
  duration: number;
}

interface SkillCategoryMatrix {
  id: string;
  title: string;
  pills: SkillPill[];
  glyphs: MatrixGlyph[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly matrix: SkillCategoryMatrix[] = SKILLS.map((category, categoryIndex) => {
    const baseSeed = this.hash(`${category.title}-${categoryIndex}`);

    const pills = category.skills.map((skill, skillIndex) => {
      const skillSeed = this.hash(`${skill.name}-${baseSeed}-${skillIndex}`);
      return {
        id: `${category.title}-${skill.name}`,
        name: skill.name,
        level: skill.level,
        left: this.rand(skillSeed, 8, 76),
        start: this.rand(skillSeed + 11, -45, -6),
        delay: this.rand(skillSeed + 19, -18, 0),
        // Fall speed is controlled by duration (in seconds), not by a separate speed value.
        // This number is passed to CSS as --fall-duration and used by animation-duration.
        // The keyframes move each pill from top: var(--fall-start) to top: 112%.
        // Because speed is distance / time, and distance is roughly fixed per pill,
        // a smaller duration means a faster fall, while a larger duration means a slower fall.
        // Here we randomize duration between 14s and 22s with a deterministic seed:
        // - around 14s => noticeably faster pill
        // - around 22s => slower, more ambient motion
        // The seed keeps the same skill at the same speed across re-renders (no visual jitter).
        duration: this.rand(skillSeed + 29, 14, 22),
      };
    });

    const glyphs = Array.from({ length: 30 }, (_, glyphIndex) => {
      const glyphSeed = this.hash(`${category.title}-glyph-${glyphIndex}`);
      return {
        id: `${category.title}-glyph-${glyphIndex}`,
        value: Math.floor(this.rand(glyphSeed, 0, 9.99)),
        left: this.rand(glyphSeed + 5, 2, 95),
        top: this.rand(glyphSeed + 9, 4, 93),
        delay: this.rand(glyphSeed + 15, -6, 0),
      };
    });

    return {
      id: `${category.title}-${categoryIndex}`,
      title: category.title,
      pills,
      glyphs,
    };
  });

  trackCategory = (_: number, item: SkillCategoryMatrix): string => item.id;
  trackPill = (_: number, item: SkillPill): string => item.id;
  trackGlyph = (_: number, item: MatrixGlyph): string => item.id;

  private hash(input: string): number {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      hash = (hash << 5) - hash + input.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  private rand(seed: number, min: number, max: number): number {
    const value = Math.abs(Math.sin(seed) * 10000) % 1;
    return min + value * (max - min);
  }
}
