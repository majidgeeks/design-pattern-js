
// How The Components Interact With Each Other

// class Device{
//     turnOn(){}
//     turnOff(){}
// };

// class Tv extends Device{
//     turnOn(){
//         console.log('Tv on');
//     };
//     turnOff(){
//         console.log('Tv off');
//     };
// };

// class RemoteOnctrol{
//     constructor(device){
//         this.device = device;
//     }
//     turnOnDevice(){
//         this.device.turnOn();
//     };
//     turnOffDevice(){
//         this.device.turnOff();
//     }
// };

// const tv = new Tv();
// const remote = new RemoteOnctrol(tv);

// remote.turnOnDevice();
// remote.turnOffDevice();

//Example of the Bridge Pattern in JavaScript – Remote Control and Devices

// implementor

class Device{
   turnOff(){}
   turnOn(){}
};

// concrete implementor

class Tv extends Device{
    turnOn(){
        console.log('Tv is on')
    };
    turnOff(){
        console.log('Tv is off');
    }
};

class Radio extends Device{
    turnOn(){
        console.log('Radio is on');
    }
    turnOff(){
        console.log('Radio is off');
    }
};

class Remotecontrol{
    constructor(device){
      this.device = device;
    }
    turnOnDevice(){
        this.device.turnOn();
    }
    turnOffDevice(){
        this.device.turnOff();
    }
};

const tv = new Tv();
const radio = new Radio();

const tvRemote = new Remotecontrol(tv);
const radioRemote = new Remotecontrol(radio);

tvRemote.turnOnDevice();
tvRemote.turnOffDevice();

radioRemote.turnOnDevice();
radioRemote.turnOffDevice();


