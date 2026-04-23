const experience = [
  {
    period: '2024 — Present',
    org: 'Katalystiq',
    role: 'Founder & Lead Developer',
    detail:
      'Founded and operate a web agency specialising in high-performance digital architecture. Manage client briefs, design systems, and full-stack delivery across multiple verticals including fashion, education, and media.',
  },
  {
    period: '2023 — Present',
    org: 'Glowup Channel',
    role: 'Lead Developer',
    detail:
      'Designed and built a full-stack content platform from scratch — user auth, channel system, content feeds, playlist management, and search. Sole developer.',
  },
  {
    period: '2022 — 2024',
    org: 'King Zaga Game Dev',
    role: 'Game Developer',
    detail:
      'Built and shipped games using Godot and GDScript under the Zagas Life brand. Managed a YouTube channel around game development content, building an audience around the process.',
  },
  {
    period: '2021 — Present',
    org: 'Freelance',
    role: 'Full-Stack Web Developer',
    detail:
      '4+ years building across the stack — REST APIs, RBAC auth systems, frontend interfaces, and AI integrations. Delivered projects spanning EdTech, media, and fashion.',
  },
]

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="section-label" id="experience-heading">Experience</div>
      <ol className="exp-list">
        {experience.map((e) => (
          <li className="exp-item" key={e.org + e.period}>
            <div className="exp-left">
              <time className="exp-period">{e.period}</time>
              <div className="exp-org">{e.org}</div>
            </div>
            <div>
              <h2 className="exp-role">{e.role}</h2>
              <p className="exp-detail">{e.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
