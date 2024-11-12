import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="content-wrapper">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-info">
          <div className="contact-item">
            <Mail className="contact-icon" />
            <p>haniacs05@gmail.com</p>
          </div>
          <div className="contact-item">
            <Phone className="contact-icon" />
            <p>+34666735487 | +96170652337</p>
          </div>
          <div className="contact-item">
            <MapPin className="contact-icon" />
            <p>Lleida-Spain</p>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      <style jsx>{`
        .contact-section {
          min-height: 100vh;
          background-color: #0a192f;
          color: #8892b0;
          font-family: 'Roboto', sans-serif;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 50px 0;
        }

        .contact-section::before {
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
          max-width: 800px;
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
        }

        .contact-info {
          display: flex;
          justify-content: space-around;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .contact-icon {
          color: #64ffda;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 0.75rem;
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid #64ffda;
          border-radius: 5px;
          color: #ccd6f6;
        }

        .contact-form textarea {
          min-height: 150px;
          resize: vertical;
        }

        .submit-button {
          padding: 0.5rem 1rem;
          background-color: #64ffda;
          color: #64ffda;
          border: 1px solid #64ffda;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          font-size: 16px;
          text-align: center;
          width: max-content;
          text-decoration: none;
          background-color: transparent;
          transition: background-color 0.3s ease;
        }
  
        @media (max-width: 768px) {
          .contact-section {
            padding: 4rem 1rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .contact-info {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  )
}