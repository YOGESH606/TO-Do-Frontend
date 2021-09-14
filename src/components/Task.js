import React from 'react'
import styled from 'styled-components';


const Task = ({task,handleModal,id,setId}) => {
    //console.log(task);
    const handleClick=()=>{
          handleModal();
          setId(task._id);        
    }
    return (
        <>
            <Card onClick={handleClick}>
                <Title>
                    {task.title}
                </Title>
                <Description>
                    {task.description}
                </Description>
            </Card>
        </>
    )
}

export default Task

const Card = styled.div`
   margin-top: 25px;
   display: flex;
   flex-direction: column;
   text-align:center;
   width: 350px;
   border-radius: 10px;
   position: relative;
   padding: 5px;
   overflow: hidden;
   cursor: pointer;
   background-color: black;
   color: white;
   border:3px solid rgba(249, 249, 249, 0.1);
   box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

   &:hover {
    transform: scale(1.10);
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px , rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color:rgba(249, 249, 249, 0.1);

  }
`;

const Title = styled.p`
    font-family:Condensed,Georgia,serif;
    padding:0 20px;
    font-size: 1.7rem;
    margin: 5px 0;
`;

const Description = styled.p`
    font-size: 1.3rem;
    font-family:Times New Roman;
    margin: 15px 0;
    padding: 0 10px;
`;