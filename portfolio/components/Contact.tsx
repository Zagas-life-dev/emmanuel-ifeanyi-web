const links = [
  { label: 'GitHub ↗', href: 'https://github.com/Zagas-life-dev' },
  { label: 'Agency ↗', href: 'https://katalystiq.vercel.app/' },
  { label: 'Glowup Channel ↗', href: 'https://www.glowupchannel.com/' },
  { label: 'Email ↗', href: 'mailto:onyedikachiifeanyi.off@gmail.com' },
]

export default function Contact() {
  return (
    <>
      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <h2 className="contact-big" id="contact-heading">
          LET&apos;S<br />BUILD<br /><span>SOMETHING.</span>
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted)', maxWidth: '400px', lineHeight: 1.7, fontWeight: 300 }}>
          Open to freelance projects, agency commissions, and interesting full-time
          roles. Abuja-based, remote-friendly.
        </p>
        <nav className="contact-links" aria-label="Social and contact links">
          {links.map((l) => (
            <a
              key={l.label}
              className="contact-link"
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel={l.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </section>

      <footer>
        <span className="footer-copy">© 2026 Emmanuel Ifeanyi — Web Developer, Abuja NG</span>
        <span className="footer-copy">Built with intention.</span>
      </footer>
    </>
  )
}
