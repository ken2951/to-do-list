import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; //kill the function
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo(""); //clear input value
  };
  // const onDelete = (event) => {
  //   const li = event.target.parentElement;
  //   li.remove();
  // };
  const onDelete = (selectedIndex) => {
    setToDos(toDos.filter((item, index) => index !== selectedIndex));
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => onDelete(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
