import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState("");
  const [list, setList] = useState([]);
  const [color, setColor] = useState(false);
  const [dueDate, setDueDate] = useState(null);
  const [ind, setInd] = useState(-1);
  const [checked, setChecked] = useState(false);

  const add = () => {
    let temp = [...list];
    temp.push(tasks);
    setList(temp);
    setTasks("");
  };

  const mouseIn = () => {
    setColor(true);
  };

  const mouseOut = () => {
    setColor(false);
  };

  const date = (e) => {
    setDueDate(e.target.value);
    console.log(dueDate);
    //let year = now.getFullYear();
    //let month = now.getMonth() + 1;
    //let date = now.getDate();
  };

  const toggle = (index) => {
    setInd(index);
    setChecked(!checked);
  };

  const remove = (index) => {
    let __temp = [...list];
    __temp.splice(index, 1);
    setList(__temp);
  };
  return (
    <>
      <div className="header">
        <input
          type="text"
          value={tasks}
          onChange={(e) => {
            setTasks(e.target.value);
          }}
        />
        <button
          className="add"
          onClick={add}
          onMouseOver={mouseIn}
          onMouseOut={mouseOut}
          style={{
            backgroundColor: color ? "darkgreen" : "lightgreen",
            color: color ? "white" : "black",
          }}
        >
          Add
        </button>
      </div>
      <div className="todos">
        {list.map((ele, index) => {
          return (
            <div className="flex">
              {index == ind && checked ? (
                <>
                  <span style={{ textDecorationLine: "line-through" }}>
                    {ele}
                  </span>
                  <input type="text" placeholder="Task Description" />
                  <input
                    type="date"
                    onChange={(e) => {
                      date(e);
                    }}
                  />

                  <button
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    Delete
                  </button>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => {
                      toggle(index);
                    }}
                  />
                </>
              ) : (
                <>
                  <span>{ele}</span>
                  <input type="text" placeholder="Task Description" />
                  <input
                    type="date"
                    onChange={(e) => {
                      date(e);
                    }}
                  />

                  <button
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    Delete
                  </button>
                  <input
                    type="checkbox"
                    onChange={() => {
                      toggle(index);
                    }}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
