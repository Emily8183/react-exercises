//This is the best version among all the three options

function InputBoxForm() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function settingName(event) {
    setName(event.target.value);
    console.log(event.target);
  }

  function handleButtonClick(event) {
    setHeading(name);

    event.preventDefault();
    //to prevent the page auto-refresh after submitted
  }

  return (
    <div>
      <h1>Hello {heading}</h1>

      {/* 这里用form，button的onChange 事件不会触发，因为form会自动提交，所以用onSubmit事件。 */}
      <form onSubmit={handleButtonClick}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={settingName}
          value={name}
        />
        <Button />
      </form>
    </div>
  );
}

export default InputBoxForm;
