import { FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi'

function Footer() {
  return <footer className="footer section-shell"><div><a className="brand" href="#home"><span className="brand-mark">M</span><span>Manoj M N</span></a><p>B.Tech Student - AI &amp; Data Science</p></div><div className="footer-right"><div className="social-links"><a href="https://github.com/mmanojmn71" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a><a href="https://www.linkedin.com/in/manoj-m-n-manoj-m-n-a01622384" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a><a href="#home" aria-label="Back to top"><FiArrowUpRight /></a></div><small>© 2025 Manoj M N. Built with intent.</small></div></footer>
}

export default Footer
