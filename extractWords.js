
function extractWords(){
  var phrase = "Voici l'exemple de la chaines";
  var  container = phrase.split(" ");
return  container;
   
}
console.log(extractWords()); 
module.exports = extractWords;
