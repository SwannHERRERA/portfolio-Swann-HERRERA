import Layout from "../components/layout"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Timeline from "../components/timeline"

const Swann = () => (
  <Layout>
    <Parallax pages={5}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={2} />
      <About offset={3} factor={1} />
      <Contact offset={4} factor={1} />
      <Timeline offset={4} factor={1} />
    </Parallax>
  </Layout>
)

export default Swann
