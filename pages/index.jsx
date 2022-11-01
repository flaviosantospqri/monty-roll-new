import { useState } from "react";
import Door from "../components/Door";
import DoorModel from "../model/door";

import {createListDoor} from "../functions/doors"

export default function Home() {
  
  
  const  [door, setDoor] = useState(new DoorModel(1))
  
  console.log(createListDoor(3,2))

  
  
  return (
    <div style={{display: "flex"}}>
      <Door value={door} onChange={newDoor => setDoor(newDoor)}/>
    </div>
  )
}
