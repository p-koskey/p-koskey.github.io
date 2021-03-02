import {ProjectsData} from './ProjectsData'

const Skills = () => {
 return (
   <div>
          <div className="status">
            <h1 style={{textAlign:'center'}}>Projects  <span>💻</span></h1>
            
          </div>
               
                <div className="cards" >
                  {ProjectsData.map((item,key)=>{
              return(
              <div key={key} className="card" style={{display:'inline-block'}}>             
                
                 <img src={item.image} alt=""  id="pid" style={{width:'150px'}}/> 
                 
                 <h2>{item.title}
                 </h2>

                  
                  <p style={{color:'black', fontSize:'15px'}}>{item.description}<br/>
                  <br/>
                  <a href={item.githubLink} target="_blank" rel="noreferrer" style={{marginRight:'1rem'}}>Github link</a> <span></span>
                  <a href={item.link} target="_blank" rel="noreferrer">Website link</a>
                  </p> 
              </div>

              )
              })}
              </div>
             
              </div>
              
 )
}

export default Skills
