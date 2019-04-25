class Car{
    constructor(speed="0km/h"){
        this.wheels = 4
        this.modelYear = 1992
        this.lights = "OFF"
        this.signal = "OFF"
        this. speed = speed
    }
    lightsOn(){
        this.lights = "ON"
        return this.lights
    }
    lightsOff(){
        this.lights = "OFF"
        return this.lights
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
}
class Tesla extends Car{
    constructor(){
        super()
        this.modelYear = 2019

    }
}
class Tata extends Car{
    constructor(speed){
        super(speed)
        this.modelYear = 1984
    }
}
class Toyota extends Car{
    constructor(speed){
        super(speed)
        this.modelYear = 1980
    }
}
var myCar = new Car()
var myTesla = new Tesla()
var myToyota = new Toyota()
// myTesla.sigLeft()
// myTesla.lightsOn()
// console.log(myCar);
// console.log(myTesla);
// console.log(myToyota);
// console.log(myTesla.lightsOn())
// console.log(myTesla.lightsOff())
// console.log(myTesla.sigLeft());


///// do next!!!!!!!! speed  of car
