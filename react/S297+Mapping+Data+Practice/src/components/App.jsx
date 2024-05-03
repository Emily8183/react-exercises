import "../App.css";
import Emojicard from "./Emojicard";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Emojicard />
      </dl>
    </div>
  );
}

export default App;
