import { useState } from 'react'
import './App.css'
import { CardRender } from './components/store/store'

function App() {
  const [state, setState] = useState('view_module')

  function clickHandler () {
    if (state === 'view_list') {setState('view_module')} 
    else {setState('view_list')}
    }


  return (
    <div>
      <button className="material-icons" onClick={clickHandler}> {state} </button>
      <CardRender style={state}/>
    </div>
  )
}

export default App
