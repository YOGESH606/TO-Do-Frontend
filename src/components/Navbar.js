import React from 'react';
import styled from 'styled-components';

const Navbar = ({handleModal}) => {
    return (
        <Container>
            <Logo>Navbar</Logo>
            <Button onClick={handleModal}>Add Task</Button>
        </Container>
    )
}

export default Navbar

const Container=styled.div`
    padding: 10px 100px;
    display: flex;
    justify-content: space-between;
    background-color: white;
`;
const Logo=styled.p`
    font-size: 1.8rem;
`;
const Button=styled.div`
   font-size: 1.4rem;
   padding: 5px 10px;
   color: white;
   background-color: black;
   border-radius: 9px;
   cursor: pointer;
   transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
   &:hover{
       color: black;
       background-color: white;
   }
`;

