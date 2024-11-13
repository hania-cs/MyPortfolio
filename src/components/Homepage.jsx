import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../index.css'
export default function HomePage() {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const titles = ['Frontend Developer', 'WordPress Developer', 'UI/UX Designer']

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType()
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, loopNum])

  const handleType = () => {
    const i = loopNum % titles.length
    const fullText = titles[i]

    setDisplayedText(
      isDeleting
        ? fullText.substring(0, displayedText.length - 1)
        : fullText.substring(0, displayedText.length + 1)
    )

    setTypingSpeed(isDeleting ? 30 : 150)

    if (!isDeleting && displayedText === fullText) {
      setTimeout(() => setIsDeleting(true), 500)
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
    }
  }

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div></div>
        <div style={styles.navLinks}>
        <Link to="/about" style={styles.navLink}>About</Link>
        <Link to="/projects" style={styles.navLink}>Projects</Link>
        <Link to="/contact" style={styles.navLink}>Contact Me</Link>

        </div>
      </nav>
      <main style={styles.main}>
        <h1 style={styles.title}>Hi, I'm Hania</h1>
        <h2 style={styles.subtitle}>
          <span>{displayedText}</span>
          <span style={styles.cursor}></span>
        </h2>
        <p style={styles.description}>
          Frontend developer fueled by coffee and code, crafting clean interfaces as smooth as a perfect espresso shot.
        </p>
        <Link to="/projects" style={styles.button}>Explore My Work</Link>
      </main>
      <div style={styles.backgroundAnimation}></div>
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#0a192f',
    color: '#8892b0',
    overflow: 'hidden',
    position: 'relative',
    fontFamily: "'Jaldi', sans-serif",
    
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 50px',
    position: 'relative',
    zIndex: 1,
  },

  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: '#64ffda',
    textDecoration: 'none',
    fontSize: '18px',
   
  },
  main: {
    height: 'calc(100vh - 80px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 50px',
    position: 'relative',
    zIndex: 1,
  },
  title: {
    fontSize: '72px',
    color: '#ccd6f6',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '48px',
    color: '#64ffda',
    marginBottom: '20px',
    height: '58px', 
    display: 'flex',
    alignItems: 'center',

  },
  cursor: {
    display: 'inline-block',
    width: '3px',
    height: '58px',
    backgroundColor: '#64ffda',
    marginLeft: '5px',
    animation: 'blink 0.7s infinite',
  },
  description: {
    fontSize: '18px',
    maxWidth: '600px',
    lineHeight: '1.5',
    marginBottom: '30px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#64ffda',
    border: '2px solid #64ffda',
    borderRadius: '10px',
    cursor: 'pointer',
    width: 'fit-content',  
    position: 'relative',
    overflow: 'hidden',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
  },
  backgroundAnimation: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    right: '-50%',
    bottom: '-50%',
    width: '200%',
    height: '200%',
    background: 'transparent url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0',
    backgroundRepeat: 'repeat',
    animation: 'bg-animation .2s infinite',
    opacity: '.9',
    visibility: 'visible',
    zIndex: 0,
  },
  '@keyframes blink': {
    '0%': { opacity: 0 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
  '@keyframes bg-animation': {
    '0%': { transform: 'translate(0,0)' },
    '10%': { transform: 'translate(-5%,-5%)' },
    '20%': { transform: 'translate(-10%,5%)' },
    '30%': { transform: 'translate(5%,-10%)' },
    '40%': { transform: 'translate(-5%,15%)' },
    '50%': { transform: 'translate(-10%,5%)' },
    '60%': { transform: 'translate(15%,0)' },
    '70%': { transform: 'translate(0,10%)' },
    '80%': { transform: 'translate(-15%,0)' },
    '90%': { transform: 'translate(10%,5%)' },
    '100%': { transform: 'translate(5%,0)' },
  },
  '@keyframes buttonPulse': {
    '0%': { boxShadow: '0 0 0 0 rgba(100, 255, 218, 0.4)' },
    '70%': { boxShadow: '0 0 0 10px rgba(100, 255, 218, 0)' },
    '100%': { boxShadow: '0 0 0 0 rgba(100, 255, 218, 0)' },
  },
  '@keyframes ripple': {
    to: {
      width: '300px',
      height: '300px',
      opacity: '0',
    },
  },
}