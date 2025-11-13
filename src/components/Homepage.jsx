"use client"

import { useEffect, useState, useRef, useCallback } from "react"

const Homepage = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [particles, setParticles] = useState([])
  const [showSurprise, setShowSurprise] = useState(false)
  const [explosionParticles, setExplosionParticles] = useState([])
  const containerRef = useRef(null)
  const animationRef = useRef(null)

  const texts = ["Frontend Developer", "WordPress Developer", "UI/UX Designer"]

  const themeColors = {
    background: "#0a192f",
    text: "#ccd6f6",
    accent: "#64ffda",
    secondaryText: "#8892b0",
  }

  const currentTheme = themeColors

  const triggerExplosion = () => {
    setShowSurprise(true)

    const colors = ["#64ffda", "#ff6b6b", "#4ecdc4", "#ffe66d", "#a8dadc", "#f1c40f", "#e74c3c", "#9b59b6"]
    const newParticles = [...Array(30)].map((_, i) => {
      const angle = (Math.PI * 2 * i) / 30
      const velocity = 3 + Math.random() * 4
      return {
        id: i,
        x: 0,
        y: 0,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 8,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 20,
      }
    })
    setExplosionParticles(newParticles)

    setTimeout(() => {
      setExplosionParticles([])
      setShowSurprise(false)
    }, 2000)
  }

  useEffect(() => {
    if (explosionParticles.length === 0) return

    const interval = setInterval(() => {
      setExplosionParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.2,
          rotation: p.rotation + p.rotationSpeed,
        })),
      )
    }, 16)

    return () => clearInterval(interval)
  }, [explosionParticles.length])

  useEffect(() => {
    const currentFullText = texts[currentIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentFullText.length) {
            setCurrentText(currentFullText.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 150,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting])

  const handleMouseMove = useCallback((e) => {
    if (containerRef.current && !animationRef.current) {
      animationRef.current = requestAnimationFrame(() => {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
        animationRef.current = null
      })
    }
  }, [])

  useEffect(() => {
    const newParticles = [...Array(8)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      originalX: Math.random() * 100,
      originalY: Math.random() * 100,
      size: Math.random() * 2 + 2,
      speed: Math.random() * 1 + 0.5,
    }))
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => {
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 20) {
            const angle = Math.atan2(dy, dx)
            const force = (20 - distance) / 20
            return {
              ...particle,
              x: Math.max(0, Math.min(100, particle.x - Math.cos(angle) * force * 5)),
              y: Math.max(0, Math.min(100, particle.y - Math.sin(angle) * force * 5)),
            }
          } else {
            return {
              ...particle,
              x: particle.x + (particle.originalX - particle.x) * 0.01,
              y: particle.y + (particle.originalY - particle.y) * 0.01,
            }
          }
        }),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [mousePosition])

  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }

      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }

      @keyframes celebrationBounce {
        0%, 100% { transform: translateX(-50%) translateY(0) scale(1); }
        25% { transform: translateX(-50%) translateY(-30px) scale(1.2); }
        50% { transform: translateX(-50%) translateY(-15px) scale(1.1); }
        75% { transform: translateX(-50%) translateY(-25px) scale(1.15); }
      }
      
      @keyframes sparkle {
        0% { transform: scale(0) rotate(0deg); opacity: 0; }
        50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
        100% { transform: scale(0) rotate(360deg); opacity: 0; }
      }
      
      @keyframes buttonGlow {
        0%, 100% { box-shadow: 0 0 20px rgba(100, 255, 218, 0.3), 0 0 40px rgba(100, 255, 218, 0.2); }
        50% { box-shadow: 0 0 30px rgba(100, 255, 218, 0.5), 0 0 60px rgba(100, 255, 218, 0.3); }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="container"
      onMouseMove={handleMouseMove}
      style={{
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        color: currentTheme.text,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {particles.map((particle) => (
          <div
            key={particle.id}
            style={{
              position: "absolute",
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: currentTheme.accent,
              borderRadius: "50%",
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transition: "all 0.1s ease",
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      <div
        style={{
          marginBottom: "4rem",
          width: "100%",
          maxWidth: "800px",
          textAlign: "center",
          animation: "fadeInUp 1s ease-out",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            color: currentTheme.text,
            animation: "fadeInUp 1s ease-out 0.2s both",
            cursor: "pointer",
            transition: "all 0.3s ease",
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.02)"
            e.target.style.color = currentTheme.accent
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)"
            e.target.style.color = currentTheme.text
          }}
        >
          Hi, I'm Hania
        </h1>

        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            marginBottom: "2rem",
            color: currentTheme.accent,
            animation: "fadeInUp 1s ease-out 0.4s both",
            minHeight: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>
            {currentText}
            <span
              style={{
                opacity: 1,
                animation: "blink 1s infinite",
                marginLeft: "2px",
              }}
            >
              |
            </span>
          </span>
        </div>

        <p
          style={{
            fontSize: "1.3rem",
            marginBottom: "3rem",
            color: currentTheme.secondaryText,
            maxWidth: "700px",
            margin: "0 auto 3rem",
            lineHeight: "1.7",
            animation: "fadeInUp 1s ease-out 0.6s both",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontWeight: "400",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = currentTheme.text
          }}
          onMouseLeave={(e) => {
            e.target.style.color = currentTheme.secondaryText
          }}
        >
          Frontend developer fueled by coffee and code, crafting clean interfaces as smooth as a perfect espresso shot.
        </p>

        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginBottom: "2rem",
          }}
        >
          <button
            onClick={triggerExplosion}
            style={{
              background: `linear-gradient(135deg, ${currentTheme.accent}, #4ecdc4)`,
              border: "none",
              borderRadius: "50px",
              padding: "1rem 2.5rem",
              fontSize: "1.1rem",
              fontWeight: "700",
              color: currentTheme.background,
              cursor: "pointer",
              position: "relative",
              overflow: "visible",
              transition: "all 0.3s ease",
              animation: "buttonGlow 2s infinite",
              boxShadow: `0 0 20px ${currentTheme.accent}50`,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"
            }}
          >
            ✨ Click for a surprise! ✨
          </button>

          {explosionParticles.map((particle) => (
            <div
              key={particle.id}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                borderRadius: "50%",
                transform: `translate(${particle.x}px, ${particle.y}px) rotate(${particle.rotation}deg)`,
                pointerEvents: "none",
                boxShadow: `0 0 10px ${particle.color}`,
                zIndex: 1000,
              }}
            />
          ))}

          {showSurprise && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: "-80px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  animation: "celebrationBounce 0.6s ease-out",
                  fontSize: "3rem",
                  pointerEvents: "none",
                  textShadow: "0 0 20px rgba(100, 255, 218, 0.8)",
                  zIndex: 10,
                }}
              >
                🎉
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "-120px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  animation: "celebrationBounce 0.6s ease-out 0.1s both",
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: currentTheme.accent,
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                  textShadow: `0 0 20px ${currentTheme.accent}80`,
                }}
              >
                ✨ Hello! ✨
              </div>
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2
                const distance = 60
                return (
                  <div
                    key={`sparkle-${i}`}
                    style={{
                      position: "absolute",
                      top: `calc(50% + ${Math.sin(angle) * distance}px)`,
                      left: `calc(50% + ${Math.cos(angle) * distance}px)`,
                      fontSize: "1.5rem",
                      animation: `sparkle 1s ease-in-out ${i * 0.1}s`,
                      pointerEvents: "none",
                    }}
                  >
                    ⭐
                  </div>
                )
              })}
            </>
          )}
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <button
            style={{
              backgroundColor: "transparent",
              border: `2px solid ${currentTheme.accent}`,
              borderRadius: "10px",
              color: currentTheme.accent,
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
              animation: "fadeInUp 1s ease-out 0.8s both",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = currentTheme.accent
              e.target.style.color = currentTheme.background
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent"
              e.target.style.color = currentTheme.accent
            }}
            onClick={() => {
              document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Explore My Work
          </button>

          <button
            style={{
              backgroundColor: currentTheme.accent,
              border: `2px solid ${currentTheme.accent}`,
              borderRadius: "10px",
              color: currentTheme.background,
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
              animation: "fadeInUp 1s ease-out 1s both",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "transparent"
              e.target.style.color = currentTheme.accent
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = currentTheme.accent
              e.target.style.color = currentTheme.background
            }}
            onClick={() => {
              window.open("mailto:hania.seifeldeen@mubs.edu.lb", "_blank")
            }}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Homepage
