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
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts =
    contacts?.filter(
      (contact) =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    ) || [];

  function addContact(object) {
    object.id = nanoid();
    setContacts([...contacts, object]);
  }

  function onDelete(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onContact={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={onDelete} />
    </div>
  );
}
