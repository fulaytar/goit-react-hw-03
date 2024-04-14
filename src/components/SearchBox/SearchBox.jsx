import css from "./SearchBox.module.css";

export default function SearchBox({ onFilter }) {
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
        onChange={onFilter}
      />
    </div>
  );
}
