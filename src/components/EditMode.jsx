import { SuperInput } from "./SuperInput"

const ceilStyles = {
  padding: '10px 20px',
}


export const EditMode = ({ editModeList, setProperties, tableHeaders }) => {
  return <div>
    <table style={{border: '1px solid black'}}>
      <thead>
          <tr>
            {tableHeaders?.map((el, idx) => {
              return (
                <th key={idx} style={ceilStyles}>
                  {el}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
        {
          editModeList.map(({
            name, 
            title, 
            type, 
            mandatory, 
            constraint, 
            id
          }) => {
            const onChange = (e) => setProperties(prev => prev.map(el => el.id === id ? {...el, [e.target.name]: e.target.value } : el))
            const onCheckNull = (val) => val ? val : ""
            return (
              <tr key={id}>
                <td><SuperInput name={'name'} value={`${name}`} onChange={onChange} /></td>
                <td><SuperInput name={'title'} value={`${title}`} onChange={onChange} /></td>
                <td><SuperInput name={'type'} value={`${type}`} onChange={onChange} options={['string', 'boolean']} /></td>
                <td><SuperInput name={'mandatory'} value={`${mandatory}`} onChange={onChange} options={[true, false]} /></td>
                <td><SuperInput name={'constraint'} value={`${onCheckNull(constraint)}`} onChange={onChange} /></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  </div>
}