import { useState, useEffect } from "react";
import ContactList from "./components/ContactList/ContactList ";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

let baseContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || baseContacts
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function addContact(object) {
    object.id = nanoid();
    baseContacts = [...contacts, object];

    setContacts(baseContacts);
  }

  function onFilter(event) {
    const value = event.target.value.toLowerCase();
    if (value === "") {
      setContacts(baseContacts);
    } else {
      const filteredContacts = contacts.filter((element) =>
        element.name.toLowerCase().includes(value)
      );
      setContacts(filteredContacts);
    }
  }

  function onDelete(id) {
    const filteredArray = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredArray);
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onContact={addContact} />
      <SearchBox onFilter={onFilter} />
      <ContactList contact={contacts} onDelete={onDelete} />
    </div>
  );
}
