import DoorModel from "../model/door";

export function createListDoor(units: number, selected: number): DoorModel[]{

    return Array.from({length: units}, (_, i) =>{
        const number = i + 1
        
        const haveGift = number === selected

        return new DoorModel(number, haveGift)

    })
}