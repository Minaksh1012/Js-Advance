// Promise having three state
// 1.pending=>start not complete yet
// 2.fulfilled=>completed
// 3.reject=>error
// n promise chainig we use then(),catch(),fetch()

// then()=>promiseObject(onfulfilled,onRejected)

// var s=false
// const countValue=new Promise(function(resolve,reject){
// if(s){
// console.log("resolved")
// }else{
//     console .log("rejected")
// }

// })



// With then()

// const countValue=new Promise(function(resolve,reject){
// resolve("promise resolved")
// })
// countValue
// .then(function successValue(result){
//     console.log(result)
// })
// .then(function successValue1(){
//     console.log("you can call multiple function this way")
// })

// With catch()=>its used when error occurs or rejected

