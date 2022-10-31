import styles from "../styles/Door.module.css"

export default function Door(props) {
   const selected = props.select ? styles.select : ''

    return (
        <div className={styles.area}>
            <div className={`${styles.frame} ${styles.select}`}>
                <div className={styles.Door}>
                    <div className={styles.numero}>3</div>
                    <div className={styles.door_handle}></div>
                </div>
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}