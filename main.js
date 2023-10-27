let a=parseInt(prompt("enter the first number"));
let b=parseInt(prompt("enter the second number"));

let sum=(a,b,add)=>{
    add(a,b)
}

let add=(a,b)=>{
    let c=a+b;
    document.write(`The sum of the two number are ${c}`)
}
sum(a,b,add);