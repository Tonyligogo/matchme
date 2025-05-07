import React from 'react'
import NavLink from './NavLink'

const navItems = [
    {
        id:1,
        label:'Matches',
        href:'/matches'
    },
    {
        id:2,
        label:'Lists',
        href:'/lists'
    },
    {
        id:3,
        label:'Messages',
        href:'/messages'
    },
]

const MainNavbar = () => {
  return (
    <nav>
        <h1 className='text-4xl font-semibold'>MatchMe</h1>
        <ul>
            {navItems.map((item)=>(
                <NavLink key={item.id} label={item.label} href={item.href} />
            ))}
        </ul>
    </nav>
  )
}

export default MainNavbar