import React from 'react'
import {SkillsData} from './SkillsData'
const Skills = () => {
 return (
   <>
          <div className="status">
            <h1 style={{textAlign:'center'}}>Skills   <span>👩🏽‍💻</span></h1>
            
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-info">
                <div className="skill">
                 <h2>Languages</h2>
                 {SkillsData.languages.map((item,key)=>{
                   return (
                     <div key={key} className="item">
                       <img src={item.image} alt=""/>
                       <span className="caption">{item.caption}</span>
                       </div>  
                   )
                 })}               

                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-info">
                <div className="skill">
                 <h2>Frameworks /  Libraries</h2>
                 {SkillsData.frameworks.map((item,key)=>{
                   return (
                     <div key={key} className="item">
                       <img src={item.image} alt=""/>
                       <span className="caption">{item.caption}</span>
                       </div>                  )
                     })}               

                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-info">
                <div className="skill">
                 <h2>Databases</h2>
                 {SkillsData.databases.map((item,key)=>{
                   return (
                     <div key={key} className="item">
                       <img src={item.image} alt=""/>
                       <span className="caption">{item.caption}</span>
                       </div>                )
                   
                 })}               

                </div>
              </div>
            </div>
            
            
          </div>
        </>
 )
}

export default Skills
