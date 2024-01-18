import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddContact({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="tel" name="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;

