import "./App.css"
import Message from "./Message"
function App(){
  return(
    <>
      <h1>My React App</h1>
      <Message message="Hello, World!" style="blue" />
      <Message message="Hello rocky" style="yellow" />
      <Message message="hello lucky" style="green" />
    </>
  )
}

export default App;