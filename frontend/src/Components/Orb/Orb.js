import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {

    const {width, height} = useWindowSize()
    console.log(width, height)
    const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(400px, 400px);
        }
        100%{
            transform: translate(0, 0);
        }
    `


    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(100px);
        animation: ${moveOrb} 0.5s alternate linear infinite;
    `;

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb