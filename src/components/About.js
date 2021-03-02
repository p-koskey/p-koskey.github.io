import React from 'react'

const About = () => {
 return (
  <>
          <div className="status">
            <h1>Hello, I'm Patience Koskey! <span className="wave">👋🏾</span></h1>
            <input type="text" />
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-info">
                <p>
                  A passionate web developer with a clear understanding of
                  various web development languages and frameworks
                  (Javascript, Python) I'm motivated to learn, grow, and excel
                  in the tech industry.
                </p>
              </div>
            </div>

            <div className="card" style={{display:"block"}}>
              <h2>Contact Me</h2>
              <div className="social">
                <a href="https://github.com/p-koskey" target="_blank" rel="noreferrer"><img src="github.png" alt="Github"/></a>
                <a href="mailto:patiencekoskey@gmail.com" target="_blank" rel="noreferrer"><img src="gmail.png" alt="Gmail"/></a>
                <a href="https://www.linkedin.com/in/patience-koskey-717644200/" target="_blank" rel="noreferrer"><img src="linkedin.png" alt="Linkedin"/></a>
              </div>
            </div>
          </div>
        </>
 )
}

export default About
