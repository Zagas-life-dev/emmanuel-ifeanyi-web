const skills = [
  { name: 'Next.js', type: 'Frontend', level: 90 },
  { name: 'React', type: 'Frontend', level: 88 },
  { name: 'TypeScript', type: 'Language', level: 82 },
  { name: 'Node.js', type: 'Backend', level: 80 },
  { name: 'PostgreSQL', type: 'Database', level: 75 },
  { name: 'Tailwind CSS', type: 'Styling', level: 92 },
  { name: 'REST APIs', type: 'Backend', level: 85 },
  { name: 'JWT / RBAC', type: 'Auth', level: 78 },
  { name: 'Godot / GDScript', type: 'Game Dev', level: 70 },
  { name: 'AI Integration', type: 'EdTech / LLMs', level: 80 },
  { name: 'Vercel / Supabase', type: 'Infrastructure', level: 85 },
  { name: 'Git / GitHub', type: 'Version Control', level: 90 },
]

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="section-label" id="skills-heading">Skills &amp; Tools</div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-cell" key={skill.name}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-type">{skill.type}</div>
            <div className="skill-bar-track">
              <div className="skill-bar" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
