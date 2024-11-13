import { Github, ExternalLink } from 'lucide-react'
import locavoImage from '../assets/locavo.png'
import hizzekImage from '../assets/hizzekmizzek.png'
import midnightImage from '../assets/midnight.png'
import questImage from '../assets/quest.png'
import cafeImage from '../assets/cafeamor.png'
import '../index.css'

export default function ProjectsSection() {
  const projects = [
    { 
      id: 1, 
      title: 'CafeAmor', 
      image: cafeImage, 
      demoUrl: 'https://cafe-amor.vercel.app/',
      githubUrl: 'https://github.com/hania-cs/CafeAmor'
    },
    { 
      id: 2, 
      title: 'HezzikMezzik', 
      image: hizzekImage,
      demoUrl: 'https://hezzikmezzik.com/',
    },
    { 
      id: 3, 
      title: 'Midnight Fragrance', 
      image: midnightImage,
      demoUrl: 'https://fragrance.sheefra.company/',
    },
    { 
      id: 4, 
      title: 'PicQuest', 
      image: questImage,
      demoUrl: 'https://hania-cs.github.io/PicQuest/',
      githubUrl: 'https://github.com/hania-cs/PicQuest'
    },
    { 
      id: 5, 
      title: 'Locavo', 
      image: locavoImage,
      demoUrl: 'https://hania-cs.github.io/Locavo-Frontend/',
      githubUrl: 'https://github.com/hania-cs/Locavo-Frontend'
    },
  ]

  return (
    <section className="projects-section">
      <div className="content-wrapper">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-buttons">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-button demo-button">
                    <ExternalLink size={18} />
                    View Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-button github-button">
                    <Github size={18} />
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="https://github.com/hania-cs" target="_blank" rel="noopener noreferrer" className="view-more-link">
          View My GitHub
        </a>
      </div>

      <style jsx>{`
        .projects-section {
          min-height: 100vh;
          background-color: #0a192f;
          color: #8892b0;
          font-family: 'Jaldi', sans-serif;

          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 50px 0;
        }

        .projects-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background: transparent url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0;
          opacity: .9;
          visibility: visible;
          z-index: 0;
        }

        .content-wrapper {
          width: 100%;
          max-width: 1200px;
          padding: 50px;
          position: relative;
          z-index: 1;
        }

        .section-title {
          font-size: 3rem;
          margin-bottom: 3rem;
          text-align: center;
          color: #ccd6f6;
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          font-family: 'Roboto', sans-serif;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .project-card {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .project-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: filter 0.3s ease;
        }

        .project-card:hover .project-image {
          filter: blur(3px) brightness(0.7);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-title {
          color: #ffffff;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .project-buttons {
          display: flex;
          gap: 1rem;
        }

        .project-button {
          padding: 0.5rem 1rem;
          border: 1px solid #64ffda;
          border-radius: 5px;
          font-size: 0.9rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .demo-button {
          background-color: transparent;
          color: #ffffff;
        }

        .github-button {
          background-color: transparent;
          color: #ffffff;
        }

        .project-button:hover {
          transform: scale(1.05);
        }

        .view-more-link {
          display: inline-block;
          text-align: center;
          color: #64ffda;
          font-size: 16px;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 10px;
          border: 1px solid #64ffda;
          transition: background-color 0.3s ease;
          width: max-content;
          margin: 0 auto;
        }

        .view-more-link:hover {
          background: rgba(100, 255, 218, 0.2);
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 4rem 1rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }
      `}</style>
    </section>
  )
}