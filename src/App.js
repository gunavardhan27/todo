import InputElement from "./components/InputElement/InputElement";
import './App.css'
import { useState } from "react";
function App() {
  const [data,set] = useState([])
    function addElement(value){
        set((prev)=>{
            //const list = [...prev]
            if(value){
                return [...prev,{value:value,id:Math.random().toString()}]
            }
            return [...prev]
        })
    }
    function onDeleteItem(value){
      set((prev)=>{
        const updated = prev.filter((i)=>i.id !== value)
        return updated
      })
    }
  return (
    <div className="App">
      <InputElement add={addElement} data={data} onDelete={onDeleteItem} />
    </div>
  );
}

export default App;
