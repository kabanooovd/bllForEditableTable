import React from 'react';
import './App.css';
import { EditMode } from './components/EditMode';
import { ViewMode } from './components/ViewMode';

const incomeList = [
  {
    name:"series",
    title: "Серия",
    type: "string",
    mandatory: true,
    mappingToPersonProductGroup: null,
    constraint: null,
  },
  {
    name:"number",
    title: "Номер",
    type: "string",
    mandatory: true,
    mappingToPersonProductGroup: null,
    constraint: null,
  },
  {
    name:"issuedby",
    title: "Кем выдан",
    type: "string",
    mandatory: true,
    mappingToPersonProductGroup: null,
    constraint: null,
  },
]

function App() {
  const tableHeaders = ['Атрибут', 'Значение', 'Тип', 'Mandatory', 'Constraint']
  const [mode, setMode] = React.useState('view')
  const [properties, setProperties] = React.useState([])
  React.useState(() => {setProperties(incomeList.map((el, idx) => ({...el, id: `${idx}`})))}, [])
  const onSaveProperties = () => {
    setProperties(properties)
    setMode('view')
  }
  return (
    <div className="App">
      <button onClick={() => setMode('view')}>VIEW</button>
      <button onClick={() => setMode('edit')}>EDIT</button>
      {mode === 'edit' && <button onClick={onSaveProperties}>SAVE</button>}
      <div>
        {mode === 'edit' && <EditMode editModeList={properties} tableHeaders={tableHeaders} setProperties={setProperties}/>}
        {mode === 'view' && <ViewMode viewModeList={properties} tableHeaders={tableHeaders} />}
      </div>
    </div>
  );
}

export default App;
