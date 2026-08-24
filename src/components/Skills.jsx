import { FiCode, FiCpu, FiDatabase, FiGitBranch, FiGithub, FiMonitor, FiRadio, FiTerminal } from 'react-icons/fi'

const skills = [
  ['Python', 'Programming', FiCode], ['C Programming', 'Programming', FiTerminal], ['Artificial Intelligence', 'Specialization', FiCpu], ['Data Science', 'Specialization', FiDatabase], ['Internet of Things', 'Specialization', FiRadio], ['Git', 'Tools & platforms', FiGitBranch], ['GitHub', 'Tools & platforms', FiGithub], ['VS Code', 'Tools & platforms', FiMonitor],
]

function Skills() {
  return (
    <section className="section-shell skills-section" id="skills">
      <div className="section-label reveal">02 <span>Toolkit</span></div>
      <div className="section-intro reveal"><h2>Tools for turning<br /><em>questions</em> into systems.</h2><p>A growing toolkit, shaped by hands-on projects and a habit of staying curious.</p></div>
      <div className="skills-grid">{skills.map(([name, type, Icon], index) => <div className="skill-card reveal" style={{ '--index': index }} key={name}><Icon /><span>{type}</span><h3>{name}</h3><b>0{index + 1}</b></div>)}</div>
    </section>
  )
}

export default Skills
