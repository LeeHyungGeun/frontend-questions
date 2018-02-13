import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    @keyframes mymove {
        from {
            transform: rotate(0deg);   
        }
        to {
            transform: rotate(360deg);
        }
    }
    animation: mymove 2s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
`;

const StyledButton = styled.div`
    // background-color: palevioletred;
    background-color: mediumseagreen;
    padding: 2rem;
`;

const Question = () => {
    return (
        <StyledDiv>
            <StyledButton />
        </StyledDiv>
    );
};
export default Question;