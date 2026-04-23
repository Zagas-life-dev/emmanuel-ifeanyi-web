export default function Nav() {
  return (
    <header>
      <nav>
        <span className="nav-logo">EI // Portfolio</span>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#activities">Activities</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-status">
          <span className="dot" aria-hidden="true" />
          Open to work
        </div>
      </nav>
    </header>
  )
}
