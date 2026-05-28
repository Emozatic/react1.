import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Title from "./Title";
export default function App(){
  return(
    <>
    <Header title="My App"/>
      <Title heading="My App Info" para="lorem ipsum dolor sit amet consectetur adipisicing elit."/>
    <Footer title="Documentation"/>
    </>
  )
}