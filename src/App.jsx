import './App.css'
import { Calculator } from './Components/Calculator/Calculator'
import { Name } from './Components/Name/Name'
import { TabButton } from './Components/TabButton/TabButton'
import { Todo } from './Components/Todo/Todo'

function App() {

  return (
    <>
      <TabButton />
      <Name />
      <Calculator />
      <Todo />
    </>
  )
}

export default App
