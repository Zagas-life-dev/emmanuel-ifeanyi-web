const projects = [
  {
    tag: '// Major Project · Full-Stack Web App',
    name: 'Glowup Channel',
    desc: 'A content platform serving opportunities, events, jobs, and resources. Full web application with channel system, playlists, and user profiles — built for scale.',
    stack: ['Next.js', 'React', 'Full-Stack', 'Platform'],
    href: 'https://www.glowupchannel.com/',
    featured: true,
  },
  {
    tag: '// Agency · Founded',
    name: 'Katalystiq',
    desc: 'A web agency I built and run — positioned as "Architects of Digital Precision." Full branding, service tiers, and client acquisition system.',
    stack: ['Next.js', 'Brand Design', 'Agency'],
    href: 'https://katalystiq.vercel.app/',
    featured: false,
  },
  {
    tag: '// AI · EdTech',
    name: 'Study Better AI',
    desc: 'An AI-powered educational tool designed to transform how students learn — part of a growing EdTech vertical.',
    stack: ['AI Integration', 'EdTech', 'React'],
    href: 'https://studybetter-convetion.vercel.app/',
    featured: false,
  },
  {
    tag: '// Client Work · Katalystiq',
    name: 'LAW Model Academy',
    desc: 'High-fashion editorial website for a modelling academy — 125k variant. High-contrast design system with vertical navigation and premium brand presence.',
    stack: ['Next.js', 'Editorial Design', 'Brand'],
    href: 'https://law-125k.vercel.app/',
    featured: false,
  },
  {
    tag: '// Client Work · Portfolio',
    name: 'Emmanuel Ifeanyi',
    desc: 'A video editor portfolio site — TikTok-style video showcase with custom playback UI, animated content feed, and channel trust section.',
    stack: ['React', 'Video UI', 'Animation'],
    href: 'https://emmanuel-ifeanyi.vercel.app/',
    featured: false,
  },
  {
    tag: '// Demo · Automotive · Brand',
    name: 'Sarkin Mota Autos',
    desc: 'Premium automotive brand experience for Dr. Aliyu Muhammad — collection, founder story, dealer network stats, deposit program, and contact flows. The First King of Cars.',
    stack: ['Next.js', 'Brand', 'Landing'],
    href: 'https://sarkin-mota-demo.vercel.app/',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="section-label" id="projects-heading">Selected Projects</div>
      <div className="projects-grid">
        {projects.map((p) => (
          <a
            key={p.name}
            className={`project-card${p.featured ? ' proj-featured' : ''}`}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${p.name} — ${p.desc}`}
          >
            <div>
              <div className="proj-tag">{p.tag}</div>
              <h2 className="proj-name">{p.name}</h2>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-stack">
                {p.stack.map((t) => (
                  <span className="stack-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
            <span className="project-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
