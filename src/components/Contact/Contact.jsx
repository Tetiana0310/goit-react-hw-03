import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "../Contact/Contact.module.css"; 

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.contactList}>
        <p className={css.contactText}>
          <IoPerson /> {name}
        </p>
        <p>
          <BsFillTelephoneFill /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

