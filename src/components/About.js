import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const About = () => {
 return (
  <div className="dataa">
          <div className="status" style={{textAlign: "center"}}>
            <h1>I'm Patience Koskey!  <span className="wave">👋🏾</span> </h1>
            <h2>Software developer & a Problem solver </h2>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-info">
        
                <p>                  
                What excites me most about being a Software developer is being able to create things that have purpose and solve real problems.
                 It goes beyond developing websites and involves having a passion for experiences and solutions that help people.
                 <br/>
                 Leaning into customer insight and understanding their needs, finding the right problems to solve,
                  delivering solutions as quickly as possible, learning from those and then iterating and improving that value over time is the key.
                </p>
                <p>                  
                  With every line of code, I strive to make the web a beautiful place.
                </p>
              </div>
            </div>

            <div className="" style={{display:"block"}}>
              <h2  style={{textAlign: "center" , color: "black"}}>Contact Me</h2>
              <br/>
              <ul className="social">
                <li><a href="https://github.com/p-koskey" target="_blank" rel="noreferrer" title="  Github"><GitHubIcon className="s-icon github" style={{ fontSize: 30 }}/></a> </li>
                <li><a href="mailto:patiencekoskey@gmail.com" target="_blank" rel="noreferrer" title="G-mail"><MailOutlineIcon className="s-icon mail" /></a></li>
                <li><a href="https://www.linkedin.com/in/pkoskey/" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedInIcon className="s-icon linkedin"/></a></li>
              </ul>
            </div>
          </div>
        </div>
 )
}

export default About
