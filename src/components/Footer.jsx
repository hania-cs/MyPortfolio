import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="content-wrapper">
        <div className="social-links">
          <a href="https://github.com/hania-cs" target="_blank" rel="noopener noreferrer" className="social-link">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/hania-seif/" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={24} />
          </a>
          <a href="mailto:haniacs05@gmail.com" className="social-link">
            <Mail size={24} />
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Hania Seifeldeen. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer-section {
          background-color: #0a192f;
          color: #8892b0;
          font-family: 'Roboto', sans-serif;
          padding: 2rem 0;
          position: relative;
          overflow: hidden;
        }

        .footer-section::before {
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
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 1rem;
        }

        .social-link {
          color: #64ffda;
          transition: color 0.3s ease;
        }

        .social-link:hover {
          color: #45e0bc;
        }

        .copyright {
          text-align: center;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-section {
            padding: 1.5rem 0;
          }

          .social-links {
            gap: 1.5rem;
          }
        }
      `}</style>
    </footer>
  )
}