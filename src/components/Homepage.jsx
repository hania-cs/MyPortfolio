import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  const themeColors = {
    background: '#0a192f',
    text: '#ccd6f6',
    accent: '#64ffda',
    secondaryText: '#8892b0',
  }

  const currentTheme = themeColors

  return (
    <div className="container" style={{ 
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      color: currentTheme.text,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', 
      paddingTop: '80px', 
    }}>
      <div style={{ marginBottom: '4rem', width: '100%', maxWidth: '800px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: currentTheme.text }}>
          Hi, I'm Hania
        </h1>
        <div style={{ 
          fontSize: '2rem',
          marginBottom: '1rem',
          color: currentTheme.accent
        }}>
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              2000,
              'UI/UX Designer',
              2000,
              'Web Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p style={{ 
          fontSize: '1.2rem',
          marginBottom: '2rem',
          color: currentTheme.secondaryText,
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Frontend developer fueled by coffee and code, crafting clean interfaces as smooth as a perfect espresso shot.
        </p>
        <button
  style={{
    backgroundColor: 'transparent',
    border: `2px solid ${currentTheme.accent}`,
    borderRadius: '10px',
    color: currentTheme.accent,
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    marginTop: '2rem',
  }}
  onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' })}
>
  Explore My Work
</button>

      </div>
    </div>
  )
}