export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Emmanuel Ifeanyi',
    url: 'https://emmanueli.dev',
    jobTitle: 'Full-Stack Web Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Katalystiq',
      url: 'https://katalystiq.vercel.app/',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abuja',
      addressCountry: 'NG',
    },
    sameAs: [
      'https://github.com/Zagas-life-dev',
      'https://katalystiq.vercel.app/',
      'https://www.glowupchannel.com/',
    ],
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Full-Stack Web Development',
      'Game Development',
      'AI Integration',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
