import React from 'react'
import AnimatedText from '../shared/Animatedtext'

const Marquee = () => {
  return (
    <div>
       <div className="relative marquee-container h-[50px] mt-[10px] flex">
      <div className="marquee-content flex items-center">
        <div className="marquee-item items-center">
          <div className="marquee-text">TailwindCSS</div>
          <div className="marquee-text">JavaScript</div>
          <div className="marquee-text">TypeScript</div>
          <div className="marquee-text">Next.js</div>
          <div className="marquee-text">React.js</div>
          <div className="marquee-text">Figma</div>
          <div className="marquee-text">Git</div>
          <div className="marquee-text">VS Code</div>
        </div>
        <div className="marquee-item">
        <div className="marquee-text">TailwindCSS</div>
          <div className="marquee-text">JavaScript</div>
          <div className="marquee-text">TypeScript</div>
          <div className="marquee-text">Next.js</div>
          <div className="marquee-text">React.js</div>
          <div className="marquee-text">Figma</div>
          <div className="marquee-text">Git</div>
          <div className="marquee-text">VS Code</div>
        </div>
      </div>
      <div className="message"><AnimatedText text="Tech Stack"/></div>
    </div>

    </div>
  )
}

export default Marquee
