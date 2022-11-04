import { useState } from "react";
import Door from "../components/Door";

import { createListDoor, updateDoors } from "../functions/doors"

export default function Home() {


  const [doors, setDoors] = useState(createListDoor(3, 3))

  function renderDors() {
    return doors.map(door => {
      return <Door key={door.number} value={door}
        onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
    })
  }


  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {renderDors()}
    </div>
  )
}
