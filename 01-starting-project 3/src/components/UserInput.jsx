export default function UserInput({ name, label, onChangeInput, value }) {
  return (
    <section>
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        name={name}
        id={name}
        value={value}
        onChange={(event) => onChangeInput(name, event.target.value)}
        required
      />
    </section>
  );
}
