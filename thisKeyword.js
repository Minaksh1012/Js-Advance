// this method   : Global Object

// var di={Name:"minakshi",lastName:"Dhangare",age:24,
// fullName:function(){
//     return(this.Name+" "+this.lastName)
    
//     }
//     // console.log(fullName)
// }
// // console.log(fullName)
// console.log(di[fullName])



// Alone this keword
// var a=this
// console.log(a)


// Use strict 
// "use strict"
// var a=this
// console.log(a)


// FUNCTION default
// function n(){
//     return this
// } 
// a=n()
// console.log(a)


// USE strict in function wirh this

// "use strict"
// function n(){
//     return this
// }
// a=n()
// console.log(a)






const person = {
    name: 'John',
    age: 30,

    // accessing name property by using this.name
    greet: function() { console.log('The name is' + ' ' + this.name); }
};

person.greet();






const person = {
    name: 'John',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};

person.greet();