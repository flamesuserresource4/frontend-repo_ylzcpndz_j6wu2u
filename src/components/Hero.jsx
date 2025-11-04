import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Download } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const resumeDataUrl =
  'data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlL1BhZ2VzL0NvdW50IDEvS2lkc1szIDAgUl0+PgplbmRvYmoKMyAwIG9iago8PC9UeXBlL1BhZ2UvUGFyZW50IDIgMCBSL01lZGlhQm94WzAgMCA2MTIgNzkyXS9Db250ZW50cyA0IDAgUi9SZXNvdXJjZXM8PC9Gb250PDwvRjEgNSAwIFI+Pj4+PgplbmRvYmoKNCAwIG9iago8PC9MZW5ndGggNjc+PnN0cmVhbQpCVCAvRjEgMjQgVGYgNzIgNzIwIFRkIChBcmlmIEFzeWFtIEF0c2FydWRkaW4gLSBSZXN1bWUpIFRqIEVUCmVuZHN0cmVhbQplbmRvYmoKNSAwIG9iago8PC9UeXBlL0ZvbnQvU3VidHlwZS9UeXBlMS9CYXNlRm9udC9IZWx2ZXRpY2E+PgplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAgNjU1MzUgZgowMDAwMDAwMTAgMDAwMDAgbiAKMDAwMDAwMDYwIDAwMDAwIG4gCjAwMDAwMDExNSAwMDAwMCBuIAowMDAwMDAyNzAgMDAwMDAgbiAKMDAwMDAwMzczIDAwMDAwIG4gCnRyYWlsZXI8PC9TaXplIDYvUm9vdCAxIDAgUj4+CnN0YXJ0eHJlZgoyOTUKJSVFT0YK';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden w-full">
      {/* Spline background cover (interactive) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle overlays that do NOT block interaction */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/0 via-white/0 to-white/0 dark:from-slate-900/20 dark:via-slate-900/30 dark:to-slate-900/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_top_left,rgba(45,212,191,0.35),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.25),transparent_50%)]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className="grid gap-10 items-center md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:col-span-2"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]">
              Arif Asyam Atsaruddin
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-teal-100/90">Security Engineer</p>

            <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 text-white/90">
              <span className="inline-flex items-center gap-2"><Phone className="size-4" /> +62 896-8225-9036</span>
              <span className="inline-flex items-center gap-2"><Mail className="size-4" /> arif.asyam.atsaruddin@gmail.com</span>
              <span className="inline-flex items-center gap-2"><MapPin className="size-4" /> Jakarta, Indonesia</span>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/arif-asyam-atsaruddin-b7692a246/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur px-4 py-2 transition-colors"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
              <a
                href={resumeDataUrl}
                download="Arif_Asyam_Atsaruddin_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 transition-colors"
              >
                <Download className="size-4" /> Download Resume
              </a>
              <a
                href="mailto:arif.asyam.atsaruddin@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 hover:bg-slate-100 px-4 py-2 transition-colors"
              >
                <Mail className="size-4" /> Contact / Email
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="md:col-span-1 flex justify-center"
          >
            <div className="size-36 sm:size-44 lg:size-52 rounded-full ring-4 ring-white/20 shadow-2xl overflow-hidden bg-white/10 flex items-center justify-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">AA</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
