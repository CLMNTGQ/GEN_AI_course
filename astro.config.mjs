import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

export default defineConfig({
  site: 'https://clmntgq.github.io',
  base: '/GEN_AI_course',
  integrations: [
    mermaid({
      theme: 'forest',
      autoTheme: true,
      enableLog: false,
    }),
    starlight({
      title: 'Generative AI Course',
      description: 'A structured, hands-on course covering the foundations, architectures, training, alignment, evaluation and applications of generative AI.',
      logo: {
        src: './src/assets/hero.svg',
        alt: 'Generative AI Course',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/CLMNTGQ/GEN_AI_course' },
      ],
      sidebar: [
        {
          label: 'Course',
          items: [
            { label: 'Overview', slug: '' },
            { label: 'Generative AI — Full Course', slug: 'course/generative-ai' },
          ],
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/CLMNTGQ/GEN_AI_course/edit/main/',
      },
      lastUpdated: true,
    }),
  ],
});
