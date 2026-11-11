const message: string = "Welcome to Node Senior Lab!"; //global scope
function printMessage(message: string) {
  //functional scope
  const msg: string = "sample messages"; //block scope -> declared using const
  console.log("the message is ", message);
  function getIt() {
    return msg;
  }

  return getIt;
}
const getValue:Function=printMessage(message);
const v1:string=getValue()
console.log(v1)

