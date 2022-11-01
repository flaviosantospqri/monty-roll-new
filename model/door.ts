export default class DoorModel{
    private _number : number
    private _haveGift : boolean
    private _isOpen: boolean
    private _isSelected: boolean

    constructor(number, haveGift=false, isSelected= false, isOpen = false){
        this._number = number 
        this._haveGift = haveGift
        this._isSelected = isSelected
        this._isOpen = isOpen
    }

    get number(){
        return this._number
    }

    get haveGift(){
        return this._haveGift
    }

    get isOpen(){
        return this._isOpen
    }

    get isSelected(){
        return this._isSelected
    }

    alterateSelect(){
        const isSelected = !this._isSelected
        return new DoorModel(this.number, this.haveGift, isSelected, this._isOpen)
    }

    open(){
        const isOpen = true
        return new DoorModel(this.number, this.haveGift, this._isSelected, isOpen)
    }

    unSelected(){
        const isSelected = false
        return new DoorModel(this.number, this.haveGift, isSelected, this._isOpen)
    }
}