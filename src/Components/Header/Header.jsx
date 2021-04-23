import React from "react"
import s from './Header.module.css'

const Header = () => {
    return(
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxaMxDCwnkweK-esKCmBVx50Z1Uovf9e9FNA&usqp=CAU'
                alt='Logo'/>
        </header>
    )
}

export default Header