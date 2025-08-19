"use client"

import { useState, useEffect, useRef } from "react"

const MagneticCard = ({ children, index }) => {
  const cardRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) * 0.1
    const deltaY = (e.clientY - centerY) * 0.1
    setMousePosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <div
      ref={cardRef}
      className={`magnetic-card ${isHovered ? "hovered" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(${isHovered ? 1.05 : 1})`,
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {children}
    </div>
  )
}

export default function AboutSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [animate, setAnimate] = useState(false)

  const allItems = [
     {
      type: "experience",
      title: "WordPress Web Developer",
      company: "Freelance – Reporting to Project Manager & SEO Specialist",
      period: "Apr 2025 - Present",
      description:
        "I develop and customize WordPress websites and eCommerce stores for various companies. I translate project requirements from the project manager into responsive, optimized sites and implement themes, plugins, and custom features to meet client branding and functionality needs. Additionally, I manage technical development, deployment, and performance optimization to ensure high-quality, efficient websites.",
    },
    {
      type: "experience",
      title: "Web Developer Intern",
      company: "OctoVertex",
      period: "Dec 2024 - May 2025",
      description:
        "I engaged with clients to gather requirements and deliver tailored technical solutions, ensuring their needs were fully understood and met. Collaborating closely with UI/UX designers, I transformed concepts into intuitive and visually appealing interfaces that enhanced user experience. Additionally, I built responsive web applications using React, WordPress, and PHP, combining functionality with modern design to create seamless digital solutions.",
    },
    {
      type: "experience",
      title: "WordPress Developer Intern",
      company: "Sheefra",
      period: "May 2024 - May 2025",
      description:
        "I developed and customized three WordPress websites for diverse clients, including two eCommerce stores and one business site. I built an eCommerce perfume website with a strong focus on product display and smooth shopping functionality. For HizzekMizzek, a local Lebanese business, I created a user-friendly online store that reflected their brand identity. I also collaborated with senior developers to diagnose and fix frontend issues on a third WordPress website, enhancing both performance and usability. Across all projects, I optimized website speed and maintained visual consistency to deliver an improved user experience.",
    },
    {
      type: "experience",
      title: "Frontend Developer",
      company: "ThePixelCompany",
      period: "Aug 2024 - Oct 2024",
      description:
        "I collaborated with clients under NDA to gather requirements, clarify their vision, and deliver tailored technical solutions. I partnered closely with UI/UX designers to transform protected design concepts into functional, polished interfaces. Additionally, I built responsive web applications using React and occasionally vanilla JavaScript for advanced interactivity, ensuring seamless compatibility across devices.",
    },
    {
      type: "experience",
      title: "Laravel Developer Intern",
      company: "InfinityLab",
      period: "Jul 2024 - Aug 2024",
      description:
        "I assisted senior developers with coding, testing, and debugging while learning best practices and code review processes. I collaborated with senior developers to build a comprehensive school management system for private schools in Lebanon, focusing on backend development using Laravel and seamless integration of an AI system to assist students. I implemented features such as a chatbot, AI-powered quiz generator, AI grading, and performance review, and integrated the Laravel backend with a Flutter-based frontend to ensure a smooth, user-friendly experience.",
    },
    {
      type: "experience",
      title: "React Developer Intern",
      company: "YAFA Cloud Services LLC",
      period: "Apr 2024 - Oct 2024",
      description:
        "I utilized React.js and TypeScript to develop and maintain interactive user interfaces for the company's website. I collaborated with design and backend teams to ensure seamless integration of frontend components and implemented responsive design principles to enhance user experience across various devices and screen sizes. I conducted code reviews and participated in Agile development processes to deliver high-quality software solutions. I worked closely with senior developers to troubleshoot and debug frontend issues, ensuring optimal performance and functionality. Additionally, I worked on a blogging system for the company's website, focusing on the frontend using React, TypeScript, and Material-UI.",
    },
    {
      type: "education",
      title: "Bachelor of Science in Computer Engineering",
      company: "Universitat de Lleida",
      period: "Aug 2024 - Aug 2025",
      description: "ERASMUS+ Exchange Student program focusing on advanced computer engineering concepts.",
    },
    {
      type: "education",
      title: "Bachelor of Science in Computer Science",
      company: "Modern University for Business and Science",
      period: "2022-2025",
      description: "Comprehensive computer science program with focus on modern development practices.",
    },
    {
      type: "certification",
      title: "CS50X",
      company: "Harvard University",
      period: "Dec 2023",
      description:
        "Completed Harvard's introduction to computer science covering algorithms, data structures, and programming.",
    },
  ]

  const filteredItems = activeFilter === "all" ? allItems : allItems.filter((item) => item.type === activeFilter)

  useEffect(() => {
    setAnimate(true)
  }, [activeFilter])

  return (
    <div className="about-section">
      <div className="content">
        <h1 className="title">My Journey</h1>

        <div className="filter-container">
          {["all", "experience", "education", "certification"].map((filter) => (
            <button
              key={filter}
              className={`filter-button ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
              {filter !== "all" && "s"}
            </button>
          ))}
        </div>

        <div className="cards-grid">
          {filteredItems.map((item, index) => (
            <MagneticCard key={`${item.type}-${index}`} index={index}>
              <div className={`card ${animate ? "slide-in" : ""}`}>
                <div className="card-header">
                  <span className={`card-type ${item.type}`}>{item.type}</span>
                  <h3 className="card-title">{item.title}</h3>
                </div>
                <div className="card-body">
                  <p className="card-company">{item.company}</p>
                  <p className="card-period">{item.period}</p>
                  <p className="card-description">{item.description}</p>
                </div>
              </div>
            </MagneticCard>
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
          text-align: center;
          color: #ccd6f6;
          margin-bottom: 3rem;
          background: linear-gradient(45deg, #64ffda, #ccd6f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .filter-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-button {
          background: transparent;
          border: 2px solid #8892b0;
          color: #8892b0;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .filter-button:hover {
          border-color: #64ffda;
          color: #64ffda;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(100, 255, 218, 0.2);
        }

        .filter-button.active {
          background: #64ffda;
          color: #0a192f;
          border-color: #64ffda;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(100, 255, 218, 0.3);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding: 1rem;
        }

        .magnetic-card {
          transition: transform 0.2s ease-out;
          cursor: pointer;
        }

        .card {
          background: rgba(100, 255, 218, 0.05);
          border: 1px solid rgba(100, 255, 218, 0.2);
          border-radius: 15px;
          padding: 1.5rem;
          height: 100%;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          opacity: 0;
          transform: translateY(30px);
        }

        .slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }

        .magnetic-card.hovered .card {
          background: rgba(100, 255, 218, 0.1);
          border-color: #64ffda;
          box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
        }

        .card-header {
          margin-bottom: 1rem;
        }

        .card-type {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .card-type.experience {
          background: rgba(100, 255, 218, 0.2);
          color: #64ffda;
        }

        .card-type.education {
          background: rgba(255, 206, 84, 0.2);
          color: #ffce54;
        }

        .card-type.certification {
          background: rgba(255, 107, 107, 0.2);
          color: #ff6b6b;
        }

        .card-title {
          font-size: 1.25rem;
          color: #ccd6f6;
          margin: 0.5rem 0;
          line-height: 1.3;
        }

        .card-company {
          color: #64ffda;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .card-period {
          color: #8892b0;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .card-description {
          color: #8892b0;
          line-height: 1.6;
          font-size: 0.9rem;
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .title {
            font-size: 2.5rem;
          }
          
          .filter-container {
            gap: 0.5rem;
          }
          
          .filter-button {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 1200px) and (min-width: 769px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  )
}
