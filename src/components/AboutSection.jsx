import React, { useState, useEffect } from 'react'
import '../index.css'

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('experiences')
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [activeTab])

  const tabContent = {
    experiences: [
      { title: 'Frontend Developer', company: 'ThePixelCompany', period: 'Aug 2024 - Oct 2024', description: 'As a Junior Front-End Developer, I was responsible for collaborating with UI/UX designers to turn design concepts into functional, user-friendly interfaces. I developed responsive web applications using React and JavaScript, ensuring that applications were interactive and optimized for various devices. My role also involved integrating front-end components with backend systems to ensure smooth data flow and application functionality.' },
      { title: 'WordPress Developer Intern', company: 'Sheefra', period: 'May 2024 - Present', description: 'As a WordPress Intern at Sheefra, I have worked on several WordPress projects, contributing to the development and management of websites. I took full responsibility for one WordPress project, working on it from start to finish, ensuring all aspects were handled with care and attention to detail. In addition, I collaborated with a fellow intern on another project, which is still under construction, and assisted my senior team members on two other ongoing projects. This role has allowed me to gain hands-on experience in WordPress development, including design, plugin integration, and website maintenance.' },
      { title: 'Laravel Developer Intern', company: 'Sheefra', period: 'Jul 2024 - Aug 2024', description: 'As a Laravel developer intern, I primarily assisted senior developers with various tasks. I was responsible for supporting them in less complex coding, testing, and debugging activities. This included helping with the design and development phases while ensuring that the code adhered to best practices and was of high quality. Additionally, I assisted in troubleshooting issues, conducting code reviews, and ensuring the project was progressing smoothly. I was also involved in ensuring that tasks were completed on time and collaborating with other team members to achieve project goals, all while learning from the more experienced developers around me.' },
      { title: 'React Developer Intern', company: 'Webisitc.in', period: 'Jul 2024 - Aug 2024', description: 'As a React Intern at Webistic.in, I was responsible for developing and maintaining interactive frontend clones of various websites based on specific client requirements. This involved collaborating closely with clients to understand their vision, ensuring that the final product aligned with their needs and expectations. I focused on creating responsive designs that delivered an optimal user experience across different devices and screen sizes. Additionally, I managed multiple projects at once, effectively prioritizing tasks and meeting deadlines to ensure high-quality and timely delivery of results. This included incorporating user feedback to ensure a seamless, engaging experience for end users.' },
    ],
    education: [
      { title: 'Bachelor of Science in Computer Engineering', institution: 'Universitat de Lleida - One Year ERASMUS+ Exchange Student', year: 'Aug 2024 - Aug 2025' },
      { title: 'Bachelor of Science in Computer Science', institution: 'Modern University for Business and Sceince', year: '2022-2025' },
    ],
    certifications: [
      { title: 'CS50X', issuer: 'Harvard University', year: 'Dec 2023' },
    ],
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.title}>My Journey</h2>
        <div style={styles.tabContainer}>
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              style={{
                ...styles.tabButton,
                ...(activeTab === tab ? styles.activeTab : {}),
              }}
              onClick={() => {
                setActiveTab(tab)
                setAnimate(false)
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div style={styles.timeline}>
          {activeTab === 'experiences' ? (
            <div style={styles.experienceGrid}>
              {tabContent[activeTab].map((item, index) => (
                <div key={index} style={{
                  ...styles.timelineItem,
                  ...styles.experienceItem,
                  animationDelay: `${index * 0.1}s`,
                  ...(animate ? styles.fadeIn : {}),
                }}>
                  <div style={styles.timelineContent}>
                    <h3 style={styles.itemTitle}>{item.title}</h3>
                    <p style={styles.itemSubtitle}>{item.company} | {item.period}</p>
                    <p style={styles.itemDescription}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            tabContent[activeTab].map((item, index) => (
              <div key={index} style={{
                ...styles.timelineItem,
                animationDelay: `${index * 0.1}s`,
                ...(animate ? styles.fadeIn : {}),
              }}>
                <div style={styles.timelineContent}>
                  <h3 style={styles.itemTitle}>{item.title}</h3>
                  <p style={styles.itemSubtitle}>
                    {activeTab === 'education' && `${item.institution} | ${item.year}`}
                    {activeTab === 'certifications' && `${item.issuer} | ${item.year}`}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div style={styles.backgroundAnimation}></div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a192f',
    color: '#8892b0',
    
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 0',
    fontFamily: "'Jaldi', sans-serif",
  },
  content: {
    width: '100%',
    maxWidth: '1000px',
    padding: '50px',
    position: 'relative',
    zIndex: 1,
  },
  title: {
    fontSize: '3rem',
    marginBottom: '3rem',
    textAlign: 'center',
    color: '#ccd6f6',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    fontFamily: "'Roboto', sans-serif",
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    animation: 'fadeInUp 0.6s ease-out',
  },
  tabButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#8892b0',
    fontSize: '1rem',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderBottom: '2px solid transparent',
  },
  activeTab: {
    color: '#64ffda',
    borderBottom: '2px solid #64ffda',
  },
  timeline: {
    position: 'relative',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  experienceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  timelineItem: {
    padding: '10px 20px',
    position: 'relative',
    background: 'inherit',
    width: '100%',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
  },
  experienceItem: {
    padding: '10px 20px',
  },
  fadeIn: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  timelineContent: {
    padding: '20px',
    background: 'rgba(100, 255, 218, 0.1)',
    position: 'relative',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
  },
  itemTitle: {
    fontSize: '1.2rem',
    color: '#ccd6f6',
    marginBottom: '5px',
  },
  itemSubtitle: {
    fontSize: '0.9rem',
    color: '#64ffda',
    marginBottom: '10px',
  },
  itemDescription: {
    fontSize: '1rem',
    lineHeight: '1.5',
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
  '@media (max-width: 768px)': {
    experienceGrid: {
      gridTemplateColumns: '1fr',
    },
    content: {
      padding: '30px',
    },
    title: {
      fontSize: '2rem',
    },
    tabButton: {
      fontSize: '0.9rem',
      padding: '8px 15px',
    },
  },
}