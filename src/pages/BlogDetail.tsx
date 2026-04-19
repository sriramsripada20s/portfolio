import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { BLOG_POSTS } from '../blog';
import type { BlogSection } from '../types';

function CodeBlock({ content }: { content: { language: string; code: string; title?: string } }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-sm overflow-hidden border border-[#242438]">
      {/* Terminal header */}
      <div className="flex items-center justify-between bg-[#0b0b16] border-b border-[#242438] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5c35]/60" />
            <div className="w-3 h-3 rounded-full bg-[#f5c842]/60" />
            <div className="w-3 h-3 rounded-full bg-[#00f0d4]/60" />
          </div>
          {content.title && (
            <span className="font-mono-custom text-[11px] text-muted tracking-wide">{content.title}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono-custom text-[10px] text-muted uppercase tracking-widest">{content.language}</span>
          <button onClick={handleCopy} className="text-muted hover:text-white transition-colors">
            {copied ? <Check size={13} className="text-cyan" /> : <Copy size={13} />}
          </button>
        </div>
      </div>
      {/* Code */}
      <pre className="bg-[#060610] p-6 overflow-x-auto">
        <code className="font-mono-custom text-[13px] leading-relaxed text-[#e6e6f0]">
          {content.code}
        </code>
      </pre>
    </div>
  );
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case 'header':
      return (
        <h2 key={index} className="font-display text-[28px] tracking-wider text-white mt-12 mb-4 leading-tight">
          {section.content}
        </h2>
      );
    case 'subheader':
      return (
        <h3 key={index} className="font-body font-semibold text-[17px] text-white mt-8 mb-3">
          {section.content}
        </h3>
      );
    case 'paragraph':
      return (
        <p key={index} className="text-[15px] text-[#8888a8] leading-[1.9] my-4">
          {section.content}
        </p>
      );
    case 'code':
      return <CodeBlock key={index} content={section.content} />;
    case 'list':
      return (
        <ul key={index} className="my-4 flex flex-col gap-2">
          {section.content.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] text-[#8888a8] leading-relaxed">
              <span className="text-cyan font-mono-custom text-[12px] mt-1 flex-shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
      );
    case 'callout':
      return (
        <div key={index} className="my-8 bg-[#0b0b16] border border-cyan/20 rounded-sm p-6">
          <div className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">{section.content.icon}</span>
            <div>
              <p className="font-body font-semibold text-[14px] text-white mb-2">{section.content.title}</p>
              <p className="text-[14px] text-[#8888a8] leading-relaxed">{section.content.text}</p>
            </div>
          </div>
        </div>
      );
    case 'metrics':
      return (
        <div key={index} className="my-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {section.content.map((m, i) => (
            <div key={i} className="bg-card border border-[#181828] rounded-sm p-4 text-center">
              <div className="font-display text-[28px] tracking-wider text-cyan mb-1">{m.value}</div>
              <div className="font-mono-custom text-[10px] text-muted uppercase tracking-[1px]">{m.label}</div>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-mono-custom text-muted text-[12px] tracking-widest mb-4">POST NOT FOUND</p>
          <Link to="/blog" className="font-mono-custom text-cyan text-[11px] tracking-widest uppercase hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="px-6 md:px-12 max-w-3xl mx-auto">

        {/* Back */}
        <Link to="/blog" className="inline-flex items-center gap-2 font-mono-custom text-[11px] tracking-[2px] uppercase text-muted hover:text-white transition-colors mb-12">
          <ArrowLeft size={12} /> All Posts
        </Link>

        {/* Post header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="font-mono-custom text-[9px] tracking-[2px] uppercase text-cyan border border-cyan/30 px-2 py-0.5 rounded-sm">
              {post.category}
            </span>
            <span className="font-mono-custom text-[10px] text-muted flex items-center gap-1.5">
              <Clock size={10} /> {post.readTime}
            </span>
            <span className="font-mono-custom text-[10px] text-muted">{post.date}</span>
          </div>

          <h1 className="font-body font-semibold text-[clamp(24px,4vw,38px)] text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-[15px] text-[#8888a8] leading-relaxed border-l-2 border-cyan/40 pl-4">
            {post.excerpt}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#242438] to-transparent mb-12" />

        {/* Post content */}
        <article>
          {post.content.map((section, i) => renderSection(section, i))}
        </article>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#181828]">
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map(t => (
              <span key={t} className="tag-chip flex items-center gap-1">
                <Tag size={8} /> {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono-custom text-[10px] text-muted tracking-[2px] uppercase mb-1">Written by</p>
              <p className="font-body font-semibold text-white text-[14px]">Sriram Sripada</p>
              <p className="font-mono-custom text-[11px] text-cyan">Data & AI Engineer</p>
            </div>
            <Link
              to="/blog"
              className="flex items-center gap-2 font-mono-custom text-[11px] tracking-[1.5px] uppercase text-muted hover:text-white transition-colors"
            >
              <ArrowLeft size={12} /> More Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
