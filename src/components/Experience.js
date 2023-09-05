import {ExpData} from './ExpData'

const Skills = () => {
 return (
   <div className="dataa">
          <div className="status">
            <h1 style={{textAlign:'center'}}>Experience  <span>💻</span></h1>
            
          </div>
               
                <div className="cards" >
                  {ExpData.map((item,key)=>{
              return(
              <div key={key} className="card" >       
                 <div>
                 <h2>{item.title} </h2>
                 <h4>{item.year}</h4>
                
                  
                  <h2 style={{ fontSize:'18px'}}>{item.description}</h2> 
                  <br/>
                  <p style={{fontSize:'15px'}}>Skills : {item.skills}<br/> </p> 
                  </div>
              </div>

              )
              })}
              </div>
             
              </div>
              
 )
}

export default Skills
