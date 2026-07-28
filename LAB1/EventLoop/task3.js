console.log("1.start");
setTimeout(()=>console.log("2. setTimeout"), 1);
setImmediate(()=>console.log("3. setImmediate"));
process.nextTick(()=>console.log("4: nextTick"));
console.log("5: end");
//In most process Timeout and Immediate output sequence is Unpredictable but next tick always have the first priority among three.