
//  Use of let and const
let num = 7;
const day = 'The code day';
console.log(num, day);

console.log("<<<<<<<<<<<<<<--------------------------------------------------------------->>>>>>>>>>>>>>>");

// use of function
function isEven(input) {
    const even = input % 2 == 0;
    if (even)
        return 'even'
    else
        return 'Odd'
}
console.log(isEven(4));

console.log("<<<<<<<<<<<<<<--------------------------------------------------------------->>>>>>>>>>>>>>>");

//use of template litarals

age=24
const out = 'You are '+age+' Year olds'
console.log(out);

console.log("<<<<<<<<<<<<<<--------------------------------------------------------------->>>>>>>>>>>>>>>");

//shothand props
const name = 'Mohd'
const lname ='Naim'
let user1 = {name:name};
console.log(user1);


//spread /Rest

const user = {
    name :'Tony',
    age:12
}

const other = {
    hobby :'Coding',
    color:'greean'
}

let final = Object.assign({},user,other);

console.log({...user,...other});
console.log("<<<<<<<<<<<<<<--------------------------------------------------------------->>>>>>>>>>>>>>>");

console.log(final);


//Arrays 
const per = ['view user','view report','download report','check report'];
const other_per = ['init transaction', 'delete user'];
console.log("<<<<<<<<<<<<<<--------------------------------------------------------------->>>>>>>>>>>>>>>");

console.log(...per,...other_per);
console.log("<<<<<<<<<<<<<<--------------------------------------------------------------->>>>>>>>>>>>>>>");


console.log("<<<<<<<<<<<<<<--------------------------------------------------------------->>>>>>>>>>>>>>>");
//destructing   -----> Object Destructing 

const person = {
    favNum:"green",
    name1:"Naim",
    cars:['mercedes','toyoto']
}

// const {favNum,name1,cars}= person
// console.log(favNum,name1,cars);
const {cars,favNum,...other1}= person
console.log(other1);
console.log("<<<<<<<<<<<<<<--------------------------------------------------------------->>>>>>>>>>>>>>>");

// const {name1:Real, food='chawal' }= person
// console.log(favNum,name1,cars);
// console.log(Real,food);


console.log("<<<<<<<<<<<<<<--------------------------------------------------------------->>>>>>>>>>>>>>>");

const customer = {
    cus_nam:'tom',
    mobile:1234567890,
    email:'121@gmai.com',
    addres:{
        country:'India',
        city:'Hapur',
        pincod:'222221',
        street:'bhan'
}
}
const {...cust} =  customer
const {addres:{...addres}}= customer

console.log(cust);
console.log(addres);