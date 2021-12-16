const john ={
    name: "john wade",
    yearOfBirth:1988,
    country: "England"
}
const rimple={
name: "rimple",
yearOfBirth:1999,
country: "India"
}


const getDetails= function(currentYear){
    console.log(this.name);
    console.log(currentYear-this.yearOfBirth+" years Old");
    console.log(this.country);
}

const btn= document.querySelector(".btn");
btn.addEventListener("click",getDetails.bind(john,2021));
console.log(getDetails.bind(john));

getDetails.bind(john,2021)();

getDetails.call(rimple,2021);

getDetails.apply(rimple, [2021]);