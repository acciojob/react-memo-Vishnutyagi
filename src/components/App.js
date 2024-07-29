import React, { useState, useMemo } from 'react';
import ReactMemo from './ReactMemo';
import UseMemo from './UseMemo';

function App() {
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);
  const [todoname, setTodoname] = useState("New Todo");

  const clickedtodo = (e) => {
    setTodo([...todo, todoname]);
    e.preventDefault();
  };

  const clickedcount = (e) => {
    setCount(count + 1);
    e.preventDefault();
  };

  // Example useMemo usage: 
  // You can use useMemo to memoize a calculation or a derived state.
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return count + 1000000000;
  }, [count]);

  return (
    <div id="main">
      <UseMemo />
      <h2>My Todos</h2>
      <div>
        {todo.map((val, index) => (
          <p key={index} id={`todo-${index}`}>{val}</p>
        ))}
      </div>
      <button id='add-todo-btn' onClick={clickedtodo}>Add Todo</button>
      <hr />
      <p id='incr-cnt'>Count: {count}</p>
      <button id='incr-btn' onClick={clickedcount}>Increment Count</button>
      <h2 id='item-jumbotron'>Jumbotron</h2>
      <p id='calc'>{expensiveCalculation}</p>
      <hr />
      <ReactMemo />
    </div>
  );
}

export default App;
