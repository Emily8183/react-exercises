import "../App.css";
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
//思路：要想把用户的input呈现在列表里，需要一个useState()来记录define the state of the input value；且需要另外一个useState()在用户点击按钮后，将新的value陈列在list中；
//步骤：1）如何记录用户的input value:
//创建item的初始值“ ”, 把value添加到input box，同时加上onchange，在运行setItem后，这个新的value应该出现在state内（此时无需点击按钮）
//2）添加到列表中：
//创建一个useState更新列表，初始值是一个empty array
//这里需要一个map函数，遍历array中的每一个items，加到list中
//给button添加一个onchange，在用户点击按钮后，触发...sperator operator，把用户输入的value添加到list中

function App() {
  const [item, setItem] = useState("");
  //define the state variable to hold the inputtext

  function handleChange(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  const [list, setList] = useState([]);

  function addList() {
    setList((prevList) => {
      return [...prevList, item];
    });
    setItem("");
    // clear the input box after adding the item
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={addList}>
          {/*here is onClick, not onChange */}
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* {list.map((listItem) => {
            return <li>{listItem}</li>;
          })} */}
          {list.map((listItem) => (
            <ToDoItem text={listItem} />
          ))}
          {/* 注意这里需要加{} */}
        </ul>
      </div>
    </div>
  );
}

export default App;
