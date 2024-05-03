import "../App.css";
import Emojicard from "./Emojicard";
import emoji from "../emoji.js";

// function createEmoji() {
//   return emoji.map((emoji) => {
//     return (
//       <Emojicard
//         key={emoji.id}
//         emoji={emoji.emoji}
//         name={emoji.name}
//         meaning={emoji.meaning}
//       />
//     );
//   });
// }
// convert this to the arrow function listing as below

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emoji.map((emoji) => (
          <Emojicard
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
