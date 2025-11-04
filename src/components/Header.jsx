import { useEffect, useState } from 'react';
import { Sun, Moon, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Header({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const navItems = [
    { href: '#summary', label: 'Summary' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#certs', label: 'Certificates' },
    { href: '#skills', label: 'Skills' },
    { href: '#highlights', label: 'Highlights' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/70 bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-teal-600 text-white font-bold">AA</span>
          <span>Arif Asyam</span>
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:arif.asyam.atsaruddin@gmail.com" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300" aria-label="Email">
            <Mail className="size-5" />
          </a>
          <a href="tel:+6289682259036" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300" aria-label="Phone">
            <Phone className="size-5" />
          </a>
          <a href="https://www.linkedin.com/in/arif-asyam-atsaruddin-b7692a246/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300" aria-label="LinkedIn">
            <Linkedin className="size-5" />
          </a>
          <button onClick={onToggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300" aria-label="Toggle color theme">
            {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25c0-.414.336-.75.75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" clipRule="evenodd" /></svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-slate-700 dark:text-slate-200" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="mailto:arif.asyam.atsaruddin@gmail.com" aria-label="Email" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"><Mail className="size-5" /></a>
              <a href="tel:+6289682259036" aria-label="Phone" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"><Phone className="size-5" /></a>
              <a href="https://www.linkedin.com/in/arif-asyam-atsaruddin-b7692a246/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"><Linkedin className="size-5" /></a>
              <button onClick={onToggleTheme} aria-label="Toggle color theme" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">{theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}</button>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <MapPin className="size-4" /> Jakarta, Indonesia
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
