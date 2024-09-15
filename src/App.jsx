
import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const baseContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return baseContacts;
  });

  const [filter, setFilter] = useState("");

   useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    if (contacts.length === 0) {
      localStorage.removeItem("contacts");
    }
  }, [contacts]);

  const addContacts = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (useId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== useId);
    });

    if (localStorage.getItem("contacts").length === 0) {
      console.log(contacts);
      localStorage.clear();
    }
  };

  const findedContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddBtn={addContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
       <ContactList contacts={findedContacts} onDelete={deleteContact} />
    </div>
  )
}