const message: string = "Welcome to Node Senior Lab!"; //global scope
function printMessage(message:string){ //functional scope
const msg:string="sample message" //block scope -> declared using const
console.log("the message is ",message)

}
printMessage(message)

