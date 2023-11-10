import { useState } from "react"
import Goals from "../Goals/Goals";
import classes from './InputElement.module.css'
export default function InputElement({add,data,onDelete}){
    const [input,update] = useState('')
    
    function handleChange(val){
        update(val)
    }
    function handle(event){
        event.preventDefault()
        add(input)
    }
    return (
        <div>
            <form className={classes.form} onSubmit={handle}>
            <input onChange={(event)=>handleChange(event.target.value)} type='text'/>
            <button type="submit">Add Goal</button>
            
        </form>
        {data.length ? <ul>{data.map((i)=><Goals key={i.id} goalId={i.id} value={i.value} deleteItem={onDelete} />)}</ul> :<p>Add some tasks!</p>}
        </div>
        
    )
}   