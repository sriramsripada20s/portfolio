import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '../data';
import { DOMAINS } from '../types';

function Customer360Thumb() {
  return (
    <div style={{ height: '200px', background: '#0D1117', position: 'relative', overflow: 'hidden', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#29B5E8,#FF694A,#3FB950)' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', flex: 1 }}>
        {[
          {
            name: 'Snowflake', svg: <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><path d="M50 5L62 27L85 20L78 43L100 50L78 57L85 80L62 73L50 95L38 73L15 80L22 57L0 50L22 43L15 20L38 27Z" fill="#29B5E8"/></svg>
          },
          {
            name: 'dbt Cloud', svg: <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="50" fill="#FF694A"/><circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="12"/><circle cx="50" cy="50" r="8" fill="white"/></svg>
          },
          {
            name: 'GitHub Actions', svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="#E6EDF3"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57v-2.23c-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.21.69.82.57A12 12 0 0024 12C24 5.37 18.63 0 12 0z"/></svg>
          },
          {
            name: 'MetricFlow', svg: <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><rect x="10" y="10" width="35" height="35" rx="6" fill="#378ADD"/><rect x="55" y="10" width="35" height="35" rx="6" fill="#378ADD" opacity="0.6"/><rect x="10" y="55" width="35" height="35" rx="6" fill="#378ADD" opacity="0.6"/><rect x="55" y="55" width="35" height="35" rx="6" fill="#378ADD" opacity="0.3"/></svg>
          },
          {
            name: 'Sigma / BI', svg: <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><rect x="5" y="30" width="20" height="20" rx="3" fill="#2496ED"/><rect x="30" y="30" width="20" height="20" rx="3" fill="#2496ED"/><rect x="55" y="30" width="20" height="20" rx="3" fill="#2496ED"/><rect x="80" y="30" width="20" height="20" rx="3" fill="#2496ED"/><rect x="30" y="55" width="20" height="20" rx="3" fill="#2496ED"/><rect x="55" y="55" width="20" height="20" rx="3" fill="#2496ED"/><rect x="55" y="5" width="20" height="20" rx="3" fill="#2496ED"/></svg>
          },
          {
            name: 'Python', svg: <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><path d="M50 10C28 10 10 28 10 50s18 40 40 40 40-18 40-40S72 10 50 10zm0 60c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" fill="#3776AB"/><path d="M35 50c0-8.3 6.7-15 15-15s15 6.7 15 15" stroke="#FFD43B" strokeWidth="5" fill="none" strokeLinecap="round"/></svg>
          },
        ].map(({ name, svg }) => (
          <div key={name} style={{ background: '#111827', border: '1px solid #1F2937', borderRadius: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '8px 4px' }}>
            {svg}
            <span style={{ fontSize: '8px', fontFamily: 'monospace', color: '#6B7280', textAlign: 'center' }}>{name}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '6px', marginTop: '10px', flexWrap: 'wrap' }}>
        {[
          { label: '290 tests', bc: '#1E3A5F', c: '#38BDF8', bg: '#0F172A' },
          { label: '$224M tracked', bc: '#1A3A1A', c: '#3FB950', bg: '#0A1F0A' },
          { label: '18 metrics', bc: '#3A1F5A', c: '#BC8CFF', bg: '#1A0F2A' },
        ].map(p => (
          <span key={p.label} style={{ fontSize: '8px', fontFamily: 'monospace', padding: '2px 7px', borderRadius: '3px', border: `1px solid ${p.bc}`, color: p.c, background: p.bg }}>{p.label}</span>
        ))}
      </div>
    </div>
  );
}

function CortexAgentThumb() {
  return (
    <div style={{ height: '200px', background: '#0D1117', position: 'relative', overflow: 'hidden', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#29B5E8,#CC785C)' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', flex: 1 }}>
        {[
          {
            name: 'Snowflake', svg: <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><path d="M50 5L62 27L85 20L78 43L100 50L78 57L85 80L62 73L50 95L38 73L15 80L22 57L0 50L22 43L15 20L38 27Z" fill="#29B5E8"/></svg>
          },
          {
            name: 'Claude LLM', svg: <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><path d="M55 8L80 85H62L56 66H44L38 85H20L45 8H55zm-7 20L38 68h20L48 28z" fill="#CC785C"/></svg>
          },
          {
            name: 'Python', svg: <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><rect x="15" y="15" width="30" height="30" rx="5" fill="#3776AB"/><rect x="55" y="15" width="30" height="30" rx="5" fill="#FFD43B"/><rect x="15" y="55" width="30" height="30" rx="5" fill="#FFD43B"/><rect x="55" y="55" width="30" height="30" rx="5" fill="#3776AB"/></svg>
          },
          {
            name: 'LangChain', svg: <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><path d="M20 50 Q50 20 80 50 Q50 80 20 50Z" fill="none" stroke="#1DB954" strokeWidth="6"/><circle cx="50" cy="50" r="8" fill="#1DB954"/><path d="M50 20 L50 35M50 65 L50 80M20 50 L35 50M65 50 L80 50" stroke="#1DB954" strokeWidth="4" strokeLinecap="round"/></svg>
          },
          {
            name: 'Streamlit', svg: <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><rect x="10" y="10" width="80" height="80" rx="8" fill="#FF4B4B"/><text x="50" y="62" fontSize="36" fontWeight="900" fill="white" textAnchor="middle" fontFamily="monospace">St</text></svg>
          },
          {
            name: 'FastAPI', svg: <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><path d="M50 10 L90 32 L90 68 L50 90 L10 68 L10 32Z" fill="none" stroke="#00B4D8" strokeWidth="5"/><circle cx="50" cy="50" r="12" fill="#00B4D8"/></svg>
          },
        ].map(({ name, svg }) => (
          <div key={name} style={{ background: '#111827', border: '1px solid #1F2937', borderRadius: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '8px 4px' }}>
            {svg}
            <span style={{ fontSize: '8px', fontFamily: 'monospace', color: '#6B7280', textAlign: 'center' }}>{name}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '6px', marginTop: '10px', flexWrap: 'wrap' }}>
        {[
          { label: '92% accuracy', bc: '#1E3A5F', c: '#38BDF8', bg: '#0F172A' },
          { label: '65% faster', bc: '#1A3A1A', c: '#3FB950', bg: '#0A1F0A' },
          { label: '4+ teams', bc: '#3A1A1A', c: '#F85149', bg: '#1A0A0A' },
        ].map(p => (
          <span key={p.label} style={{ fontSize: '8px', fontFamily: 'monospace', padding: '2px 7px', borderRadius: '3px', border: `1px solid ${p.bc}`, color: p.c, background: p.bg }}>{p.label}</span>
        ))}
      </div>
    </div>
  );
}

function FraudDetectionThumb() {
  return (
    <div style={{ height: '200px', background: '#0D1117', position: 'relative', overflow: 'hidden', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#FF9900,#F85149,#3FB950)' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', flex: 1 }}>
        {[
          {
            name: 'AWS SageMaker', svg: <svg width="32" height="20" viewBox="0 0 120 75" fill="none"><path d="M34 24c0-8 6-14 14-14 2 0 4 .4 6 1.2C56 5 63 0 71 0c12 0 21 9 21 20 0 1-.1 2-.2 3C97 25 101 30 101 37c0 8-7 15-15 15H34C24 52 16 44 16 34c0-8 7-14 14-14h4v4z" fill="#FF9900"/><path d="M40 65 Q60 55 80 65" stroke="#FF9900" strokeWidth="4" fill="none" strokeLinecap="round"/></svg>
          },
          {
            name: 'XGBoost', svg: <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><rect x="15" y="15" width="30" height="30" rx="5" fill="#3776AB"/><rect x="55" y="15" width="30" height="30" rx="5" fill="#FFD43B"/><rect x="15" y="55" width="30" height="30" rx="5" fill="#FFD43B"/><rect x="55" y="55" width="30" height="30" rx="5" fill="#3776AB"/></svg>
          },
          {
            name: 'Docker', svg: <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><rect x="10" y="10" width="80" height="80" rx="10" stroke="#0DB7ED" strokeWidth="5" fill="none"/><rect x="25" y="40" width="15" height="22" rx="2" fill="#0DB7ED"/><rect x="43" y="32" width="15" height="30" rx="2" fill="#0DB7ED"/><rect x="61" y="25" width="15" height="37" rx="2" fill="#0DB7ED"/></svg>
          },
          {
            name: 'MLflow', svg: <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><rect x="10" y="10" width="35" height="35" rx="6" fill="#0194E2"/><rect x="55" y="10" width="35" height="35" rx="6" fill="#0194E2" opacity="0.6"/><rect x="10" y="55" width="35" height="35" rx="6" fill="#0194E2" opacity="0.6"/><rect x="55" y="55" width="35" height="35" rx="6" fill="#0194E2" opacity="0.3"/></svg>
          },
          {
            name: 'GitHub Actions', svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="#E6EDF3"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57v-2.23c-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.21.69.82.57A12 12 0 0024 12C24 5.37 18.63 0 12 0z"/></svg>
          },
          {
            name: 'FastAPI', svg: <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><path d="M50 10 L90 32 L90 68 L50 90 L10 68 L10 32Z" fill="none" stroke="#FF9900" strokeWidth="5"/><path d="M50 30 L70 41 L70 59 L50 70 L30 59 L30 41Z" fill="#FF9900" opacity="0.3"/><circle cx="50" cy="50" r="8" fill="#FF9900"/></svg>
          },
        ].map(({ name, svg }) => (
          <div key={name} style={{ background: '#111827', border: '1px solid #1F2937', borderRadius: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '8px 4px' }}>
            {svg}
            <span style={{ fontSize: '8px', fontFamily: 'monospace', color: '#6B7280', textAlign: 'center' }}>{name}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '6px', marginTop: '10px', flexWrap: 'wrap' }}>
        {[
          { label: '$4.2M flagged', bc: '#1E3A5F', c: '#38BDF8', bg: '#0F172A' },
          { label: '0.94 AUC', bc: '#3A1A1A', c: '#F85149', bg: '#1A0A0A' },
          { label: '40% less ops', bc: '#1A3A1A', c: '#3FB950', bg: '#0A1F0A' },
        ].map(p => (
          <span key={p.label} style={{ fontSize: '8px', fontFamily: 'monospace', padding: '2px 7px', borderRadius: '3px', border: `1px solid ${p.bc}`, color: p.c, background: p.bg }}>{p.label}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectThumbnail({ slug }: { slug: string }) {
  if (slug === 'customer-360-dbt-snowflake') return <Customer360Thumb />;
  if (slug === 'snowflake-cortex-ai-agent') return <CortexAgentThumb />;
  if (slug === 'fraud-detection-mlops') return <FraudDetectionThumb />;
  return (
    <div className="w-full bg-[#0b0e15] border-b border-[#232d3f] flex items-center justify-center" style={{ height: '200px' }}>
      <span className="font-mono text-[10px] text-[#2d3d55] tracking-[3px] uppercase">coming soon</span>
    </div>
  );
}

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
                : 'border-[#232d3f] text-[#6b7a96] hover:border-[#3d4f6b] hover:text-white bg-transparent'
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
            className="group bg-[#161b27] border border-[#232d3f] rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-sky-500/40 transition-all duration-200 block"
          >
            <ProjectThumbnail slug={project.slug} />

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.domain.map(d => (
                  <span key={d} className="text-[11px] font-semibold px-3 py-1 rounded-md bg-sky-950/60 text-sky-400 border border-sky-800/30 tracking-wide uppercase">
                    {d}
                  </span>
                ))}
                {project.featured && (
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-md bg-cyan-950/50 text-cyan-400 border border-cyan-800/30 tracking-wide uppercase">
                    Featured
                  </span>
                )}
              </div>

              <h2 className="text-[17px] font-bold text-white leading-snug mb-2 group-hover:text-sky-400 transition-colors">
                {project.title.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')}
              </h2>

              <p className="text-[13px] text-[#6b7a96] leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 5).map(t => (
                  <span key={t} className="text-[11px] px-3 py-1 rounded-lg border border-[#232d3f] text-[#6b7a96]">{t}</span>
                ))}
                {project.tech.length > 5 && (
                  <span className="text-[11px] px-2 py-1 text-[#6b7a96]">+{project.tech.length - 5} more</span>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#232d3f]">
                <span className="flex items-center gap-1.5 text-[12px] font-semibold text-sky-400 group-hover:gap-3 transition-all">
                  Read more <ArrowUpRight size={13} />
                </span>
                {project.githubUrl && (
                  <span
                    className="flex items-center gap-1.5 text-[12px] text-[#6b7a96] hover:text-white transition-colors cursor-pointer"
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
          <p className="text-[#6b7a96] text-sm">No projects in this category yet.</p>
        </div>
      )}
    </div>
  );
}
