import React, { useState, useEffect } from 'react'

const InteractiveContainer = ({ children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`interactive-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('experiences')
  const [animate, setAnimate] = useState(false)

  const tabContent = {
    experiences: [

      { title: 'Web Developer Intern', company: 'OctoVertex', period: 'Dec 2024 - Present', description: 'As a Web Dveloper Intern at OctoVertexDeveloped and launched a responsive WordPress website for a medical clinic (BlossomBloom) based on client-provided designs, under direct mentorship from the company founder., I have worked on several WordPress projects, contributing to the development and management of websites. I took full responsibility for one WordPress project, working on it from start to finish, ensuring all aspects were handled with care and attention to detail. In addition, I collaborated with a fellow intern on another project, which is still under construction, and assisted my senior team members on two other ongoing projects. This role has allowed me to gain hands-on experience in WordPress development, including design, plugin integration, and website maintenance.' },
      

      { title: 'WordPress Developer Intern', company: 'Sheefra', period: 'May 2024 - Present', description: 'As a WordPress Intern at Sheefra, I have worked on several WordPress projects, contributing to the development and management of websites. I took full responsibility for one WordPress project, working on it from start to finish, ensuring all aspects were handled with care and attention to detail. In addition, I collaborated with a fellow intern on another project, which is still under construction, and assisted my senior team members on two other ongoing projects. This role has allowed me to gain hands-on experience in WordPress development, including design, plugin integration, and website maintenance.' },
      { title: 'Frontend Developer', company: 'ThePixelCompany', period: 'Aug 2024 - Oct 2024', description: 'As a Junior Front-End Developer, I was responsible for collaborating with UI/UX designers to turn design concepts into functional, user-friendly interfaces. I developed responsive web applications using React and JavaScript, ensuring that applications were interactive and optimized for various devices. My role also involved integrating front-end components with backend systems to ensure smooth data flow and application functionality.' },
      
      { title: 'Laravel Developer Intern', company: 'Sheefra', period: 'Jul 2024 - Aug 2024', description: 'As a Laravel developer intern, I primarily assisted senior developers with various tasks. I was responsible for supporting them in less complex coding, testing, and debugging activities. This included helping with the design and development phases while ensuring that the code adhered to best practices and was of high quality. Additionally, I assisted in troubleshooting issues, conducting code reviews, and ensuring the project was progressing smoothly. I was also involved in ensuring that tasks were completed on time and collaborating with other team members to achieve project goals, all while learning from the more experienced developers around me.' },
      { title: 'React Developer Intern', company: 'Webisitc.in', period: 'Jul 2024 - Aug 2024', description: 'As a React Intern at Webistic.in, I was responsible for developing and maintaining interactive frontend clones of various websites based on specific client requirements. This involved collaborating closely with clients to understand their vision, ensuring that the final product aligned with their needs and expectations. I focused on creating responsive designs that delivered an optimal user experience across different devices and screen sizes. Additionally, I managed multiple projects at once, effectively prioritizing tasks and meeting deadlines to ensure high-quality and timely delivery of results. This included incorporating user feedback to ensure a seamless, engaging experience for end users.' },
    ],
    education: [
      { title: 'Bachelor of Science in Computer Engineering', institution: 'Universitat de Lleida - One Year ERASMUS+ Exchange Student', year: 'Aug 2024 - Aug 2025' },
      { title: 'Bachelor of Science in Computer Science', institution: 'Modern University for Business and Science', year: '2022-2025' },
    ],
    certifications: [
      { title: 'CS50X', issuer: 'Harvard University', year: 'Dec 2023' },
    ],
  }

  useEffect(() => {
    setAnimate(true)
  }, [activeTab])



  return (
    <div className="about-section">
      <div className="content">
        <h1 className="title">My Journey</h1>
        <div className="tab-container">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tabContent[activeTab].map((item, index) => (
            <InteractiveContainer key={index} onClick={() => handleContainerClick(item)}>
              <div className={`timeline-item ${animate ? 'fade-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="timeline-content">
                  <h2 className="item-title">{item.title}</h2>
                  <p className="item-subtitle">
                    {activeTab === 'experiences' && `${item.company} | ${item.period}`}
                    {activeTab === 'education' && `${item.institution} | ${item.year}`}
                    {activeTab === 'certifications' && `${item.issuer} | ${item.year}`}
                  </p>
                  {activeTab === 'experiences' && <p className="item-description">{item.description}</p>}
                </div>
              </div>
            </InteractiveContainer>
          ))}
        </div>
      </div>
      <style jsx>{`
        .about-section {
          min-height: 100vh;
          font-family: 'Jaldi', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .content {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          position: relative;
          z-index: 1;
        }

        .title {
          font-size: 3rem;
          margin-bottom: 2rem;
          text-align: center;
          color: #ccd6f6;
        }

        .tab-container {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .tab-button {
          background-color: transparent;
          border: none;
          color: #8892b0;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          margin: 0 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-button.active {
          color: #64ffda;
          border-bottom: 2px solid #64ffda;
        }

        .tab-content {
          width: 100%;
          max-width: 800px;
        }

        .interactive-container {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .interactive-container.hovered {
          transform: translateY(-5px);
          box-shadow: 0 4px 10px rgba(100, 255, 218, 0.2);
        }

        .timeline-item {
          opacity: 0;
          transform: translateY(20px);
          margin-bottom: 1.5rem;
        }

        .fade-in {
          animation: fadeInUp 0.5s forwards;
        }

        .timeline-content {
          background-color: rgba(100, 255, 218, 0.1);
          padding: 1.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .item-title {
          font-size: 1.4rem;
          color: #64ffda;
          margin-bottom: 0.5rem;
        }

        .item-subtitle {
          font-size: 1rem;
          color: #ccd6f6;
          margin-bottom: 1rem;
        }

        .item-description {
          font-size: 0.9rem;
          line-height: 1.6;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2.5rem;
          }

          .tab-button {
            font-size: 0.9rem;
            padding: 0.4rem 0.8rem;
          }

          .item-title {
            font-size: 1.2rem;
          }

          .item-subtitle {
            font-size: 0.9rem;
          }

          .item-description {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  )
}