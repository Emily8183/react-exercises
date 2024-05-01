// import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  const food = "sample1";
  const drink = "sample2";

  const number1 = 2;
  const number2 = 3;

  return (
    <>
      <h1>
        <p>Session 281</p>
        <b>My Favourite {`${food} ${drink}`}</b>
        <br></br>
        <b>I got the above samples for total number of {number1 + number2}</b>
      </h1>

      <ul>
        <li>Pizza</li>
        <img
          src="https://t3.ftcdn.net/jpg/01/33/61/72/240_F_133617244_dWdivRXwoLVzowl1kn3iFP9JGcuNd8n6.jpg"
          className="image"
          alt="pizza"
        ></img>
        <li>Burger</li>
        <img
          src="https://www.foodandwine.com/thmb/jldKZBYIoXJWXodRE9ut87K8Mag=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
          className="image"
          alt="burger"
        ></img>
        <li>Pasta</li>
        <img
          src="https://www.allrecipes.com/thmb/JPQcpUKRsPXhUZm0H-XZUpjrp8w=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg"
          className="image"
          alt="pasta"
        ></img>
      </ul>
    </>
  );
}

export default App;
