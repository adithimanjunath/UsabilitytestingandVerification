let people=["Adithi","Namrata","Praveen","Yamini"];
let isKayoComing=true;

//creation of promise
const Kayo= new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(isKayoComing){
            resolve("Kayo Arrived with Cake");
        }
        else{
            reject("Kayo can't come");
        }
    }, 4000);
});

const party = ()=>{
    Kayo.then((response) => {
        console.log(response);
        console.log("Party started");
        people.forEach((p)=>console.log(p + " Arrived"));
    });
};
party();

// in order to achieve synchronous behavior while consuming the promise in ES6, we can't directly use async and await
// as they inherently introduce asynchronous behavior. 
// we can use .then() and .catch() methods synchronously.
