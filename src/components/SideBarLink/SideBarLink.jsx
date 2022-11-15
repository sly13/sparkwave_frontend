import React from 'react'
import classes from './SideBarLink.module.css'
import { NavLink } from 'react-router-dom'

export default function SideBarLink({ children, href, click }) {
  return (
    <NavLink onClick={click} to={href} className={({ isActive }) => isActive ? classes.active : classes.link}>{children}</NavLink>
  )
}
