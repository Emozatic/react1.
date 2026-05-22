import "./App.css";
import ConditionPrice from "./ConditionPrice";

function App(){
  return (
    <>
    <h1>Hello World!</h1>
    <ConditionPrice title="phone" price={10000} style={{ color: 'blue' }} />
    </>
  )
}
export default App;