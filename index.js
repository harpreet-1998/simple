// const john ={
//     name: "john wade",
//     yearOfBirth:1988,
//     country: "England"
// }
// const rimple={
// name: "rimple",
// yearOfBirth:1999,
// country: "India"
// }


// const getDetails= function(currentYear){
//     console.log(this.name);
//     console.log(currentYear-this.yearOfBirth+" years Old");
//     console.log(this.country);
// }

// const btn= document.querySelector(".btn");
// btn.addEventListener("click",getDetails.bind(john,2021));
// console.log(getDetails.bind(john));

// getDetails.bind(john,2021)();

// getDetails.call(rimple,2021);

// getDetails.apply(rimple, [2021]);


function displayCallback(res){
console.log(JSON.parse(res));
}

// function getVCDetails(calback){
//     let request= new XMLHttpRequest();
//     request.open('GET', "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=148023&date=16-12-2021");
//     request.onload=function(){
//       if(this.response){
//           console.log('hello');
//           calback(this.response);
          
//       }else{
//           calback("Error"+request.status);
//       }
//     }
//     request.send();

// }

// getVCDetails(displayCallback);


const myPromise= new Promise((reslove,reject)=>{
    let request= new XMLHttpRequest();
    request.open('GET', "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=148023&date=16-12-2021");
    request.onload=function(){
      if(this.response){
          
          reslove(this.response);
      }else{
           reject("Error"+request.status);
      }
    }
    request.send();
});


myPromise.then(
    (value)=>{ displayCallback(value);
    }
).catch(error=>{
    displayCallback(error);
})



 async function vsf(){
   
        const centers= await fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=148023&date=16-12-2021");
        console.log(await centers.json());
      
}

vsf();


const mypromise=new Promise((reslove,reject)=>{
  setTimeout(()=>{reslove("hello after 4 Second")},4000);
});
mypromise.then(res=>{
    console.log(res)
}).catch(error=>{
    console.log(error);
})