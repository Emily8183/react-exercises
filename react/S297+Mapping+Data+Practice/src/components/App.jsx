import "../App.css";
import Emojicard from "./Emojicard";
import emoji from "../emoji.js";

function createEmoji() {
  return emoji.map((emoji) => {
    return (
      <Emojicard
        key={emoji.id}
        emoji={emoji.emoji}
        name={emoji.name}
        meaning={emoji.meaning}
      />
    );
  });
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{createEmoji(emoji)}</dl>
    </div>
  );
}

export default App;
