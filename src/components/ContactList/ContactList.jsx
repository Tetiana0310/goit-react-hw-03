import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className={css.contactsWrapper}>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}
