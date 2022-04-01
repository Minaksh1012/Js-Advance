// CREATING NEW MAP
// const map1=new Map()
// console.log(map1)


// INSERTING ITEMS TO MAP with the help of set()method
// let map1=new Map()
// map1.set('info',{Name:'Minakshi',age :23})
// console.log(map1)


// Map with object key
// let map2 =new Map()
// let obj={}
// map2.set(obj,{name:"minakshi",lastName:"Dhangare"})
// console.log(map2)



// ACCESS MAP
// let map1=new Map()
// map1.set('dic',{even:456,odd:5})
// console.log(map1.get('dic'))

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // access the elements of a Map
// console.log(map1.get('info')); // {name: "Jack", age: "26"}


// CHECK MAP ELEMENTS with has ()
// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // check if an element is in Set
// console.log(map1.has('info')); // true


// removing element from MAP with delete()
// let map1=new Map()
// map1.set('info',{name:'minakshi',age :23})
// map1.delete('adress')
// console.log(map1)//{'info'=>{name:'minakshi',age:'23'}}
// map1.delete('info')
// console .log(map1)//Map{}



// removing element from Map with clear()
// let map2=new Map()
// map2.set('info',{name:'minakshi',age:23})
// map2.clear()
// console.log(map2)


// Map size 
// let map1=new Map()
// map1.set("info",{Name:"namu",age:23})
// map1.set('sirname',{LastName:"dhangare"})
// console.log(map1.size)


// iterating the map with using for...of loop or forEach()
// let map1=new Map()
// map1.set('name','minakshi')
// map1.set('education','BE')
// for(let [key,value] of map1 ){
//     console.log(key+'- '+ value)
// }


// let map2=new Map()
// map2.set('frdName','suraj')
// map2.set('sirname','Dhangare')
// map2.set('frdsirname','Lokhande')
// for(let [key,value]of map2){
//     console.log(map2)
//     break
// }


// iterating the map with forEach()
// let map1=new Map()
// map1.set('name','minakshi')
// map1.set('LastName',"Dhangare")
// map1.forEach(function(key,value){
// console.log(key+'- '+value)
// })



// keys()
// let map1=new Map()
// map1.set('name','miankshi')
// map1.set('LastName','dhangare')
// for(let key of map1.keys()){
// console.log(key)
// }

// values()
// let map2=new Map()
// map2.set("EvenNumbers",666)
// map2.set("oddNumbers",7777)
// for(let values of map2.values()){
//     console.log(values)
// }


// entries()
// let map1=new Map()
// map1.set('n','nth value')
// map1.set('co-founder','abhishek gupta')
// for(let elem of map1.entries()){
//     console.log(`${elem[0]}:${elem[1]}`)
// }


