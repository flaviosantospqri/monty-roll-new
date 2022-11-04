
import styles from "../styles/Door.module.css"
import DoorModel from "../model/door"
import Gift from "../components/Gift"


interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}


export default function Door(props: DoorProps) {

    const door = props.value
    const isSelected = door.isSelected && !door.isOpen ? styles.isSelected : ''

    const alterateSelect = _ => {
        props.onChange(door.alterateSelect())
    }
    const open = e => {
        e.stopPropagation()
        props.onChange(door.open())
    }

    function renderDoor() {
        return (
            <div className={styles.Door}>
                <div className={styles.numero}>{door.number}</div>
                <div className={styles.door_handle} onClick={open}></div>
            </div>
        )
    }


    return (
        <div className={styles.area} onClick={alterateSelect}>
            <div className={`${styles.frame} ${isSelected}`}>
                {door.isClosed ?
                    renderDoor() : door.haveGift ?
                        <Gift/> : false
                }
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}