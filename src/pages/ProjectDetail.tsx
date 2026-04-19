import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data';

const metricColor: Record<string, { text: string; border: string; bg: string }> = {
  cyan:   { text: 'text-sky-400',    border: 'border-sky-800/40',   bg: 'bg-sky-950/50'   },
  orange: { text: 'text-orange-400', border: 'border-orange-800/40', bg: 'bg-orange-950/50' },
  violet: { text: 'text-violet-400', border: 'border-violet-800/40', bg: 'bg-violet-950/50' },
  yellow: { text: 'text-yellow-400', border: 'border-yellow-800/40', bg: 'bg-yellow-950/50' },
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find(p => p.slug === slug);
  const others = PROJECTS.filter(p => p.slug !== slug).slice(0, 3);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6b7a96] text-sm mb-4">Project not found.</p>
          <Link to="/" className="text-sky-400 text-sm hover:underline">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  const paragraphs = project.longDescription.split('\n\n').filter(Boolean);

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 md:px-12 max-w-6xl mx-auto">

      {/* Back */}
      <Link to="/" className="inline-flex items-center gap-2 text-[12px] font-medium text-[#6b7a96] hover:text-white transition-colors mb-10 tracking-wide">
        <ArrowLeft size={14} /> All Projects
      </Link>

      {/* Domain tags + meta */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.domain.map(d => (
          <span key={d} className="text-[11px] font-semibold px-3 py-1 rounded-md bg-sky-950/60 text-sky-400 border border-sky-800/30 tracking-wide uppercase">{d}</span>
        ))}
        {project.featured && (
          <span className="text-[11px] font-semibold px-3 py-1 rounded-md bg-cyan-950/50 text-cyan-400 border border-cyan-800/30 tracking-wide uppercase">Featured</span>
        )}
        <span className="text-[12px] text-[#6b7a96] self-center ml-2">{project.year}</span>
      </div>

      {/* Title */}
      <h1 className="text-[clamp(28px,4vw,46px)] font-bold text-white leading-tight mb-3">
        {project.title.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')}
      </h1>
      <p className="text-[16px] text-sky-400 font-medium mb-10">{project.subtitle}</p>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {project.metrics.map((m, i) => {
          const c = metricColor[m.color] ?? metricColor.cyan;
          return (
            <div key={i} className={`${c.bg} border ${c.border} rounded-2xl p-5`}>
              <div className={`text-[30px] font-bold leading-none mb-1 ${c.text}`}>{m.value}</div>
              <div className="text-[11px] text-[#6b7a96] font-medium uppercase tracking-wider">{m.label}</div>
            </div>
          );
        })}
      </div>

      {/* Main content grid */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* Left: long description */}
        <div className="md:col-span-2">
          <h2 className="text-[20px] font-bold text-white mb-5">Overview</h2>
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] text-[#8892a4] leading-[1.85]">{p}</p>
            ))}
          </div>

          {/* Key highlights */}
          <div className="mt-10">
            <h2 className="text-[20px] font-bold text-white mb-5">Key Results</h2>
            <div className="grid grid-cols-1 gap-3">
              {project.metrics.map((m, i) => {
                const c = metricColor[m.color] ?? metricColor.cyan;
                return (
                  <div key={i} className="flex items-center gap-4 bg-[#161b27] border border-[#232d3f] rounded-xl px-5 py-4">
                    <div className={`text-[22px] font-bold min-w-[80px] ${c.text}`}>{m.value}</div>
                    <div className="text-[14px] text-[#8892a4]">{m.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="flex flex-col gap-8">

          {/* Tech stack */}
          <div className="bg-[#161b27] border border-[#232d3f] rounded-2xl p-6">
            <h3 className="text-[12px] font-semibold text-sky-400 tracking-widest uppercase mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-[12px] px-3 py-1.5 rounded-lg border border-[#232d3f] text-[#8892a4] bg-[#0f1117]">{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="bg-[#161b27] border border-[#232d3f] rounded-2xl p-6">
            <h3 className="text-[12px] font-semibold text-sky-400 tracking-widest uppercase mb-4">Links</h3>
            <div className="flex flex-col gap-3">
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2.5 text-[13px] text-white hover:text-sky-400 transition-colors font-medium">
                  <Github size={15} /> View on GitHub <ExternalLink size={11} className="text-[#6b7a96] ml-auto" />
                </a>
              ) : (
                <p className="text-[13px] text-[#6b7a96]">Internal production project — no public repo.</p>
              )}
            </div>
          </div>

          {/* Domain */}
          <div className="bg-[#161b27] border border-[#232d3f] rounded-2xl p-6">
            <h3 className="text-[12px] font-semibold text-sky-400 tracking-widest uppercase mb-4">Domain</h3>
            <div className="flex flex-wrap gap-2">
              {project.domain.map(d => (
                <span key={d} className="text-[12px] px-3 py-1.5 rounded-lg bg-sky-950/60 text-sky-400 border border-sky-800/30">{d}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* More projects */}
      {others.length > 0 && (
        <div className="mt-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[20px] font-bold text-white">More Projects</h2>
            <Link to="/" className="text-[13px] text-sky-400 hover:underline">View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {others.map(p => (
              <Link key={p.id} to={`/projects/${p.slug}`}
                className="group bg-[#161b27] border border-[#232d3f] rounded-2xl overflow-hidden hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-200 block">
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {p.domain.slice(0,1).map(d => (
                      <span key={d} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-950/60 text-sky-400 border border-sky-800/30 uppercase tracking-wide">{d}</span>
                    ))}
                  </div>
                  <h3 className="text-[14px] font-bold text-white mb-1.5 group-hover:text-sky-400 transition-colors leading-snug">
                    {p.title.split(' ').slice(0,5).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')}
                  </h3>
                  <p className="text-[12px] text-[#6b7a96] leading-relaxed line-clamp-2">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
