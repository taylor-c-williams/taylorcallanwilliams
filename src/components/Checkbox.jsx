export default function Checkbox({ value, onChange }) {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
    </label>
  );
}
