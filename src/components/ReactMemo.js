import React, { useState } from 'react'

function ReactMemo() {
    const [name,setName]=useState("");
    const [list,setList]=useState([]);
    const changed=(e)=>{
        setName(e.target.value);
    }
    const clicked=(e)=>{
        if(name.length>=5) setList([...list,name]);
        e.preventDefault();
    }
  return (
    <div>
        <input id='skill-input' type='text' onChange={changed}></input>
        <button id='skill-btn' onClick={clicked}>Add Slill</button>
        <ul>
            {
                list.map((val)=>{
                    return <li>{val}</li>
                })
            }
        </ul>
    </div>
  )
}

export default ReactMemo