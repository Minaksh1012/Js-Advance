// Map
const users=[
    {FirstName:"Minakshi",LastName:"Dhangare",Age:23},
    {FirstName:"priti",LastName:"meshram",Age:22},
    {FirstName:"suraj",LastName:"lokhande",Age:25},
    {FirstName:"Likhita",LastName:"olikutti",Age:22},
    {FirstName:"raviraj",LastName:"Metkar",Age:23}
]
// const output=users.map((x)=>
//     x.FirstName+" "+x.LastName)
// console.log(output)


// const output=users.reduce(function(acc,curr){
// if(acc[curr.Age]){
// acc[curr.Age]=++acc[curr.Age]
// }else{
//     acc[curr.Age]=1
// }
// return acc
// },{})
// console.log(output)


const output=users.filter((x)=>x.Age<23)
// .map((x)=>x.FirstName)
console.log(output)