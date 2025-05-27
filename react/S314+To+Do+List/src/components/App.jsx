import "../App.css";
import React, { useState, useEffect } from "react";
import ToDoItem2 from "./ToDoItem2";
import InputArea from "./InputArea";
import axios from "axios";

//思路：要想把用户的input呈现在列表里，需要一个useState()来记录define the state of the input value；且需要另外一个useState()在用户点击按钮后，将新的value陈列在list中；
//步骤：1）如何记录用户的input value:
//创建item的初始值“ ”, 把value添加到input box，同时加上onchange，在运行setItem后，这个新的value应该出现在state内（此时无需点击按钮）
//2）添加到列表中：
//创建一个useState更新列表，初始值是一个empty array
//这里需要一个map函数，遍历array中的每一个items，加到list中
//给button添加一个onchange，在用户点击按钮后，触发...sperator operator，把用户输入的value添加到list中

function App() {
  const [list, setList] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL; //读取环境变量

  //GET
  useEffect(() => {
    axios
      .get(`${API_URL}/todos`, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY, //TODO: change to Congnito
        },
      })
      .then((res) => {
        const items = res.data;
        setList(items); //data from the backend
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
      });
  }, []);

  //Post
  function addItems(itemText) {
    axios
      .post(
        `${API_URL} / todos`,
        {
          task: itemText,
          status: false,
        },
        {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        }
      )
      .then((res) => {
        const newItem = res.data; //extract the new item from res.data
        setList((prevList) => [...prevList, newItem]); //save to the current "list" state
      })
      .catch((err) => {
        console.error("Error adding task:", err);
      });
  }

  function removeItems(id) {
    axios
      .delete(`${API_URL}/todos/${id}`, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
      })
      .then(() => {
        setList((prevList) => prevList.filter((item) => item.task_id !== id));
      })
      .catch((err) => {
        console.error("Error deleting task:", err);
      });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      {/* <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div> */}

      <InputArea onAdd={addItems} />

      <div>
        <ul>
          {/* {list.map((listItem) => {
            return <li>{listItem}</li>;
          })} */}

          {list.map((listItem) => (
            // 需要将Index加入parameter，详细查map function的用法

            <ToDoItem2
              text={listItem.task}
              key={listItem.task_id}
              id={listItem.task_id}
              onChecked={removeItems}
            />
          ))}
          {/* 注意这里需要加{} */}
        </ul>
      </div>
    </div>
  );
}

export default App;
