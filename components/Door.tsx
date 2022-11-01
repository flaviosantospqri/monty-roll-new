
import styles from "../styles/Door.module.css"
import DoorModel from "../model/door"


interface DoorProps{
    Door: DoorModel
}


export default function Door(props: DoorProps) {

   const { Door } = props 
   const isSelected = Door.isSelected ? styles.isSelected : ''

    return (
        <div className = {styles.area}>
            <div className={`${styles.frame} ${isSelected}`}>
                <div className={styles.Door}>
                    <div className={styles.numero}>{Door.number}</div>
                    <div className={styles.door_handle}></div>
                </div>
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}