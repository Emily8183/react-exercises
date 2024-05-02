import "./App.css";
import Heading from "./Heading";

function App() {
  const name = "Emily";
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();

  return (
    <>
      <Heading />
      <div>
        <p>Created by {name}</p>
        <p>Copyright {currentYear}</p>
      </div>
    </>
  );
}

export default App;
