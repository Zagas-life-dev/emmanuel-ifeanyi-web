import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Activities from '@/components/Activities'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Activities />
      <Contact />
    </main>
  )
}
