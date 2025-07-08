
const vehicel = {
    start(){
        console.log(`${this.name} is started`)
    },
    stop(){
       console.log(`${this.name} is stoped`)
    }
};

const car = Object.create(vehicel);
car.name = 'Suzuki Swift';

car.start();
car.stop();


const userPrototype = {
    login(){
        console.log(`${this.name} have loged in he is ${this.role}`)
    },
    logout(){
        console.log(`${this.name} have loged out`)
    }
};

const admin = Object.create(userPrototype);
admin.name = 'Majid';
admin.role = 'Developer'

const member = Object.create(userPrototype);
member.name = 'Client';
member.role = 'Purchaser';

admin.login();
admin.logout();

member.login();
member.logout()