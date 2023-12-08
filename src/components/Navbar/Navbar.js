
import React from 'react'

export default function Navbar({logo_src, title}) {
    return (
        <nav>
            <img className="logo--style" src={logo_src} alt="" />
            <h1 className="title--style">{title}</h1>
        </nav>  
    )
}

