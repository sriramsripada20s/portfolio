export interface ProjectSection {
  title: string;
  content?: string;
  bullets?: string[];
}

export interface ProjectTab {
  label: string;
  icon?: string;
  sections: ProjectSection[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  domain: string[];
  description: string;
  longDescription: string;
  sections?: ProjectSection[];
  tabs?: ProjectTab[];
  tech: string[];
  metrics: { label: string; value: string; color: 'cyan' | 'orange' | 'violet' | 'yellow' }[];
  githubUrl?: string;
  featured: boolean;
  year: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  content: BlogSection[];
}

export type BlogSection =
  | { type: 'header'; content: string }
  | { type: 'subheader'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'code'; content: { language: string; code: string; title?: string } }
  | { type: 'callout'; content: { icon: string; title: string; text: string } }
  | { type: 'metrics'; content: { label: string; value: string }[] }
  | { type: 'list'; content: string[] };

export const DOMAINS = ['All', 'Data Engineering', 'ML / AI', 'Analytics', 'BI'] as const;
export const BLOG_CATEGORIES = ['All', 'Data Engineering', 'Machine Learning', 'Analytics', 'Career'] as const;
