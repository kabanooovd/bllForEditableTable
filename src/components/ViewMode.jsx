const ceilStyles = {
  padding: '10px 20px',
}

export const ViewMode = ({ viewModeList, tableHeaders }) => {
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
          viewModeList.map(({
            name, 
            title, 
            type, 
            mandatory, 
            // mappingToPersonProductGroup, 
            constraint, 
            id
          }) => {
            return (
              <tr key={id}>
                <td style={ceilStyles}>{`${name}`}</td>
                <td style={ceilStyles}>{`${title}`}</td>
                <td style={ceilStyles}>{`${type}`}</td>
                <td style={ceilStyles}>{`${mandatory}`}</td>
                <td style={ceilStyles}>{`${constraint}`}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  </div>
}