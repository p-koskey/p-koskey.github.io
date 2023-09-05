import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ComputerIcon from '@material-ui/icons/Computer';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import WorkIcon from '@material-ui/icons/Work';

export const SidebarData = [
 {
  id: 0,
  title:"About",
  icon: <PersonIcon  style={{ fontSize: 30 }} />,
  link: "/" 
 },

 {
    id: 1,
    title:"Experience",
    icon: <WorkIcon  style={{ fontSize: 30 }} />,
    link: "/experience" 
},

 {
  id: 2,
  title:"Skills",
  icon: <ComputerIcon  style={{ fontSize: 30 }}/>,
  link: "/skills" 
 },


 {
  id: 3,
  title:"Projects",
  icon: <FolderSpecialIcon  style={{ fontSize: 30 }} />,
  link: "/projects" 
 },
 
]



