import React from 'react'

const Skill = ({ name, level }) => {
  return (
    <div style={{
      marginBottom: '1.5rem',
      width: '100%',
      maxWidth: '600px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.5rem',
      }}>
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div style={{
        width: '100%',
        height: '8px',
        backgroundColor: 'rgba(100, 255, 218, 0.1)',
        borderRadius: '4px',
        overflow: 'hidden',
      }}>
        <div
          style={{
            width: `${level}%`,
            height: '100%',
            backgroundColor: '#64ffda',
            transition: 'width 1s ease-in-out',
          }}
        />
      </div>
    </div>
  )
}

const SkillsSection = ({ theme }) => {
  const themeColors = {
    dark: {
      background: '#0a192f',
      text: '#ccd6f6',
      accent: '#64ffda',
    },
    light: {
      background: '#f0f0f0',
      text: '#333333',
      accent: '#0a192f',
    }
  }

  const currentTheme = themeColors[theme] || themeColors.dark

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'CSS', level: 80 },
    { name: 'HTML', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'Three.js', level: 70 },
  ]

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      color: currentTheme.text,
      transition: 'color 0.3s ease',
    }}>
      <h2 style={{
        fontSize: '3rem',
        marginBottom: '2rem',
        color: currentTheme.accent,
      }}>
        My Skills
      </h2>
      <div style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  )
}

export default SkillsSection