// import { useEffect, useState } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
// import initialContacts from './contacts.json';
import { useSelector } from 'react-redux';
import { selectContacts } from './redux/contactsSlice';
import { selectNameFilter } from './redux/filtersSlice';

export default function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem('saved-contacts');
  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return initialContacts;
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const contactFound = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // const addContact = newContact => {
  //   console.log('New contact was added', newContact);
  //   setContacts(prevContacts => {
  //     return [...prevContacts, newContact];
  //   });
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts => {
  //     return prevContacts.filter(contact => contact.id !== contactId);
  //   });
  // };

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
