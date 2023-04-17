const passwordEl = document.getElementById("password");
const copyEl = document.getElementById("copy");

const lengthEL = document.getElementById("length");
const upperEl = document.getElementById("upper");
const LowerEl = document.getElementById("lower");
const numbers = document.getElementById("number");
const symbols = document.getElementById("symbol");
const generate = document.getElementById("generate");


const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+}{|:";


function getUppercase(){
    return upper[Math.floor(Math.random() * upper.length)]
}
function getLowercase(){
    return lower[Math.floor(Math.random() * lower.length)]
}
function getNumbers(){
    return number[Math.floor(Math.random() * number.length)]
}
function getSymbols(){
    return symbol[Math.floor(Math.random() * symbol.length)]
}




function generatePassword(){
    const len = lengthEL.value;
    let password = " ";
    for(i=0; i<len; i++){
        const x = generateP();
        password += x;     
    }
    passwordEl.innerHTML = password;
    
}
function generateP(){
const ps = [];
    if(upperEl.checked){
        ps.push(getUppercase());
    }
    if(LowerEl.checked){
        ps.push(getLowercase());
    }
    if(numbers.checked){
        ps.push(getNumbers());
    }
    if(symbols.checked){
        ps.push(getSymbols());
    }
    // console.log(ps);

    return ps[Math.floor(Math.random() * ps.length)]

}

generate.addEventListener('click', generatePassword);

copyEl.addEventListener('click', (e)=>{
    const textarea =document.createElement("textarea");
    const password = passwordEl.innerText;

    if(!password){
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied");


})