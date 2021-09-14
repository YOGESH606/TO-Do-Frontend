import React from 'react'
import styled from 'styled-components'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { createTask,editTask,deleteTask } from '../actions/tasks';

const API = axios.create({ baseURL: 'http://localhost:5000' });

const Modal = ({ modal, handleModal, id, setId }) => {
    const [data, setData] = useState({ title: '', description: '', type: '' });
    const dispatch = useDispatch();
    const task = useSelector((state) => id ? state.tasksReducer.find((obj) => obj._id === id) : null);

    const handlesubmit = async () => {
        if(id){
            console.log("edit task called")
            dispatch(editTask(task._id,data));
            setId(null);
            setData({ title: '', description: '', type: '' });
        }
        else{
            console.log("cretetask task called")
            dispatch(createTask(data));
            setId(null);
            setData({ title: '', description: '', type: '' });
        }
        handleModal();
    }
    const handleDelete=async()=>{
        dispatch(deleteTask(task._id));
        setId(null);
        handleModal();
        setData({ title: '', description: '', type: '' });
    }
    const handleCancel=async()=>{
        handleModal();
        setData({ title: '', description: '', type: '' });
        setId(null);
    }
    useEffect(() => {
        if (task) setData({ title: task.title, description: task.description, type: task.type})
    }, [task])
    return (
        <>
            <CardModal show={modal}>
                <CardModalWrapper>
                    <h1>Welcome to our todo app</h1>
                    <TitleInput value={data.title} placeholder={"Enter Title..."} onChange={
                        (e) =>{
                            var regEx = /^$|^[a-zA-Z][a-zA-Z\s]*$/;
                            if (e.target.value.match(regEx) )
                               setData({ ...data, title: e.target.value })          
                            }
                        }
                         onClick={() => setData({ ...data})}
                     />
                    <DescriptionInput value={data.description} placeholder={"Enter Description.."} onChange={
                        (e) =>{
                            var regEx = /^$|^[a-zA-Z][a-zA-Z\s]*$/;
                            if (e.target.value.match(regEx))
                                setData({ ...data, description: e.target.value })      
                        }}
                         onClick={() => setData({ ...data })} />

                    <Dropdown value={data.type} onChange={(e) => setData({ ...data, type: e.target.value })}>
                        <Option>select status of work...</Option>
                        <Option >To Do</Option>
                        <Option >Doing</Option>
                        <Option >Done</Option>
                    </Dropdown>

                    <CardButtons>
                        <CardModalButton onClick={handleCancel}>Cancel</CardModalButton>
                        <CardModalButton onClick={handlesubmit}>Submit</CardModalButton>
                        {
                            id ? <CardModalButton onClick={handleDelete}>Delete</CardModalButton> :null
                        }
                    </CardButtons>
                </CardModalWrapper>
            </CardModal>
        </>
    )
}

export default Modal;



const CardModal = styled.div`
  z-index:200;
  display: ${({ show }) => show ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.9);
  color: white;
  text-align:center;
  font-size: 1.4rem;
`;
const CardModalWrapper = styled.div`
  margin:100px auto;
  border: 2px solid white;
  width: 500px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  border-radius: 15px;

`;
const CardButtons = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-around;
    
`;
const CardModalButton = styled.button`
  background-color: white;
  font-size: 1.2rem;
  padding: 5px 0;
  width: 90px;
  border: 2px solid black;
  color: black;
  border-radius: 9px;
  cursor: pointer;
  display:inline-block;
  transition:all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover{
      background-color: black;
      color: white;
  }
`;
const TitleInput = styled.input`
    margin:20px 0;
    padding: 14px 0;
    font-size: 1.4rem;
    text-align:center;
    font-family:Times New Roman;
    border-radius: 13px;
`;

const DescriptionInput = styled.textarea`
    padding: 25px 0;
    font-size: 1.4rem;
    text-align:center;
    font-family:Times New Roman;
    border-radius: 13px;
`;

const Dropdown = styled.select`
     margin-top: 20px;
     color: black;
     padding: 10px 0;
     font-size: 1.4rem;
     font-family:Times New Roman;
     border-radius: 13px;
     text-align:center;
`;
const Option = styled.option`
   
    
`;
