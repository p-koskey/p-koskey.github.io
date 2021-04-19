import './App.css';
import Sidebar from './components/Siderbar';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import avatar from './assets/avatar.png'
function App() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const changeBackground = () => {
    if (window.scrollY >= 20){
      setNavbar(true)
    } else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  return (
    <Router>
      <nav>
      <div className={navbar ? 'dashboard2 scroll' : 'dashboard2'}>
        <div className="toggle" onClick={handleClick}>
          {click ? <CloseIcon color="primary" style={{ fontSize: 40 }}/> : <MenuIcon color="primary" style={{ fontSize: 40 }}/> }
              
          
         
        </div>
        <div className="nav-right">
          <div className="user">
            <img src={avatar} alt="" />
            <h3>Patience Koskey</h3>
            <p>Full Stack Web Developer</p>
          </div>
          
         
        <a href="https://drive.google.com/file/d/1D9j6elGizHQkhqpOc12GYmnhVA6GZaZp/view?usp=sharing" target="_blank" rel="noreferrer"><div className="pro">
            <h2>View My Resume</h2>
            
          </div></a>
          
        </div>
         
        </div>
        <div onClick={handleClick} className="sidebar">
          {click ? <Sidebar/> : ''}
          

        </div>
        </nav>
       
       <main>
          
      <section className={click ? 'glass move' : 'glass'}>
        <div className="dashboard">
          <div className="user">
            <img src={avatar} alt="" />
            <h3>Patience Koskey</h3>
            <p> Full Stack Web Developer</p>
          </div>
        <Sidebar/>
        <a href="https://drive.google.com/file/d/1P0MS8u9crsxduwIj_JAU4yMdpLRQu7UZ/view?usp=sharing" target="_blank" rel="noreferrer"><div className="pro">
            <h2>View My Resume</h2>
            
          </div></a>
        </div>
        
         <div className="data">
          <Switch>
    <Route path='/' exact component = {About}/>
    <Route path='/skills' component = {Skills}/>
    <Route path='/projects' component = {Projects}/>
    </Switch>
        </div>
      </section>
      
    </main>     
  
    
    </Router>
  );
}

export default App;
