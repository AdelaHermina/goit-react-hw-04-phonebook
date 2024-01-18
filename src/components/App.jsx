import React, { useState, useEffect } from 'react';
import ContactForm from './Phonebook/ContactForm';
import ContactList from './Phonebook/ContactList';
import Filter from './Phonebook/Filter';
import styles from './Phonebook/Contact.module.css';

const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    if (contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in your contacts.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <div className={styles.App}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <Filter value={filter} onChange={handleFilterChange} />
      <h2>Contacts</h2>
      <ContactList contacts={getFilteredContacts()} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
