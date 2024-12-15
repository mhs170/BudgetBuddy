import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/icons'
import { menuItems } from '../../utils/menuItems'

function Navigation(){
    return (
        <NavStyled>
            <img src={avatar} alt="" />
            <div className="text">
                <h2>Bob</h2>
                <p>Your Money</p>
            </div>
            <ul className="menu-items">
                 {menuItems.map((item) => {
                    return <li
                        key={item.id}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                 })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`

`;

export default Navigation