import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div key={id} className={css.container}>
      <h3>
        <IoPerson /> {name}
      </h3>
      <p>
        <BsFillTelephoneFill /> {number}
      </p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
