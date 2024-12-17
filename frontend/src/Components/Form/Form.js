import React, { useState } from "react";
import styled from 'styled-components'

function Form() {
    const [inputState, setInputState] = useState ({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const {title, amount, date, category, description} = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    return (
        <FromStyled>
            <div className="input-control">
                <input 
                type="text" 
                value={title}
                name={'title'}
                placeholder="Salary Title"
                onChange={handleInput('title')}
                />
            </div>
        </FromStyled>
    )
}

const FromStyled = styled.form`

`;

export default Form