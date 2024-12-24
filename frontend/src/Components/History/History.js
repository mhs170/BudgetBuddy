import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../Context/globalContext";

function History() {
    const {transactionHistory} = useGlobalContext()
    return (
        <HistoryStyled>History</HistoryStyled>
    )
}

const HistoryStyled = styled.div`

`;
export default History