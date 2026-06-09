console.log("Sync start")
process.nextTick(()=>{
    console.log("NextTick1")
})
Promise.resolve().then(()=>{
    console.log("Promise 1")
})
process.nextTick(()=>{
    console.log("NextTick after Promise 1")
})
Promise.resolve().then(()=>{
    console.log("Promise 2")
})
console.log("Sync End")