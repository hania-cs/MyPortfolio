"use client"

import { useState, useEffect } from "react"

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [animationStarted, setAnimationStarted] = useState(false)

  const themeColors = {
    background: "#0a192f",
    foreground: "#ccd6f6",
    primary: "#64ffda",
    muted: "#8892b0",
    mutedForeground: "#8892b0",
    card: "#1a2530",
    border: "#233554",
  }

  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @keyframes drawWeb {
        from { stroke-dashoffset: 1000; }
        to { stroke-dashoffset: 0; }
      }
      
      @keyframes drawSkillLine {
        from { stroke-dashoffset: 200; }
        to { stroke-dashoffset: 0; }
      }
      
      @keyframes pulseGlow {
        0%, 100% { filter: drop-shadow(0 0 5px ${themeColors.primary}); }
        50% { filter: drop-shadow(0 0 15px ${themeColors.primary}); }
      }
      
      .web-line {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: drawWeb 2s ease-out forwards;
      }
      
      .skill-line {
        stroke-dasharray: 200;
        stroke-dashoffset: 200;
        animation: drawSkillLine 1.5s ease-out forwards;
      }
      
      .skill-point:hover {
        animation: pulseGlow 1s infinite;
      }
    `
    document.head.appendChild(style)

    const timer = setTimeout(() => {
      setAnimationStarted(true)
    }, 500)

    return () => {
      document.head.removeChild(style)
      clearTimeout(timer)
    }
  }, [])

  const skills = [
    { name: "React", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "CSS", level: 90 },
    { name: "HTML", level: 95 },
    { name: "WordPress", level: 75 },
    { name: "Three.js", level: 30 },
  ]

  const SpiderWeb = () => {
    const centerX = 300
    const centerY = 300
    const maxRadius = 200
    const numLevels = 5

    // Calculate positions for each skill on the web
    const getSkillPosition = (index, level) => {
      const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2
      const radius = (level / 100) * maxRadius
      return {
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        labelX: centerX + Math.cos(angle) * (maxRadius + 40),
        labelY: centerY + Math.sin(angle) * (maxRadius + 40),
        angle,
      }
    }

    return (
      <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <svg width="600" height="600" style={{ background: "transparent" }}>
          {Array.from({ length: numLevels }, (_, i) => (
            <circle
              key={`circle-${i}`}
              cx={centerX}
              cy={centerY}
              r={(maxRadius / numLevels) * (i + 1)}
              fill="none"
              stroke={themeColors.muted}
              strokeWidth="1"
              opacity="0.3"
              className="web-line"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}

          {skills.map((_, index) => {
            const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2
            const endX = centerX + Math.cos(angle) * maxRadius
            const endY = centerY + Math.sin(angle) * maxRadius

            return (
              <line
                key={`radial-${index}`}
                x1={centerX}
                y1={centerY}
                x2={endX}
                y2={endY}
                stroke={themeColors.muted}
                strokeWidth="1"
                opacity="0.4"
                className="web-line"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              />
            )
          })}

          {animationStarted && (
            <polygon
              points={skills
                .map((skill, index) => {
                  const pos = getSkillPosition(index, skill.level)
                  return `${pos.x},${pos.y}`
                })
                .join(" ")}
              fill={themeColors.primary}
              fillOpacity="0.1"
              stroke={themeColors.primary}
              strokeWidth="3"
              className="skill-line"
              style={{
                animationDelay: "2s",
                filter: `drop-shadow(0 0 8px ${themeColors.primary})`,
              }}
            />
          )}

          {skills.map((skill, index) => {
            const pos = getSkillPosition(index, skill.level)
            const isHovered = hoveredSkill === index

            return (
              <g key={`skill-${index}`}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isHovered ? "8" : "6"}
                  fill={themeColors.primary}
                  stroke={themeColors.background}
                  strokeWidth="2"
                  className="skill-point"
                  style={{
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    filter: isHovered
                      ? `drop-shadow(0 0 12px ${themeColors.primary})`
                      : `drop-shadow(0 0 6px ${themeColors.primary})`,
                  }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                />

                <text
                  x={pos.labelX}
                  y={pos.labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={isHovered ? themeColors.primary : themeColors.foreground}
                  fontSize="16"
                  fontWeight="600"
                  style={{
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {skill.name}
                </text>

                <text
                  x={pos.labelX}
                  y={pos.labelY + 20}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={themeColors.primary}
                  fontSize="14"
                  fontWeight="700"
                  style={{
                    cursor: "pointer",
                    opacity: isHovered ? 1 : 0.8,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {skill.level}%
                </text>
              </g>
            )
          })}

          <circle
            cx={centerX}
            cy={centerY}
            r="4"
            fill={themeColors.primary}
            style={{ filter: `drop-shadow(0 0 8px ${themeColors.primary})` }}
          />
        </svg>

        {hoveredSkill !== null && (
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: themeColors.card,
              border: `1px solid ${themeColors.border}`,
              borderRadius: "12px",
              padding: "20px",
              minWidth: "200px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3
              style={{
                color: themeColors.primary,
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              {skills[hoveredSkill].name}
            </h3>
            <div
              style={{
                color: themeColors.foreground,
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              {skills[hoveredSkill].level}% Proficiency
            </div>
            <div
              style={{
                color: themeColors.mutedForeground,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {skills[hoveredSkill].level > 80
                ? "Expert Level"
                : skills[hoveredSkill].level > 60
                  ? "Advanced Level"
                  : "Learning"}
            </div>
            <div
              style={{
                color: themeColors.primary,
                fontSize: "18px",
                marginTop: "12px",
              }}
            >
              {skills[hoveredSkill].level > 80 ? "★★★★★" : skills[hoveredSkill].level > 60 ? "★★★★☆" : "★★★☆☆"}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        color: themeColors.foreground,
        position: "relative",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          marginBottom: "3rem",
          color: themeColors.foreground,
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        My Skills Web
      </h2>

      <SpiderWeb />
    </div>
  )
}

export default SkillsSection
