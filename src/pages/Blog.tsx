import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../blog';
import { BLOG_CATEGORIES } from '../types';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter(p => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch = search === '' ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto">

      {/* Header */}
      <div className="mb-16">
        <div className="section-label">Writing</div>
        <h1 className="font-display text-[clamp(48px,8vw,100px)] leading-none tracking-widest text-white mb-4">
          BLOG
        </h1>
        <p className="font-mono-custom text-[13px] text-muted max-w-xl leading-relaxed">
          Technical deep-dives on data engineering, ML pipelines, Snowflake architecture, 
          and lessons from building production data systems.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <div className="flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`font-mono-custom text-[10px] tracking-[2px] uppercase px-4 py-2 border rounded-sm transition-all ${
                activeCategory === c
                  ? 'border-cyan text-cyan bg-cyan/10'
                  : 'border-[#242438] text-muted hover:border-[#52526e] hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="ml-auto font-mono-custom text-[12px] bg-[#0b0b16] border border-[#181828] text-white placeholder:text-muted px-4 py-2 rounded-sm outline-none focus:border-cyan/50 w-full sm:w-64 transition-colors"
        />
      </div>

      <p className="font-mono-custom text-[11px] text-muted mb-8 tracking-widest">
        {filtered.length} POST{filtered.length !== 1 ? 'S' : ''}
      </p>

      {/* Blog cards */}
      <div className="flex flex-col gap-6">
        {filtered.map((post, i) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="group bg-card border border-dark rounded-sm p-8 project-card-hover relative overflow-hidden block"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <span className="font-mono-custom text-[9px] tracking-[2px] uppercase text-cyan border border-cyan/30 px-2 py-0.5 rounded-sm">
                    {post.category}
                  </span>
                  <span className="font-mono-custom text-[10px] text-muted flex items-center gap-1.5">
                    <Clock size={10} /> {post.readTime}
                  </span>
                  <span className="font-mono-custom text-[10px] text-muted">{post.date}</span>
                </div>

                <h2 className="font-body font-semibold text-[18px] text-white group-hover:text-cyan transition-colors leading-snug mb-3">
                  {post.title}
                </h2>
                <p className="text-[14px] text-muted leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(t => (
                    <span key={t} className="tag-chip flex items-center gap-1">
                      <Tag size={8} /> {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono-custom text-[11px] tracking-[1.5px] uppercase text-cyan md:flex-shrink-0 group-hover:gap-3 transition-all">
                Read <ArrowRight size={12} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24">
          <p className="font-mono-custom text-muted text-[13px] tracking-widest">No posts match your filters.</p>
        </div>
      )}
    </div>
  );
}
