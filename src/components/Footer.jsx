import React from 'react'
import { LinkedinIcon, GithubIcon, MailIcon } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/hania-seif/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={24} />
          </a>
          <a href="mailto:hania.seifeldeen@mubs.edu.lb" aria-label="Email">
            <MailIcon size={24} />
          </a>
          <a href="https://github.com/hania-cs" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={24} />
          </a>
        </div>
        <p className="copyright">© {currentYear} Hania Seifeldeen. All rights reserved.</p>
      </div>
      <style jsx>{`
        .footer {
          padding: 2rem 0;
          position: relative;
          z-index: 10;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }

        .social-links a {
          color: #64ffda;
          transition: color 0.3s ease;
        }

        .social-links a:hover {
          color: #ccd6f6;
        }

        .copyright {
          color: #8892b0;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 1.5rem 0;
          }

          .social-links {
            gap: 1rem;
          }

          .copyright {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer