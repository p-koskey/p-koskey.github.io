import React from 'react'
import {SkillsData} from './SkillsData'
const Skills = () => {
 return (
   <div className="dataa">
          <div className="status">
            <h1 style={{textAlign:'center'}}>Skills   <span>👩🏽‍💻</span></h1>
            
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-info">
              <div>
                 <h2>Software Development</h2>               
                  
                  <h2 style={{ fontSize:'18px'}}>Experienced in both functional and OOP.</h2> 

                  </div>
                <div className="skill">
                 <h2 style={{ fontSize:'18px'}}>I have experience with :</h2>
                 {SkillsData.map((item,key)=>{
                   return (
                     <div key={key} className="item">
                       <img src={item.image} alt=""/>
                       <span className="caption">{item.caption}</span>
                       <br/>
                       </div>  
                   )
                 })} 

                </div>
              </div>
            </div>
            
          </div>
        </div>
 )
}

export default Skills
