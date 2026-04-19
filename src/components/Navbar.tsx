import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github } from 'lucide-react';

const links = [
  { to: '/', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
      style={{ padding: scrolled ? '14px 48px' : '24px 48px' }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        <Link to="/" className="font-display text-xl tracking-widest text-slate-900 hover:text-sky-500 transition-colors">
          SR<span className="text-sky-500">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-mono-custom text-[11px] tracking-[3px] uppercase transition-colors ${
                location.pathname === l.to
                  ? 'text-sky-500'
                  : 'text-slate-400 hover:text-slate-900'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/sriramsripada20s"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-mono-custom text-[11px] tracking-[2px] uppercase text-sky-500 border border-sky-200 px-4 py-2 rounded-sm hover:bg-sky-50 transition-all"
          >
            <Github size={12} /> GitHub
          </a>
        </div>

        <button
          className="md:hidden text-slate-400 hover:text-slate-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-6 flex flex-col gap-6">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-mono-custom text-[12px] tracking-[3px] uppercase ${
                location.pathname === l.to ? 'text-sky-500' : 'text-slate-400'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/sriramsripada20s"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-mono-custom text-[12px] tracking-[2px] uppercase text-sky-500"
          >
            <Github size={12} /> GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
