//task1
// let city:string;
// city = "Київ";
// city = "Львів";
// let address:string = city;
// console.log(address);

//task2
// let num:any = Number(prompt("enter number"));
// function check(n):void{
//     console.log(n === 0?"number is 0":n%2 === 0?"number is even":"number is odd")
// }
// check(num);

//task3
// function max(n1:number,n2:number,...arg:number[]):number{
//     return Math.max.apply(null,arguments)
// }

//task4
// function getSqrt(n):void{
//     if(n === undefined){
//         console.log("enter something")
//     }else if(typeof n === "number"){
//         if(n>0){
//             console.log(`Квадратний корінь з ${n} = ${Math.sqrt(n)}`)
//         }else{
//             console.log("Введіть додатнє число")
//         } 
//     }else{
//         console.log("Повинно бути числове значення")
//     }
// }

// getSqrt(undefined);
// getSqrt(0);
// getSqrt("sfsf");
// getSqrt(9);


//task5
const wordList = document.querySelector("#wordList") as HTMLSpanElement;
const enterWord = document.querySelector("#enterWord") as HTMLInputElement;
const addWord = document.getElementById("addWord") as HTMLInputElement;
const clearList = document.getElementById("clearList") as HTMLInputElement;
const enterText = document.getElementById("enterText") as HTMLTextAreaElement;
const startCenzor = document.getElementById("startCenzor") as HTMLInputElement;
let badWords:Array<string> = [];


addWord.addEventListener("click",addBadWord)
function addBadWord():void{
    if(checkIsEmpty()){
        badWords.push(enterWord.value.toLowerCase())
    }
    enterWord.value = '';
    wordList.innerHTML = badWords.toString();
}

clearList.addEventListener("click",()=>{
    location.reload();
})


enterWord.addEventListener("input", checkIsEmpty)
function checkIsEmpty(){
    if(enterWord.value.length <=0){
        enterWord.style.cssText = "outline:1px solid red";
        return false;
    }else{
        enterWord.style.cssText = "outline:1px solid green";
        return true;
    }
}

function star(n){
    let res = "";
    for(let i = 0;i<n.length;i++){
        res+="*";
    }
    return res;
}

startCenzor.addEventListener("click",cenzor);
function cenzor(){
    enterText.addEventListener("input",()=>{enterText.style.cssText = "outline:1px solid green"})
    if(enterText.value.length <=0){
        enterText.style.cssText = "outline:1px solid red";
    }else{
        let result = enterText.value;
        for(let i = 0;i<badWords.length;i++){
            result = result.replace(new RegExp(badWords[i],"g"),star(badWords[i]));
            console.log(result);
        };
        enterText.value = result;
    }
    
}