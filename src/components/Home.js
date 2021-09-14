import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../actions/tasks';
import Task from './Task';
import Navbar from './Navbar';

const Home = () => {

    const [modal, setModal] = useState(false);
    const tasks = useSelector((state) => (state.tasksReducer));
    const [id, setId] = useState(null);


    const handleModal = () => {
        setModal(!modal);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch])

    // console.log("useselector", tasks);
    return (
        <>
            <Navbar handleModal={handleModal} />
            <Container>
                {
                    <Modal modal={modal} handleModal={handleModal} id={id} setId={setId} />
                }
                <Col>
                    <h1> To Do</h1>
                    {
                        tasks.map((task) => {
                            if (task.type === 'To Do')
                                return <Task key={task._id} handleModal={handleModal} task={task} setId={setId} />
                            else
                                return null;
                        }
                        )
                    }
                </Col>
                <Col>
                    <h1> Doing</h1>
                    {
                        tasks.map((task) => {
                            if (task.type === 'Doing')
                                return <Task key={task._id} handleModal={handleModal} task={task} setId={setId} />
                            else
                                return null;
                        })
                    }
                </Col>
                <Col>
                    <h1> Done</h1>
                    {
                        tasks.map((task) => {
                            if (task.type === 'Done')
                                return <Task key={task._id} handleModal={handleModal} task={task} setId={setId} />
                            else
                                return null   
                        })
                    }
                </Col>
            </Container>
        </>
    )
}
export default Home;
const Col = styled.div`
   background-color:#F4F4F4;
   text-align:center;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 10px 0px 40px;
   height: fit-content;
   border-radius: 9px;
   width: 100%;
   
`;
const Container = styled.div`
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     padding: 40px 40px;
     grid-gap: 40px;
     
`;
