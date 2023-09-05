import React from 'react'
import {NavLink} from 'react-router-dom'
import {SidebarData }from './SidebarData'

const Siderbar = () => {
 return (
  <>
   
          <div className="links">
            {SidebarData.map((val)=>{
              return(
                <NavLink className="link" key={val.id} to={val.link} exact activeClassName="link-active">              
                  
                  <h2  >
                    <div id="icon" >{val.icon}   </div>              
                    <div id="title">{val.title}</div>
                   
                  </h2>
                  
                
                </NavLink>
              )
            })}
            
           
          </div>
          
       
        
  </>
 )
}

export default Siderbar
