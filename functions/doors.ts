import DoorModel from "../model/door";

export function createListDoor(units: number, selected: number): DoorModel[]{

    return Array.from({length: units}, (_, i) =>{
        const number = i + 1
        
        const haveGift = number === selected

        return new DoorModel(number, haveGift)

    })
}

export function updateDoors(doors: DoorModel[], doorUpdate: DoorModel){
    return doors.map(doorInitial => {
        const equalUpdate = doorInitial.number === doorUpdate.number

        if(equalUpdate){
            return doorUpdate
        }else{
            return doorUpdate.isOpen ? doorInitial : doorInitial.unSelected()
        }
    })
}