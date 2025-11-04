import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, ExternalLink, Download, CheckCircle } from 'lucide-react';

const sectionTitle = (title, id) => (
  <h2 id={id} className="scroll-mt-24 text-sm font-semibold tracking-widest text-teal-600 dark:text-teal-400">
    {title}
  </h2>
);

const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm ${className}`}>
    {children}
  </div>
);

const Tag = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-medium border border-teal-200/60 dark:border-teal-800/60">{children}</span>
);

const skillLevels = {
  'Security Operations': 90,
  'SIEM': 90,
  'Log Normalization': 85,
  'Networking': 85,
  'Kubernetes': 70,
  'Python': 75,
  'Syslog': 80,
  'API Integration': 80,
  'Elastic Stack': 85,
  'SIEM deployment': 90,
  'SIEM connectors': 85,
};

export default function MainContent() {
  return (
    <main className="relative -mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Summary */}
        <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-3 gap-8 -mt-16">
          <div className="lg:col-span-2">
            <Card className="p-6">
              {sectionTitle('SUMMARY', 'summary')}
              <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">
                I'm a 20-year-old Computer Engineering and Network Specialist with 4 years of experience in networking, cybersecurity, and server management. I have strong communication skills and a solid history of completing technical projects. For the past year, I've worked as a Security Engineer, handling SIEM deployment, integrating various security devices or servers using both native tools and APIs, and normalizing raw logs for better threat detection. I'm known for being reliable, adaptable, and eager to keep learning and improving.
              </p>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Quick Info</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2"><Calendar className="size-4 text-teal-600" /> 4+ years technical experience</li>
                <li className="flex items-center gap-2"><Building2 className="size-4 text-teal-600" /> Security Engineer @ Defenxor</li>
                <li className="flex items-center gap-2"><MapPin className="size-4 text-teal-600" /> Jakarta, Indonesia</li>
              </ul>
            </Card>
          </div>
        </motion.section>

        {/* Experience & Education */}
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
            <Card className="p-6">
              {sectionTitle('EXPERIENCE', 'experience')}
              <ol className="relative mt-6 border-s-l border-slate-200 dark:border-slate-800">
                <li className="ms-6 pb-8">
                  <span className="absolute -start-1.5 mt-1 size-3 rounded-full bg-teal-500" aria-hidden="true" />
                  <div className="rounded-xl p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">Security Engineer — Defenxor (PT Defender Nusa Semesta)</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">May 2024 – Present · South Jakarta, Jakarta, Indonesia · On-site</p>
                      </div>
                    </div>
                    <ul className="mt-3 list-disc ps-5 text-slate-700 dark:text-slate-300 space-y-2 text-sm">
                      <li>Built a SIEM design to monitor security-related activities across the environment.</li>
                      <li>Integrated security devices (Firewall, Antivirus, IPS/IDS) and cloud security/apps (Office365, Microsoft Defender, CrowdStrike) to SIEM via Syslog and API.</li>
                      <li>Performed log normalization and correlation for improved threat detection and alerts.</li>
                    </ul>
                  </div>
                </li>
                <li className="ms-6 pb-2">
                  <span className="absolute -start-1.5 mt-1 size-3 rounded-full bg-teal-500" aria-hidden="true" />
                  <div className="rounded-xl p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">Application Developer (Intern) — AirNav Indonesia</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Nov 2023 – Apr 2024 · Yogyakarta, Indonesia</p>
                      </div>
                    </div>
                    <ul className="mt-3 list-disc ps-5 text-slate-700 dark:text-slate-300 space-y-2 text-sm">
                      <li>Developed a Python Teleprinter Application to receive AFTN (Aeronautical Fixed Telecommunication Network) messages, forward to operators and AMSC.</li>
                    </ul>
                  </div>
                </li>
              </ol>
            </Card>

            <Card className="p-6 mt-8">
              {sectionTitle('HIGHLIGHTS', 'highlights')}
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">SIEM Implementation</h3>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">Designed SIEM for enterprise, device integrations, alerting.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">AFTN Teleprinter App</h3>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">Python app for AFTN message ingestion & forwarding.</p>
                </div>
              </div>
            </Card>
          </motion.section>

          <motion.aside initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-1">
            <Card className="p-6">
              {sectionTitle('EDUCATION', 'education')}
              <div className="mt-4">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Computer and Network Engineering</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">Telkom Malang Vocational High School — Student</p>
              </div>
            </Card>

            <Card className="p-6 mt-8">
              {sectionTitle('CERTIFICATES & LICENSES', 'certs')}
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  { t: 'Data Analysis Kibana, Elastic', d: 'Issued Aug 2025', id: 'C136032' },
                  { t: 'Kubernetes Basics, Elastic', d: 'Issued Aug 2025', id: 'C129172' },
                  { t: 'Elastic Observability Engineer, Elastic', d: 'Issued Jul 2025', id: 'C132737' },
                  { t: 'Elasticsearch Engineer, Elastic', d: 'Issued Jun 2025', id: 'C128038' },
                  { t: 'Developer intern, AirNav Indonesia', d: 'Issued May 2024' },
                  { t: 'Networking Essentials, Cisco Networking Academy', d: 'Issued Nov 2023' },
                  { t: 'IT Specialist: CyberSecurity, Pearson VUE', d: 'Issued Oct 2023' },
                  { t: 'IoT Fundamentals: Connecting Things, Cisco', d: 'Issued Sep 2023' },
                  { t: 'CyberOps Associate, Cisco', d: 'Issued Jul 2023' },
                  { t: 'Telkom Digiup Junior Web Developer, Telkom Indonesia', d: 'Issued Mar 2023 (Expires Mar 2026)' },
                ].map((c, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                    <CheckCircle className="size-4 mt-1 text-teal-600" />
                    <div className="flex-1">
                      <div className="font-medium text-slate-900 dark:text-slate-100">{c.t}</div>
                      <div className="text-slate-600 dark:text-slate-400">{c.d}{c.id ? ` — Credential ID ${c.id}` : ''}</div>
                    </div>
                    <a href="#" className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200 text-xs font-medium" aria-label={`Download ${c.t} certificate as PDF`}>
                      <Download className="size-3" /> PDF
                    </a>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 mt-8">
              {sectionTitle('SKILLS', 'skills')}
              <div className="mt-4 flex flex-wrap gap-2">
                {Object.keys(skillLevels).map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
              <div className="mt-4 space-y-3">
                {Object.entries(skillLevels).map(([name, level]) => (
                  <div key={name}>
                    <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                      <span>{name}</span>
                      <span>{level}%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-teal-500" style={{ width: `${level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.aside>
        </div>

        {/* Contact */}
        <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-12">
          <Card className="p-6">
            {sectionTitle('CONTACT', 'contact')}
            <div className="mt-4 grid md:grid-cols-2 gap-8">
              <form className="space-y-4" aria-label="Contact form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                  <input id="name" name="name" type="text" required className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-teal-500 focus:border-teal-500" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-teal-500 focus:border-teal-500" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-teal-500 focus:border-teal-500" placeholder="Tell me about your project or request..." />
                </div>
                <div className="flex items-center gap-3">
                  <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 font-medium">Send</button>
                  <a href="mailto:arif.asyam.atsaruddin@gmail.com" className="text-teal-700 dark:text-teal-300 hover:underline inline-flex items-center gap-1"><ExternalLink className="size-4" /> Email directly</a>
                </div>
              </form>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300">Let's talk about security. I'm available for roles, consulting, and projects.</p>
                <div className="text-sm text-slate-700 dark:text-slate-300">
                  <p>Phone: <a className="text-teal-700 dark:text-teal-300 hover:underline" href="tel:+6289682259036">+62 896-8225-9036</a></p>
                  <p>Email: <a className="text-teal-700 dark:text-teal-300 hover:underline" href="mailto:arif.asyam.atsaruddin@gmail.com">arif.asyam.atsaruddin@gmail.com</a></p>
                  <p>Location: Jakarta, Indonesia</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#hero" className="inline-flex items-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100">Hire me</a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100"><Download className="size-4" /> Download resume</a>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>
      </div>
    </main>
  );
}
