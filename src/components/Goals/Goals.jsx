import styles from './Goals.module.css'
export default function Goals({value,goalId,deleteItem}){
    return (
        <li className={styles.goalItem} onClick={()=>deleteItem(goalId)}>
            {value}
            {console.log(goalId)}
        </li>
    )
}