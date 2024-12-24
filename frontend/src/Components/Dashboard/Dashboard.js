import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Styles/Layouts";
import Chart from "../Chart/Chart";
import { dollar } from "../../utils/icons";
import { useGlobalContext } from "../../Context/globalContext";
import History from "../History/History";

function Dashboard() {
    const {totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses} = useGlobalContext()
    
    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
               <h1>All Transactions</h1> 
               <div className="stats-con">
                <div className="chart-con">
                    <Chart />
                    <div className="amount-con">
                        <div className="income">
                            <h2>Total Income</h2>
                            <p>
                                {dollar} {totalIncome()}
                            </p>
                        </div>
                        <div className="expense">
                            <h2>Total Expenses</h2>
                            <p>
                                {dollar} {totalExpenses()}
                            </p>
                        </div>
                        <div className="balance">
                            <h2>Total Balance</h2>
                            <p>
                                {dollar} {totalBalance()}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="history-con">
                    <History />
                </div>
               </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`

`;

export default Dashboard