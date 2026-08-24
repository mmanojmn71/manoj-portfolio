import { useState } from 'react'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (event) => { event.preventDefault(); setSent(true); event.currentTarget.reset() }
  return <section className="section-shell contact-section" id="contact"><div className="section-label reveal">05 <span>Get in touch</span></div><div className="contact-grid"><div className="contact-copy reveal"><h2>Let's make<br /><em>something useful.</em></h2><p>Have an idea, an opportunity, or a good question? My inbox is open.</p><div className="contact-details"><a href="mailto:mmanojmn71@gmail.com"><FiMail /><span>Email<small>mmanojmn71@gmail.com</small></span></a><a href="tel:+919019068160"><FiPhone /><span>Phone<small>+91 9019068160</small></span></a><a href="https://www.linkedin.com/in/manoj-m-n-manoj-m-n-a01622384" target="_blank" rel="noreferrer"><FiLinkedin /><span>LinkedIn<small>manoj-m-n-manoj-m-n-a01622384</small></span></a><a href="https://github.com/mmanojmn71" target="_blank" rel="noreferrer"><FiGithub /><span>GitHub<small>github.com/mmanojmn71</small></span></a></div></div><form className="contact-form reveal delay-1" onSubmit={submit}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" rows="4" placeholder="Tell me a little about it..." /></label><button className="button button-primary" type="submit">{sent ? 'Message ready to send' : 'Send message'} <FiArrowUpRight /></button></form></div></section>
}

export default Contact
