import Card from "../components/Card"
import EntradaNumerica from "../components/EntradaNumerica"
import styles from "../styles/Form.module.css"
import Link from "next/link"
import { useState } from "react"


export default function Home() {

  const [numberDoors, setNumberDoors] = useState(0)
  const [whereGift, setwhereGift] = useState(0)



  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h2>Monty Roll</h2>
        </Card>

        <Card>
          <EntradaNumerica text="Quantidade de Portas" value={numberDoors} onChange={newNumberDoors => setNumberDoors(newNumberDoors)}>

          </EntradaNumerica>

        </Card>
      </div>
      <div>
        <Card>
          <EntradaNumerica text="Onde está o Presente" value={whereGift} onChange={newWhereGift => setwhereGift(newWhereGift)}>

          </EntradaNumerica>
        </Card>

        <Card bgcolor="#28a585">
          <Link href={`/jogo/${numberDoors}/${whereGift}`}>
            <h2 className={styles.Link}>Iniciar</h2>
          </Link>
        </Card>

      </div>
    </div>

  )
}
