
import singleton from './singleton.js';

const obj1 = singleton.getInstance({name : 'Majid', version : '1'});
console.log('obj1',obj1);

const obj2 = singleton.getInstance({name : "Hussain", version : '2'});
console.log('obj2',obj2);

console.log('obj1 === obj2',obj1 === obj2);