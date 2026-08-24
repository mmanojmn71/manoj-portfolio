import { FiArrowUpRight, FiChevronDown, FiCpu, FiDatabase, FiGitBranch } from 'react-icons/fi'

function Hero() {
  return (
    <section className="hero-section section-shell" id="home">
      <div className="hero-copy reveal">
        <p className="eyebrow"><span className="status-dot" /> Available for meaningful projects</p>
        <h1>Building with <span>curiosity.</span><br />Learning with purpose.</h1>
        <p className="hero-intro">Hi, I'm Manoj M N, a B.Tech student exploring the intersection of intelligent systems, data, and the physical world.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View my projects <FiArrowUpRight /></a>
          <a className="button button-ghost" href="#contact">Contact me</a>
        </div>
        <a className="scroll-cue" href="#about"><FiChevronDown /> Scroll to explore</a>
      </div>
      <div className="hero-visual reveal delay-1" aria-label="Abstract AI data visualization">
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <div className="core-node"><FiCpu /><span>AI<br /><small>CORE</small></span></div>
        <div className="data-node node-one"><FiDatabase /><b>DATA</b></div>
        <div className="data-node node-two"><FiGitBranch /><b>IoT</b></div>
        <div className="visual-caption">01 / 03 <span>systems in motion</span></div>
      </div>
    </section>
  )
}

export default Hero
