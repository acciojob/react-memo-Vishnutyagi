import React from 'react'
import ReactMemo from './ReactMemo'
import UseMemo from './UseMemo'
import { useState,useMemo } from 'react'

function App() {
    const [todo,setTodo]=useState([]);
    const [task,setTask]=useState([]);
    const [count,setCount]=useState(1);
    const [todoname,setTodoname]=useState("New Todo");
    const clickedtodo=(e)=>{
        setTodo([...todo,todoname]);
        e.preventDefault();
    }
    const clickedcount=(e)=>{
        setCount(count+1);
        e.preventDefault();
    }
    return (
        <div id="main">
            <useMemo/>
            <h2>My todos</h2>
            <div>
                {
                    todo.map((val)=>{
                        return <p id='todo-0'>{val}</p>;
                    })
                }
            </div>
            <button id='add-todo-btn' onClick={clickedtodo}>Add Todo</button>
            <hr></hr>
            <p id='incr-btn'>Count: <button id='incr-cnt' onClick={clickedcount}>{count}</button></p>
            <h2 id='item-jumbotron'>jumbotron</h2>
            <p id='calc'>1000000000</p>
            <hr></hr>
            <hr></hr>
            <ReactMemo/>
        </div>
    )
}

export default App