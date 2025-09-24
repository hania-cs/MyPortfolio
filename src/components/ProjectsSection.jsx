"use client"

import { useState } from "react"
import { GithubIcon, ExternalLink } from "lucide-react"

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="project-card" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
          <h3 className="project-title">{project.title}</h3>
        </div>
        <div className="card-back">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <GithubIcon size={20} />
                <span>GitHub</span>
              </a>
            )}
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
              <ExternalLink size={20} />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .project-card {
          background-color: rgba(100, 255, 218, 0.1);
          border-radius: 12px;
          overflow: hidden;
          perspective: 1000px;
          height: 300px;
          border: 1px solid rgba(100, 255, 218, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(100, 255, 218, 0.15);
          border-color: rgba(100, 255, 218, 0.4);
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }

        .card-inner.flipped {
          transform: rotateY(180deg);
        }

        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1.5rem;
        }

        .card-back {
          background: linear-gradient(135deg, rgba(100, 255, 218, 0.15), rgba(100, 255, 218, 0.25));
          transform: rotateY(180deg);
        }

        .project-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 0.5rem;
        }

        .project-title {
          font-size: 1.4rem;
          margin: 0.8rem 0;
          color: #64ffda;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .project-description {
          font-size: 0.95rem;
          color: #8892b0;
          margin-bottom: 1.5rem;
          line-height: 1.5;
          text-align: center;
        }

        .project-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          width: 100%;
        }

        .project-link {
          display: flex;
          align-items: center;
          color: #64ffda;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          background: rgba(100, 255, 218, 0.1);
        }

        .project-link:hover {
          color: #ccd6f6;
          background: rgba(100, 255, 218, 0.2);
          transform: translateY(-2px);
        }

        .project-link span {
          margin-left: 0.5rem;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  )
}

export default function ProjectsSection() {
  const projects = [
     {
      title: "Yanta Municipality's Website",
      description:
        "I helped develop the frontend of Yanta Municipality’s website, creating a responsive and user-friendly interface that allows residents and visitors to access municipal information, announcements, and services easily.",

      image: "./assets/yanta.png",
      github: "",
      demo: "https://www.yanta-leb.com/en",
    },
     {
      title: "Glitch Portfolio",
      description:
        "Built a glitch-inspired portfolio using React, Vite, and CSS to showcase projects and experience, featuring responsive design and creative visual effects",

      image: "./assets/glitch.png",
      github: "https://github.com/hania-cs/GlitchPortfolio",
      demo: "https://glitch-portfolio-teal.vercel.app/",
    },
    {
      title: "Manuela Freire Portfolio",
      description:
        "Created a responsive React portfolio to showcase a psychology student’s skills, research, and achievements with a clean and user-friendly design.",
      image: "./assets/manu.png",
      github: "https://github.com/hania-cs/ManuelaPortfolio",
      demo: "https://manuelaportfolio.vercel.app/",
    },
    {
      title: "Daisy",
      description:
        "A Next.js & TypeScript-based PWA combining a journal, task manager, AI coach, and mood tracker to boost productivity and wellbeing — currently under development for a school project, with UI fully designed by me in Figma.",
      image: "./assets/image.png",
      github: "https://github.com/jordigarciaventura/wellsphere",
      demo: "https://wellsphere.vercel.app/en",
    },

    {
      title: "JingleJings",
      description: "A one page website built for a small business in Brazil, built with React",
      image: "./assets/jingle.png",
      github: "https://github.com/hania-cs/JingleGings",
      demo: "https://jingle-gings.vercel.app/",
    },
    {
      title: "BlossomBloomClinic",
      description:
        "Implemented a client-provided design into a fully responsive WordPress website with mobile support.",
      image: "./assets/bb.png",
      demo: "https://bnbclinics.com/",
    },
    {
      title: "CafeAmor",
      description: "A simple coffee shop website built with React",
      image: "./assets/cafeamor.png",
      github: "https://github.com/hania-cs/CafeAmor",
      demo: "https://cafe-amor.vercel.app/",
    },
    
    {
      title: "PicQuest",
      description: "A Pinterest clone",
      image: "./assets/quest.png",
      github: "https://github.com/hania-cs/PicQuest",
      demo: "https://hania-cs.github.io/PicQuest/",
    },
    {
      title: "HizzekMizzek",
      description: "WordPress Ecommerce Website with DHL integration",
      image: "./assets/hizzekmizzek.png",
      demo: "https://hezzikmezzik.com/",
    },
    {
      title: "Midnight Fragrance",
      description: "WordPress Ecommerce Website",
      image: "./assets/midnight.png",
      demo: "https://fragrance.sheefra.company/",
    },
  ]

  return (
    <div id="projects-section" className="projects-section">
      <h1 className="section-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <style jsx>{`
        .projects-section {
          min-height: 100vh;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Jaldi', sans-serif;
        }

        .section-title {
          font-size: 3rem;
          margin-bottom: 3rem;
          color: #ccd6f6;
          text-align: center;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          width: 100%;
          max-width: 1200px;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  )
}
