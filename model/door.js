export default class Door{
    #number 
    #haveGift
    #isOpen
    #isSelected

    constructor(number, haveGift=false, isSelected= false, isOpen = false){
        this.#number = number 
        this.#haveGift = haveGift
        this.#isOpen = isOpen
        this.#isSelected = isSelected
    }

    get number(){
        return this.#number
    }

    get haveGift(){
        return this.#haveGift
    }

    get isOpen(){
        return this.#isOpen
    }

    get isSelected(){
        return this.#isSelected
    }

    alterateSelect(){
        const selected = !this.selected
        return new Door(this.number, this.haveGift, selected, this.#isOpen)
    }

    open(){
        const isOpen = true
        return new Door(this.number, this.haveGift, this.selected, isOpen)
    }

    unSelected(){
        const selected = false
        return new Door(this.number, this.haveGift, selected, this.#isOpen)
    }
}