import "./App.css";
import Card from "./Card";

function App(){
  let hobby1= ["Playing Football", "Playing Cricket", "Playing Basketball", "Playing Volleyball"];
  let hobby2= ["Playing Football", "Playing Cricket"];
  let hobby3= ["Ludo", "Carrom"];
  return(
    <div>
      <Card name="Lucky" bio="I am a student" hobby1={hobby1}/>
      <Card name="Emo" bio="I am a doctor" hobby1={hobby2}/>
      <Card name="Rocky" bio="I am a Scientist" hobby1={hobby3}/>
    </div>
  )
}

export default App;