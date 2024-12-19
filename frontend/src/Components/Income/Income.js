import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Styles/Layouts";
import { useGlobalContext } from "../../Context/globalContext";
import Form from '../Form/Form';
import IncomeItem from "../IncomeItem/IncomeItem";

function Income() {
    const {addIncome, incomes, getIncomes} = useGlobalContext()

    useEffect(() => {
        getIncomes()
    }, [])
    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                <div className="incomes">
                    {incomes.map((income) => {
                        const { _id, title, amount, date, category, description } = income;
                        return <IncomeItem 
                            key={_id}
                            id={_id}
                            title={title}
                            description={description}
                            amount={amount}
                            date={date}
                            category={category}
                            indicatorColor="var(--color-green)"
                        />
                    })}
                </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`

`;

export default Income 