export const SuperInput = ({value, name, onChange, options}) => {
  return <>
    {!options && <input name={name} value={value} onChange={onChange} />}
    {options && <select name={name} value={value} onChange={onChange} options={options}>
        {options.map((opt, idx) => {
          return (
            <option key={idx}>{`${opt}`}</option>
          )
        })}
      </select>
    }
  </>
}