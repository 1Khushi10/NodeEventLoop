process.nextTick(()=>
{console.log("This is nextTick 1")})

process.nextTick(()=>{
    console.log("This is nextTick 2");
    process.nextTick(()=>console.log("This is inner nextTick inside nextTick 2"))
})

Promise.resolve().then(()=>{
    console.log("This is Promise 1")
})

Promise.resolve().then(()=>{
    console.log("This is Promise 2");
    process.nextTick(()=>{console.log("This is NextTick 4 inside promise")})
})
Promise.resolve().then(()=>{
    console.log("This is Promise 3")
})

process.nextTick(()=>{
    console.log("This is last nextTick")
})



