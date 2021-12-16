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
              reslove(JSON.parse(this.response));
          }else{
               reject("Error"+request.status);
          }
        }
        request.send();
   
   
});


// myPromise.then(
//     (value)=>{ displayCallback(value);
//     }
// ).catch(error=>{
//     displayCallback(error);
// })



 async function vsf(){
   
        const centers= await fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=148023&date=16-12-2021");
         const centerres=await centers.json();
        return  centerres;
      
}

const getId = new Promise((send, error) => { setTimeout(() => { send([1,2,34,4,55]); },2000) });
getId.then(result=> { console.log(result)} ).catch(e => { console.log('error'); });

const mypromise1=new Promise((reslove,reject)=>{
  setTimeout(()=>{reslove("hello after 4 Second")},4000);
});
// mypromise1.then(res=>{
//     console.log(res)
// }).catch(error=>{
//     console.log(error);
// })


Promise.all([mypromise1,vsf(),myPromise,getId]).then(res=>{
    console.log(res);
})

Promise.any([mypromise1,vsf(),myPromise,getId]).then(res=>{
    console.log(res);
})

Promise.race([mypromise1,vsf(),myPromise,getId]).then(res=>{
    console.log(res);
})