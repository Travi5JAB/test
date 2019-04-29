class Car{
    constructor(){
        this.model = "car"
        this.wheels = 4
        this.modelYear = 1992
        this.lights = "OFF"
        this.signal = "OFF"
        this.speed = 0.0000000000000000000000000000001
        this.miles = 0
        this.lap = 0
        this.time = 0
    }
    lightsTog(){
        if(this.lights==="OFF"){
            this.lights = "ON"
            return this.lights
        }else{
            this.lights = "OFF"
            return this.lights
    }
}
    sigRight(){
        this.signal = "right"
        return this.signal
        // this.signal = "OFF"
    }
    sigLeft(){
        this.signal = "left"
        return this.signal
        // this.signal = "OFF"
    }
    accelerate(speedUP){
        this.speed =  this.speed + speedUP
        if(this.speed>200)
            this.speed = 0
            return this.speed
    }
    break(speedDown){
        this.speed = this.speed - speedDown
        if(this.speed<0)
            this.speed = 0
            return this.speed
    }
    miletracker(travel){
        this.miles = this.miles + travel
        this.lap = this.miles/2
        this.time = this.lap/this.speed
        return this.miles
    }
    // lapcounter(){
    //     this.lap = this.miles*2
    //     return this.lap
//     }
}
class Tesla extends Car{
    constructor(){
        super()
        this.modelYear = 2019
        this.model = "Tesla"
    }
}
class Tata extends Car{
    constructor(){
        super()
        this.modelYear = 1984
        this.model = "Tata"
    }
}
class Toyota extends Car{
    constructor(){
        super()
        this.modelYear = 2000
        this.model = "Toyota"

    }
}
class Tesla2 extends Car{
        constructor(){
            super()
            this.modelYear = 2017
            this.model = "Tesla"
        }
    }
class Tata2 extends Car{
        constructor(){
            super()
            this.wheels = 3
            this.modelYear = 1974
            this.model = "Tata"
            this.speed = 0
        }
    }
class Toyota2 extends Car{
        constructor(){
            super()
            this.modelYear = 1980
            this.model = "Toyota"

        }
}

var myCar = new Car()
var myTesla = new Tesla()
var myToyota = new Toyota()
var myTata = new Tata()
var myTesla2 = new Tesla2()
var myToyota2 = new Toyota2()
var myTata2 = new Tata2()

var myGarage = [myTesla,myToyota,myTata,myTesla2,myToyota2,myTata2]

yoC = (arr) => {
var {wheels, modelYear, lights, signal, speed} = arr
return newArr= arr.map(value => value.modelYear)
}

moC = (arr) => {
var {wheels, modelYear, lights, signal, speed} = arr
return newArr= arr.map(value => value.model)
}


// myTata2.accelerate(10)
// console.log(moC(myGarage),yoC(myGarage));
myToyota.accelerate(7)
myToyota.miletracker(500)

// console.log(myGarage);
// myTesla.accelerate(201)
// myTesla.break(7)
// myTata.accelerate(2)
// myTata.break(1.25)

// myToyota.break(5)
// console.log(myToyota.modelYear);
// myTesla.sigLeft()
// myTesla.lightsTog()
// console.log(myCar);
// console.log(myTesla);
console.log(myToyota);
// console.log(myTata2);
// console.log(myTesla.lightsOn())
// console.log(myTesla.lightsOff())
// console.log(myTesla.sigLeft());


///// do next!!!!!!!! speed  of car
