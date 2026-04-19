import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ImageIcon } from 'lucide-react';
import { PROJECTS } from '../data';
import { DOMAINS } from '../types';

export default function Projects() {
  const [activeDomain, setActiveDomain] = useState<string>('All');

  const filtered = useMemo(() => {
    return PROJECTS.filter(p =>
      activeDomain === 'All' || p.domain.includes(activeDomain)
    );
  }, [activeDomain]);

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 md:px-12 max-w-7xl mx-auto">

      <div className="flex flex-wrap items-center gap-3 mb-8 mt-4">
        {DOMAINS.map(d => (
          <button
            key={d}
            onClick={() => setActiveDomain(d)}
            className={`text-[12px] font-semibold px-5 py-2 rounded-full border transition-all ${
              activeDomain === d
                ? 'bg-sky-500 border-sky-500 text-white'
                : 'border-slate-200 text-slate-400 hover:border-slate-400 hover:text-slate-900 bg-transparent'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(project => (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-sky-400 transition-all duration-200 block"
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
          >
            {/* Image placeholder */}
            <div
              className="w-full bg-slate-50 border-b border-slate-100 flex flex-col items-center justify-center gap-2"
              style={{ height: '200px' }}
            >
              <ImageIcon size={28} className="text-slate-300" />
              <span className="font-mono text-[10px] text-slate-300 tracking-[3px] uppercase">Image coming soon</span>
            </div>

            {/* Card body */}
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.domain.map(d => (
                  <span key={d} className="text-[11px] font-semibold px-3 py-1 rounded-md bg-sky-50 text-sky-600 border border-sky-100 tracking-wide uppercase">
                    {d}
                  </span>
                ))}
                {project.featured && (
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-md bg-cyan-50 text-cyan-600 border border-cyan-100 tracking-wide uppercase">
                    Featured
                  </span>
                )}
              </div>

              <h2 className="text-[17px] font-bold text-slate-900 leading-snug mb-2 group-hover:text-sky-500 transition-colors">
                {project.title.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')}
              </h2>

              <p className="text-[13px] text-slate-500 leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 5).map(t => (
                  <span key={t} className="text-[11px] px-3 py-1 rounded-lg border border-slate-200 text-slate-400">{t}</span>
                ))}
                {project.tech.length > 5 && (
                  <span className="text-[11px] px-2 py-1 text-slate-400">+{project.tech.length - 5} more</span>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="flex items-center gap-1.5 text-[12px] font-semibold text-sky-500 group-hover:gap-3 transition-all">
                  Read more <ArrowUpRight size={13} />
                </span>
                {project.githubUrl && (
                  <span
                    className="flex items-center gap-1.5 text-[12px] text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
                    onClick={e => { e.preventDefault(); window.open(project.githubUrl, '_blank'); }}
                  >
                    <Github size={13} /> Code
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24">
          <p className="text-slate-400 text-sm">No projects in this category yet.</p>
        </div>
      )}
    </div>
  );
}
