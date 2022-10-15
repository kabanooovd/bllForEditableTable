
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
            // mappingToPersonProductGroup, 
            constraint, 
            id
          }) => {
            const onChange = (e) => setProperties(prev => prev.map(el => el.id === id ? {...el, [e.target.name]: e.target.value } : el))
            return (
              <tr key={id}>
                <td><input name={'name'} value={`${name}`} onChange={onChange} /></td>
                <td><input name={'title'} value={`${title}`} onChange={onChange} /></td>
                <td><input name={'type'} value={`${type}`} onChange={onChange} /></td>
                <td><input name={'mandatory'} value={`${mandatory}`} onChange={onChange} /></td>
                <td><input name={'constraint'} value={`${constraint}`} onChange={onChange} /></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  </div>
}