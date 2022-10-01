// console.log(__dirname)
// setInterval(()=> {
//     console.log('hello world')
// }, 1000)

const os =require('os')

//info about user 
const user =os.userInfo()
console.log(user)


//method returns the system uptime in seconds

console.log(`the system uptime is  ${os.uptime()} seconds`)


const currentOs ={
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    fremem :os.freemem(),
}

console.log(currentOs)

