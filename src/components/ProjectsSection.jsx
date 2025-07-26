import React, { useState } from 'react'
import { GithubIcon, ExternalLink } from 'lucide-react'

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <img src={project.image} alt={project.title} className="project-image" />
          <h3 className="project-title">{project.title}</h3>
        </div>
        <div className="card-back">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <GithubIcon size={24} />
              <span>GitHub</span>
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
              <ExternalLink size={24} />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const projects = [
     {
      title: "Manuela Frierre Portfolio",
      description: "A Next.js & TypeScript-based PWA combining a journal, task manager, AI coach, and mood tracker to boost productivity and wellbeing — currently under development for a school project, with UI fully designed by me in Figma.",
      image: "./assets/manu.png",
      github: "https://github.com/hania-cs/ManuelaPortfolio",
      demo: "https://manuelaportfolio.vercel.app/"
    },
    {
      title: "Daisy",
      description: "A Next.js & TypeScript-based PWA combining a journal, task manager, AI coach, and mood tracker to boost productivity and wellbeing — currently under development for a school project, with UI fully designed by me in Figma.",
      image: "./assets/image.png",
      github: "https://github.com/jordigarciaventura/wellsphere",
      demo: "https://wellsphere.vercel.app/en"
    },

    {
      title: "JingleJings",
      description: "A one page website built for a small business in Brazil, built with React",
      image: "./assets/jingle.png",
      github: "https://github.com/hania-cs/JingleGings",
      demo: "https://jingle-gings.vercel.app/"
    },
    {
      title: "BlossomBloomClinic",
      description: "Implemented a client-provided design into a fully responsive WordPress website with mobile support.",
      image: "./assets/bb.png",
      demo: "https://bnbclinics.com/"
    },
    {
      title: "CafeAmor",
      description: "A simple coffee shop website built with React",
      image: "./assets/cafeamor.png",
      github: "https://github.com/hania-cs/CafeAmor",
      demo: "https://cafe-amor.vercel.app/"
    },
    {
      title: "Locavo",
      description: "An ongoing school project built with React",
      image: "./assets/locavo.png",
      github: "https://github.com/hania-cs/Locavo-Frontend",
      demo: "https://locavo-frontend.vercel.app/"
    },
    {
      title: "PicQuest",
      description: "A Pinterest clone",
      image: "./assets/quest.png",
      github: "https://github.com/hania-cs/PicQuest",
      demo: "https://hania-cs.github.io/PicQuest/"
    },
    {
      title: "HizzekMizzek",
      description: "WordPress Ecommerce Website with DHL integration",
      image: "./assets/hizzekmizzek.png",
      demo: "https://hezzikmezzik.com/"
    },
    {
      title: "Midnight Fragrance",
      description: "WordPress Ecommerce Website",
      image: "./assets/midnight.png",
      demo: "https://fragrance.sheefra.company/"
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
          margin-bottom: 2rem;
          color: #ccd6f6;
          text-align: center;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
        }

        .project-card {
          background-color: rgba(100, 255, 218, 0.1);
          border-radius: 10px;
          overflow: hidden;
          perspective: 1000px;
          height: 300px;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
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
          padding: 1rem;
        }

        .card-back {
          background-color: rgba(100, 255, 218, 0.2);
          transform: rotateY(180deg);
        }

        .project-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .project-title {
          font-size: 1.5rem;
          margin: 1rem 0;
          color: #64ffda;
        }

        .project-description {
          font-size: 1rem;
          color: #8892b0;
          margin-bottom: 1rem;
        }

        .project-links {
          display: flex;
          justify-content: space-around;
          width: 100%;
        }

        .project-link {
          display: flex;
          align-items: center;
          color: #64ffda;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .project-link:hover {
          color: #ccd6f6;
        }

        .project-link span {
          margin-left: 0.5rem;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  )
}