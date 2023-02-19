function inverseNumber(a){
   if(a==0){
    console.log("0 n'a pas d'inverse");
   }
   else{
    console.log(1/a);
   }
}
inverseNumber(4);
inverseNumber(0);
module.exports = inverseNumber;