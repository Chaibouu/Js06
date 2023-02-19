function randomNumber(){
   var min = 1;
   var max = 11;
   var result = Math.floor((Math.random() * (max - min)) + min);
   console.log(result);
}
randomNumber();
module.exports = randomNumber;