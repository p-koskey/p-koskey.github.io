import React from 'react';
import DownloadIcon from '@material-ui/icons/Link';

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
                 </p>
                 <br/>
                <p>  
                 Leaning into customer insight and understanding their needs, finding the right problems to solve,
                  delivering solutions as quickly as possible, learning from those and then iterating and improving that value over time is the key.
                </p>
                <br/>
                <p>                  
                  With every line of code, I strive to make the web a beautiful place.
                </p>
              </div>
            </div>
            
            <a className='pro' href="https://drive.google.com/file/d/1P0MS8u9crsxduwIj_JAU4yMdpLRQu7UZ/view?usp=sharing" target="_blank" rel="noreferrer">
            <h3 style= {{textAlign: "center"}}> <DownloadIcon  style={{ fontSize: '1.5rem' }}/>    View My Resume</h3>
            </a>
          </div>
        </div>
 )
}

export default About
