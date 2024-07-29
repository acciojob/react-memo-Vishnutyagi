import React, { useState } from 'react'

function ReactMemo() {
    const [name,setName]=useState("");
    const [list,setList]=useState([]);
    const changed=(e)=>{
        setName(e.target.value);
    }
    const clicked=()=>{
        if(name.length>=5) setList([...list,name]);
        e.preventDefault();
    }
  return (
    <div>
        <input type='text' onChange={changed}></input>
        <button onClick={clicked}>Add Slill</button>
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