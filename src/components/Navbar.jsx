import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Certifications', 'certifications'],
  ['Contact', 'contact'],
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Manoj M N home">
        <span className="brand-mark">M</span>
        <span>Manoj M N</span>
      </a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
        {open ? <FiX /> : <FiMenu />}
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        <a href="#home" onClick={closeMenu}>Home</a>
        {links.map(([label, id]) => <a href={`#${id}`} onClick={closeMenu} key={id}>{label}</a>)}
      </nav>
    </header>
  )
}

export default Navbar
