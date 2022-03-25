// Write your Character component here
import React from 'react';
import styled, { keyframes } from 'styled-components';



const StyledP = styled.p`
color:white;
font-size: 1.5rem;
`
const StyledDiv = styled.div`
display:flex;
justify-content: space-between;
margin: 0 auto;
width: 40%;
padding: 8px;
border: 2px solid #476321;
text-align: center;
margin-bottom: .75%;
background-size: cover;
font-family: 'SF Distant Galaxy Alternate';
letter-spacing: 0.2rem;
background-color: rgb(131,131,131, 0.5);
&:hover{background-color: rgb(105,105,105, 0.8)};
`
const BirthDiv = styled.div`
background-color:#57585A;
border-radius: 30%;
display:flex;
justify-content: center;
align-items: center;
padding: 2%;
font-size: .75rem;
color: #362053;
`




const Character = props => {
    return (

        <StyledDiv>

            <StyledP>{props.chars.name}</StyledP>
            <BirthDiv>{props.birth.birth_year}</BirthDiv>
        </StyledDiv>

    )

}

export default Character;