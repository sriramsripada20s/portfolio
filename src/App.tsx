import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Footer() {
  return (
    <footer className="border-t border-[#181828] px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono-custom text-[11px] text-muted tracking-[1px]">
          © 2025 <span className="text-cyan">Sriram Sripada</span> — Data & AI Engineer
        </div>
        <div className="font-mono-custom text-[11px] text-muted tracking-[1px]">
          Raleigh, NC · Remote-first · Open to NYC
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/sriramsripada20s" target="_blank" rel="noreferrer"
            className="font-mono-custom text-[11px] text-muted hover:text-white transition-colors tracking-wide">
            GitHub
          </a>
          <a href="https://linkedin.com/in/sriramsripada" target="_blank" rel="noreferrer"
            className="font-mono-custom text-[11px] text-muted hover:text-white transition-colors tracking-wide">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
