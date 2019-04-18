var pluralAnimal = ["sheep", "geese", "children", "people", "fish"]
var animalname = ["sheep", "goose","child","person","fish"]

//var noun = document.getElementById('Text2').value;

function pluralize(number, noun){

    if(animalname.includes(noun) && number > 1){
        return number + " " + pluralAnimal[(animalname.indexOf(noun))];
    }else if(pluralAnimal.includes(noun) && number == 1){
        return number + " " + animalname[(pluralAnimal.indexOf(noun))];
    }else if(number > 1){
        return number + " " + noun + "s";
    }else if(number == 1){
        return number + " " + noun;
    }else{
        return "Enter number , Animal Name"
    }

}
function buttonPress(){
var Text1 = document.getElementById("Text1").value;
var Text2 = document.getElementById("Text2").value;
    document.getElementById("answer").innerHTML = pluralize(Text1, Text2);
}
