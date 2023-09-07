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
              <div style={{ textAlign:'center'}}>
                 <h2>Software Development</h2>               
                  
                  <h2 style={{ fontSize:'18px'}}>Experienced in both functional and object oriented programming.</h2> 

                  </div>
                <div className="skill">
                  <br/>
                 {SkillsData.map((item)=>{
                   return (
                     <div key={item.id} className="item">
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
