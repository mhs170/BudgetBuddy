import React from "react"
import styled from 'styled-components'
import avatar from '../../img/avatar.png'

function Navigation(){
    return (
        <NavStyled>
            <img src={avatar} alt="" />
            <div className="text">
                <h2>Bob</h2>
                <p>Your Money</p>
            </div>
            <ul className="menu-items">
                 
            </ul>
        </NavStyled>
    )
}

const NavStyled = styled.nav`

`;

export default Navigation