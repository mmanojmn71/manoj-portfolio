import { FiArrowUpRight, FiBookOpen } from 'react-icons/fi'

function About() {
  return (
    <section className="section-shell about-section" id="about">
      <div className="section-label reveal">01 <span>About me</span></div>
      <div className="about-grid">
        <div className="about-heading reveal"><h2>Ideas become<br /><em>impact</em> when<br />they leave the screen.</h2></div>
        <div className="about-content reveal delay-1">
          <p className="lead">Motivated B.Tech student specializing in Artificial Intelligence and Data Science. I enjoy turning foundational knowledge in programming and algorithm design into useful, thoughtful systems.</p>
          <p>My current curiosity lives where intelligent software meets the real world: IoT, sensing, and the small details that make technology feel effortless.</p>
          <div className="education-line"><span className="education-icon"><FiBookOpen /></span><div><strong>REVA University</strong><span>B.Tech in Artificial Intelligence &amp; Data Science</span><small>2nd Year Undergraduate</small></div><FiArrowUpRight className="education-arrow" /></div>
        </div>
      </div>
    </section>
  )
}

export default About
