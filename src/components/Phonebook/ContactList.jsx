

const ContactList = ({ contacts, onDeleteContact }) => {
  if (!contacts || contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
