import css from "../SearchBox/SearchBox.module.css"

export default function SearchBox({ onChange, value }) {
  return (
    <div className={css.container}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        className={css.input}
        id="filter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}