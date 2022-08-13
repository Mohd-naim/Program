
//  Use of let and const
let num = 7;
const day = 'The code day';
console.log(num, day);


// use of function
function isEven(input) {
    const even = input % 2 == 0;
    if (even)
        return 'even'
    else
        return 'Odd'
}
console.log(isEven(4));


//use of template litarals

age=24
const out = 'You are '+age+' Year olds'
console.log(out);

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
console.log(final);


//Arrays 
const per = ['view user','view report','download report','check report'];
const other_per = ['init transaction', 'delete user'];
console.log(...per,...other_per);
