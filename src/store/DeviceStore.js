import {makeAutoObservable} from 'mobx'

// We use constructor when we make object of class
export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Frige'},
            {id: 2, name: 'Smartphone'},
            {id: 3, name: 'Laptops'},
            {id: 4, name: 'TV'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
            {id: 5, name: 'Aser'},
        ]
        this._devices = [
            {id: 1, name: '12 pro', price: 1000, rating: 5, img: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m33-1.jpg'},
            {id: 3, name: '13 pro', price: 1500, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWK95-oQQDSMnDbjjKo7c4zLCc8hB25EXwvw&usqp=CAU'},
            {id: 4, name: 'T9000', price: 500, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDl8dALYoyIox42vSoy0Vcvkn8dE7zOraD6g&usqp=CAU'},
            {id: 5, name: 'T10000', price: 700, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kIWF7OUJHcova4fY6Hyl6omUGs_CyLFOAQ&usqp=CAU'},
            {id: 6, name: 'Galaxy Note 5', price: 300, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7357dToTBZoPGXIMCDjGZHWZWrtBHBhXngw&usqp=CAU'}
        ]

        this._selectedType = {}
        this._selectedBrand = {}

        // func from mobx which follow the changes of variables (this.) and rerender them
        makeAutoObservable(this)
    }
    //There are actions (this is function which change state)
    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }


    // This is computed func or(getters) to get variables
    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}