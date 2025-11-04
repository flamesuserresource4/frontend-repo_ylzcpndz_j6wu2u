import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enableDark = theme === 'dark' || (theme === 'system' && prefersDark);
    root.classList.toggle('dark', enableDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.title = 'Arif Asyam Atsaruddin — Security Engineer | Portfolio';
    const meta = document.querySelector('meta[name="description"]');
    const content = "Security Engineer focused on SIEM deployment, log normalization, and integrations across security devices and cloud apps. Based in Jakarta, Indonesia.";
    if (meta) meta.setAttribute('content', content);
    else {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      m.setAttribute('content', content);
      document.head.appendChild(m);
    }
  }, []);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header onToggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
