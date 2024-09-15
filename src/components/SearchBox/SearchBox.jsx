import css from "../SearchBox/SearchBox.module.css"


export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}