//如何点击list上的item后，从array中删除：
// 1) 在map list上添加onClick事件, 这个onClick需要是一个arrow function，只有trigger时才会加载; 这个function 其实是从parent 通过props传到child （onChecked)
// 2) 在map list 上添加key=index, id=index，这样在删除的时候，可以指向是哪一个item
// 3）在App.jsx中，创建一个removeItem function的props，可以pass到ToDoItem中
// 4）这个removeItem的function, 需要在原有prevItems基础上，return一个filter，挑出不是当前点击的item，index !== id （这一步的前提是已经有setItem这个state）

import React from "react";

function ToDoItem2(props) {
  return (
    <div>
      <li
        onClick={() => {
          props.onChecked(props.id);
          //这个onClick需要是一个arrow function，只有trigger时才会加载;
        }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem2;
