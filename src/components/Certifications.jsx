import { FiAward, FiExternalLink } from 'react-icons/fi'

const certifications = [['Python for Data Science and AI Development', 'IBM Certificate', 'Python · Data Science · AI'], ['Innovation & Entrepreneurship', 'Wadhwani Foundation Certificate', 'Innovation · Entrepreneurship']]

function Certifications() {
  return <section className="section-shell cert-section" id="certifications"><div className="section-label reveal">04 <span>Credentials</span></div><div className="section-intro reveal"><h2>Proof of a<br /><em>learning mindset.</em></h2></div><div className="cert-list">{certifications.map(([title, issuer, skills], index) => <article className="cert-card reveal" key={title}><div className="cert-icon"><FiAward /></div><div><span className="cert-number">0{index + 1}</span><h3>{title}</h3><p>{issuer}</p><small>{skills}</small></div><FiExternalLink className="cert-link" /></article>)}</div></section>
}

export default Certifications
