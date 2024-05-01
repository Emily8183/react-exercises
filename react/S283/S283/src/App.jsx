import "./App.css";

function App() {
  const name = "Emily";

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  let greetings = "Good morning";

  let customStyle = { color: "red" };

  if (currentDate.getTime() > 12) {
    greetings = "Good afternoon";
    customStyle.color = "green";
  } else if (currentDate.getTime() > 18) {
    greetings = "Good evening";
    customStyle.color = "blue";
  }

  return (
    <div>
      <h1 className="heading" style={customStyle}>
        {greetings}
      </h1>
      <p>Created by {name}</p>
      <p>Copyright {currentYear}</p>
    </div>
  );
}

export default App;
