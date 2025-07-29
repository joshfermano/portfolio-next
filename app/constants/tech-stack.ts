export interface TechStackCategory {
  [key: string]: string[];
}

const techStack: TechStackCategory = {
  frontend: [
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'Next.js',
    'Tailwind CSS',
    'Figma',
    'Magic UI',
    'Shadcn UI',
    'SCSS',
    'ESLint',
    'Prettier',
    'Framer Motion',
  ],

  backend: [
    'Node',
    'Express',
    'PHP',
    'Python',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Supabase',
    'Firebase',
    'Prisma',
    'Drizzle',
    'JWT',
    'Npm',
    'Yarn',
    'Bun',
    'OAuth',
    'RESTful API',
    'GraphQL',
    'WebSocket',
  ],

  aiml: [
    'Python',
    'TensorFlow',
    'PyTorch',
    'YOLO',
    'OpenAI API',
    'Google Gemini API',
    'Anthropic',
    'OpenCV',
    'Roboflow',
    'Hugging Face',
    'LangChain',
  ],

  devops: [
    'Git',
    'GitHub Actions',
    'AWS',
    'GCP',
    'Docker',
    'Terraform',
    'Jenkins',
    'Nginx',
    'Kubernetes',
    'WSL',
    'Vercel',
  ],

  cms: ['WordPress', 'Shopify', 'Webflow', 'Strapi', 'Contentful', 'Sanity'],

  developerTools: [
    'Git',
    'Github',
    'Gitlab',
    'VSCode',
    'Cursor',
    'Claude Code',
    'Google Gemini CLI',
    'Postman',
    'Notion',
    'Jira',
    'Slack',
    'Discord',
  ],
};

export default techStack;

export const getAllTechnologies = (): string[] => {
  return Object.values(techStack).flat();
};

export const getTechnologiesByCategory = (category: keyof TechStackCategory): string[] => {
  return techStack[category] || [];
};

export const techStackCategories = Object.keys(techStack) as (keyof TechStackCategory)[];
