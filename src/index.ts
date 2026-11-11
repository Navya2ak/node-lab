var obj:any={
name:"navya",
value:function(){
   console.log(this.name) //normal function get the object value
},
// nameValue:()=>{
//     console.log(this.name) // arrow function do not get the this  value, that will search for the surrounding Object value
// }
}

obj.value()