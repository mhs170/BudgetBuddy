import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../Context/globalContext";

function History() {
    const {transactionHistory} = useGlobalContext()
    
    const [...history] = transactionHistory()


    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) => {
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`

`;
export default History