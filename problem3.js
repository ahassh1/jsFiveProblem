
function checkDigitsInName(name){
   if(typeof name !== 'string'){
      return 'Invalid input'
   }
   let containsDigit = false;
   for(let i = 0; i< name.length; i++ ){
      let char = name[i];
     if(!isNaN(char) && char !== ""){
      containsDigit =true;
      break;
     }
   //   if(char >= "0" && char <= "9"){
   //    containsDigit = true;
   //    break;
     }
   }
   return containsDigit;
}
  
const result = checkDigitsInName('polash123');
console.log(result)