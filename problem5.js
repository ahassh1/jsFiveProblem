function waitingTime(arrry, serial){
    if(!Array.isArray(arrry)|| typeof serial !=="number"){
        return "invalid input";
    }
    let totalTime = 0;
   for(let i = 0; i<arrry.length; i++){
    totalTime +=arrry[i]
   }
   let avarageTime = Math.round( totalTime / arrry.length);
   let remainingPerson = serial -1- arrry.length;
   
   let remainingTime = 0;
   if(remainingPerson >0){
    remainingTime = remainingPerson *avarageTime;
   }
   return remainingTime;
}
let result = waitingTime([2,10,6,8,8],10);
console.log(result)