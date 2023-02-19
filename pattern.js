
function pattern(){
    var tab = "";
    for(var i=0; i < 5; i++){
        for(var j=0; j <= i; j++){
                tab =tab + "* ";
            }
            tab =tab + "\n";
        }
           
    console.log(tab);
}
pattern();
module.exports = pattern;