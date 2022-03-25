// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
color:white;
`


const Character = props => {
   return (
       <div>
           <StyledP>{props.chars.name}</StyledP>
       </div>
   )

}

export default Character;