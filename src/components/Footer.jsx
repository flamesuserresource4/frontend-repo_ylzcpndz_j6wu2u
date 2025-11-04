export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-6 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p>© {year} Arif Asyam Atsaruddin — Jakarta, Indonesia</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a className="hover:underline" href="mailto:arif.asyam.atsaruddin@gmail.com">Email</a>
              <a className="hover:underline" href="tel:+6289682259036">Phone</a>
              <a className="hover:underline" href="https://www.linkedin.com/in/arif-asyam-atsaruddin-b7692a246/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
