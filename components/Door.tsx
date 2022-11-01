
import styles from "../styles/Door.module.css"
import DoorModel from "../model/door"


interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}


export default function Door(props: DoorProps) {

    const Door = props.value
    const isSelected = Door.isSelected && !Door.isOpen ? styles.isSelected : ''

    const alterateSelect = _ => {
        props.onChange(Door.alterateSelect())
    }
    const open = e => {
        e.stopPropagation()
        props.onChange(Door.open())
    }

    function renderDoor() {
        return (
            <div className={styles.Door}>
                <div className={styles.numero}>{Door.number}</div>
                <div className={styles.door_handle} onClick={open}></div>
            </div>
        )
    }


    return (
        <div className={styles.area} onClick={alterateSelect}>
            <div className={`${styles.frame} ${isSelected}`}>
                {Door.isOpen ? false : renderDoor()}
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}