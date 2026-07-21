function sayHello(name){
    console.log('hello ${name}');
};
const sayHi = (name) => {
    console.log('Hi ${name}');
};
const findsum = (a,b) => {
    return a+b;
};
const sum = (a,b) => a+b;

sayHello("Anuj");
sayHi("Manju sinha");
console.log("sum=", findsum(5,6));
console.log("sum=", sum(5,6));