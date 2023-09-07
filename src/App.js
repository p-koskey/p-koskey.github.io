import './App.css';
import Sidebar from './components/Siderbar';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import avatar from './assets/avatar.png';
import Experience from './components/Experience';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

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
          </div>         
          
        </div>
      
        </div>
        <div onClick={handleClick} className="sidebar">
          {click ? <Sidebar/> : ''}
          
          <ul className="social" style={{display: 'none'}}>
                <li><a href="https://github.com/p-koskey" target="_blank" rel="noreferrer" title="  Github"><GitHubIcon className="s-icon github"/></a> </li>
                <li><a href="mailto:patiencekoskey@gmail.com" target="_blank" rel="noreferrer" title="G-mail"><MailOutlineIcon className="s-icon mail" /></a></li>
                <li><a href="https://www.linkedin.com/in/pkoskey/" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedInIcon className="s-icon linkedin"/></a></li>
              </ul>
        </div>
        </nav>
       
       <main>
          
      <section className={click ? 'glass move' : 'glass'}>
        <div className="dashboard">
          <div className="user">
            <img src={avatar} alt="" />
            <h3>Patience Koskey</h3>
            <ul className="social">
                <li><a href="https://github.com/p-koskey" target="_blank" rel="noreferrer" title="  Github"><GitHubIcon className="s-icon github"/></a> </li>
                <li><a href="mailto:patiencekoskey@gmail.com" target="_blank" rel="noreferrer" title="G-mail"><MailOutlineIcon className="s-icon mail" /></a></li>
                <li><a href="https://www.linkedin.com/in/pkoskey/" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedInIcon className="s-icon linkedin"/></a></li>
              </ul>
          </div>
        <Sidebar/>
    
        </div>
        
         <div className="data">
          <Switch>
    <Route path='/' exact component = {About}/>
    <Route path='/skills' component = {Skills}/>
    <Route path='/projects' component = {Projects}/>
    <Route path='/experience' component = {Experience}/>
    </Switch>
        </div>
      </section>
      
    </main>     
  
    
    </Router>
  );
}

export default App;
