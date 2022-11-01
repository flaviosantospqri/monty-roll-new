import { useState } from "react";
import Door from "../components/Door";
import DoorModel from "../model/door";


export default function Home() {

  const  [door, setDoor] = useState(new DoorModel(1))

  return (
    <div style={{display: "flex"}}>
      <Door Door={door}/>
    </div>
  )
}
