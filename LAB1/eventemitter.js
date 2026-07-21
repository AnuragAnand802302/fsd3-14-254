import { EventEmitter } from "node:events";

const sayHi = (name) => {
  console.log(`${name} logged in`);
};

const task = new EventEmitter();

task.once("greet", () => {
  console.log("System started");
});
task.on("greet", sayHi);
task.on("greet", (name)=> {
  console.log(`${name} Starts working`)
})

task.emit("greet", "Rahul Singh");
task.off("greet", sayHi);
console.log();
task.emit("greet", "Manish Singh");
