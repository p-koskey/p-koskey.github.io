import React from 'react'
import {NavLink} from 'react-router-dom'
import {SidebarData }from './SidebarData'

const Siderbar = () => {
 return (
  <>
   
          <div className="links">
            {SidebarData.map((val,key)=>{
              return(
                <>
                <NavLink className="link" key={key} to={val.link} exact activeClassName="link-active">              
                  
                  <h2 key={key} >
                    <div id="icon" key={key}>{val.icon}   </div>              
                    <div id="title">{val.title}</div>
                   
                  </h2>
                  
                
                </NavLink>
               
               </>
              )
            })}
            
           
          </div>
          
       
        
  </>
 )
}

export default Siderbar
