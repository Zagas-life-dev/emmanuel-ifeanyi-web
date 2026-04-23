const activities = [
  {
    name: 'Video Editor',
    desc: 'Create short-form and long-form edits with fast cuts, clean pacing, and creator-first storytelling — from car edits to commentary videos.',
    link: { label: 'View editing portfolio ↗', href: 'https://emmanuel-ifeanyi.vercel.app/' },
  },
  {
    name: 'Build Full Projects',
    desc: 'Take products from idea to production: planning, UI/UX, frontend, backend, deployment, and post-launch improvements.',
    link: { label: 'View full projects ↗', href: 'https://katalystiq.vercel.app/' },
  },
  {
    name: 'Make Games',
    desc: 'Design and develop game systems, mechanics, and gameplay loops using Godot and GDScript — from prototype to release.',
  },
  {
    name: 'Build Websites',
    desc: 'Build responsive business and portfolio websites with strong performance, clear content structure, and conversion-focused layouts.',
  },
]

export default function Activities() {
  return (
    <section id="activities" aria-labelledby="activities-heading">
      <div className="section-label" id="activities-heading">Other Activities</div>
      <div className="activities-grid">
        {activities.map((a) => (
          <article className="activity-card" key={a.name}>
            <h2 className="activity-name">{a.name}</h2>
            <p className="activity-desc">{a.desc}</p>
            {a.link && (
              <a
                className="activity-link"
                href={a.link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {a.link.label}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
