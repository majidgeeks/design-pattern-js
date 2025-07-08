
// Example without using the Builder Design Pattern

class Car{
    constructor(make, model, color, transmission, sunroof){
       this.make = make;
       this.model = model;
       this.color = color;
       this.transmission = transmission;
       this.sunroof = sunroof;
    };
};

const car1 = new Car('Toyota', '2024', 'white', 'manual', true);
console.log('car1 Example without using the Builder Design Pattern',car1);

// Implementation of the above Example using Builder Design Pattern

class Car2{
    constructor(){
        this.make = '';
        this.model = '';
        this.color = '';
        this.transmission = null;
        this.sunroof = true;
    };
};

class CarBuilder{
   constructor(){
    this.car = new Car2();
   }
   setMake(make){
    this.car.make = make;
    return this;
   }
   setModel(model){
    this.car.model = model;
    return this;
   }
   setColor(color){
    this.car.color = color;
    return this;
   }
   setTransmission(transmission){
    this.car.transmission = transmission;
    return this;
   }
   setSunroof(sunroof){
    this.car.sunroof = sunroof;
    return this;
   };
   build(){
    return this.car;
   }
};

const myCar = new CarBuilder()
.setMake('Honda')
.setModel('2022')
.setColor('Red')
.setTransmission('Auto')
.setSunroof(true)
.build();

console.log('myCar using Builder Design Pattern',myCar)