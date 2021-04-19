import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';

const About = () => {
 return (
  <div className="dataa">
          <div className="status">
            <h1>Hello, I'm Patience Koskey! <span className="wave">👋🏾</span></h1>
            <input type="text" />
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-info">
                <p>
                  I am a Kenyan based full stack web developer. I enjoy spending most of my time advancing my skills in programming by solving challenges and doing projects.
                  I have a set of diverse web development skills ranging from HTML, CSS, JavaScript and Python languages to frameworks such as Angular, Flask and Django. <br/>
                  With every line of code, I strive to make the web a beautiful place.
                </p>
              </div>
            </div>

            <div className="card" style={{display:"block"}}>
              <h2>Contact Me</h2>
              <ul className="social">
                <li><a href="https://github.com/p-koskey" target="_blank" rel="noreferrer" title="  Github"><GitHubIcon className="s-icon github" style={{ fontSize: 30 }}/></a> </li>
                <li><a href="mailto:patiencekoskey@gmail.com" target="_blank" rel="noreferrer" title="G-mail"><MailOutlineIcon className="s-icon mail" /></a></li>
                <li><a href="https://www.linkedin.com/in/pkoskey/" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedInIcon className="s-icon linkedin"/></a></li>
                <li><a href="https://twitter.com/patience_koskey" target="_blank" rel="noreferrer" title="Twitter"> <TwitterIcon className="s-icon twitter"/> </a></li>
              </ul>
            </div>
          </div>
        </div>
 )
}

export default About
