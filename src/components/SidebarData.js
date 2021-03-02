import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ComputerIcon from '@material-ui/icons/Computer';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';

export const SidebarData = [
 {
  title:"About",
  icon: <PersonIcon color="primary" style={{ fontSize: 30 }} />,
  link: "/" 
 },

 {
  title:"Skills",
  icon: <ComputerIcon color="primary" style={{ fontSize: 30 }}/>,
  link: "/skills" 
 },

 {
  title:"Projects",
  icon: <FolderSpecialIcon color="primary" style={{ fontSize: 30 }} />,
  link: "/projects" 
 },
 
]



