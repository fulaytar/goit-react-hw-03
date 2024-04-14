import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contact, onDelete }) {
  return (
    <ul className={css.list}>
      {contact.map((element) => (
        <li key={element.id}>
          <Contact info={element} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
