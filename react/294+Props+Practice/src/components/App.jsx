import "../App.css";
import contacts from "../contacts.js";
import Cards from "./Cards";

function createCards() {
  return contacts.map((contact) => {
    return (
      <Cards
        key={contact.id}
        id={contact.id}
        name={contact.name}
        imgURL={contact.imgURL}
        phone={contact.phone}
        email={contact.email}
      />
    );
  });
}

function App() {
  return (
    <>
      <h1 className="heading">My Contacts</h1>

      {createCards()}

      {/* <Cards
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />

      <Cards
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />

      <Cards
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </>
  );
}

export default App;
