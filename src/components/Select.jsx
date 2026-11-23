function Select({
  label,
  name,
  value,
  onChange,
  options,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">
          Selecione...
        </option>

        {options.map((option) => {
          const valor =
            typeof option === "object"
              ? option.value
              : option;

          const texto =
            typeof option === "object"
              ? option.label
              : option;

          return (
            <option
              key={valor}
              value={valor}
            >
              {texto}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;