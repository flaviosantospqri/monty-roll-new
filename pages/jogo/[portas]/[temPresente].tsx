/* eslint-disable react-hooks/rules-of-hooks */
import styles from "../../../styles/Jogo.module.css"

import { useEffect, useState } from "react"
import Door from "../../../components/Door"
import { createListDoor, updateDoors } from "../../../functions/doors"
import Link from "next/link"
import { useRouter } from "next/router"
export default function jogo() {

    const router = useRouter();
 
    const [doors, setDoors] = useState([])
    const [status, setStatus] = useState(true)

    useEffect(()=>{
        const {portas, temPresente} = router?.query

        const numberDoorIsValid = Number(portas) >= 3 && Number(portas) <= 100
        const whereGiftIsValid = Number(temPresente) >=1 && Number(temPresente) <= Number(portas)

        setStatus(numberDoorIsValid && whereGiftIsValid)
    }, [doors])

    useEffect(() => {
        const {portas, temPresente} = router?.query
        setDoors(createListDoor(Number(portas), Number(temPresente)))
    }, [router?.query])

    function renderDors() {
        return status && doors.map(door => {
            return <Door key={door.number} value={door}
                onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
        })
    }

    return (
        <div id={styles.jogo}>
            <div id={styles.portas}>
                {renderDors()}

            </div>
            <div id={styles.botoes}>
                <Link href={"/"}>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}