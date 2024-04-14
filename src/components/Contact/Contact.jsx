import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { nanoid } from "nanoid";

export default function Contact({ info, onDelete }) {
  const id = nanoid();
  return (
    <div id={id} className={css.container}>
      <h3>
        <IoPerson /> {info.name}
      </h3>
      <p>
        <BsFillTelephoneFill /> {info.number}
      </p>
      <button className={css.btn} onClick={() => onDelete(info.id)}>
        Delete
      </button>
    </div>
  );
}
