import { FiArrowUpRight, FiRadio, FiZap } from 'react-icons/fi'

function Projects() {
  return (
    <section className="section-shell project-section" id="projects">
      <div className="section-label reveal">03 <span>Selected project</span></div>
      <div className="project-card reveal delay-1">
        <div className="project-art"><div className="parking-grid">{Array.from({ length: 12 }, (_, i) => <span className={i === 4 || i === 9 ? 'occupied' : ''} key={i}>{i === 4 || i === 9 ? '×' : 'P'}</span>)}</div><div className="signal signal-one" /><div className="signal signal-two" /><div className="art-badge"><FiRadio /> LIVE SYSTEM</div></div>
        <div className="project-info"><div className="project-topline"><span>01 / IoT project</span><span>2025</span></div><h2>IoT-Based<br /><em>Smart Parking</em> System</h2><p>Designed and developed an automated parking management framework using IoT sensors to monitor occupancy in real time and make availability instantly visible.</p><div className="tag-list"><span>IoT</span><span>Sensors</span><span>ESP32</span><span>Real-time data</span></div><div className="objective"><FiZap /><span>Optimizing urban flow, one open space at a time.</span></div><a className="text-link" href="#contact">View project <FiArrowUpRight /></a></div>
      </div>
    </section>
  )
}

export default Projects
