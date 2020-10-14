/* Constructor Function
***Constructors are defined with capitalize name to  distinguesh them from other
***functions that are not constructors
***Constructors use keyword this to set properties of the object they will create
***Inside the constructor,this keyword refers to new object it will create   
***Constructor defined properties and behavios instead of returning a value as
***the function might* */
//create constructor with recives parameter
function Dog(name,color){

    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
//use constructor create new object 

const hound = new Dog('diggy','brown');
console.log(`hound: ${hound}`);
//use instanceof verify variable
console.log(`hound is instanceof Dog :${hound instanceof Dog}`);
let propArr = [];
//access throug property of hound with forin loop
for(let prop in hound){
    //verifies property of hound with hasOwnProperty()
    if(hound.hasOwnProperty(prop)){
        propArr.push(prop);
    }
}
console.log(`propArr: ${propArr}`);

