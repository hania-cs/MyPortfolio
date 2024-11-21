import React, { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Sun, Moon } from 'lucide-react'
import Home from './components/Homepage'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('dark')
  const [currentSection, setCurrentSection] = useState('home')
  const mousePosition = useRef([0, 0])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  const navigateTo = (section) => {
    setCurrentSection(section)
    const element = document.getElementById(section)
    element.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePosition.current = [
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      ]
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const themeColors = {
    dark: {
      background: '#0a192f',
      text: '#ccd6f6',
      accent: '#64ffda',
    },
    light: {
      background: '#f0f4f8',
      text: '#333333',
      accent: '#0a192f',
    }
  }

  const currentTheme = themeColors[theme]

  return (
    <div className={`app ${theme}`} style={{ 
      backgroundColor: currentTheme.background, 
      color: currentTheme.text,
      minHeight: '100vh', 
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    }}>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <ambientLight intensity={0.1} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: currentTheme.text,
          fontSize: '24px',
        }}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
      <nav style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 1000,
        display: 'flex',
        gap: '20px'
      }}>
        <button onClick={() => navigateTo('home')} style={{ color: currentTheme.text, background: 'none', border: 'none', cursor: 'pointer' }}>Home</button>
        <button onClick={() => navigateTo('skills')} style={{ color: currentTheme.text, background: 'none', border: 'none', cursor: 'pointer' }}>Skills</button>
        <button onClick={() => navigateTo('about')} style={{ color: currentTheme.text, background: 'none', border: 'none', cursor: 'pointer' }}>About</button>
        <button onClick={() => navigateTo('projects')} style={{ color: currentTheme.text, background: 'none', border: 'none', cursor: 'pointer' }}>Projects</button>
      </nav>
      <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
        <div id="home"><Home theme={theme} /></div>
        <div id="skills"><SkillsSection theme={theme} /></div>
        <div id="about"><AboutSection theme={theme} /></div>
        <div id="projects"><ProjectsSection theme={theme} /></div>
      </div>
      
      <Footer theme={theme} />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Jaldi', sans-serif;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }

        .app {
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        a {
          transition: color 0.3s ease;
        }

        a:hover {
          color: ${currentTheme.accent};
        }
      `}</style>
    </div>
  )
}

export default App