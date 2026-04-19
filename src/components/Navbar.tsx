import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#05050d]/90 backdrop-blur-xl border-b border-[#181828]' : ''}`}
      style={{ padding: scrolled ? '14px 48px' : '24px 48px' }}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="font-display text-xl tracking-widest text-white hover:text-cyan transition-colors">
          SR<span className="text-cyan">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-mono-custom text-[11px] tracking-[3px] uppercase transition-colors ${location.pathname === l.to ? 'text-cyan' : 'text-muted hover:text-white'}`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/sriramsripada20s"
            target="_blank"
            rel="noreferrer"
            className="font-mono-custom text-[11px] tracking-[2px] uppercase text-cyan border border-cyan/40 px-4 py-2 rounded-sm hover:bg-cyan/10 transition-all"
          >
            GitHub ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-muted hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b0b16] border-t border-[#181828] px-6 py-6 flex flex-col gap-6">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`font-mono-custom text-[12px] tracking-[3px] uppercase ${location.pathname === l.to ? 'text-cyan' : 'text-muted'}`}>
              {l.label}
            </Link>
          ))}
          <a href="https://github.com/sriramsripada20s" target="_blank" rel="noreferrer"
            className="font-mono-custom text-[12px] tracking-[2px] uppercase text-cyan">
            GitHub ↗
          </a>
        </div>
      )}
    </nav>
  );
}
