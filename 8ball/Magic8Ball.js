console.log("Script Called");
var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?","Ask: what would an Australian do, then do the opposite"," Your answer here"]

function ball(){

    var i = answers.length

    var questions

    var random = Math.floor(Math.random()*i)

    console.log(answers[random]);

    document.getElementById("answer").innerHTML = answers[random];
}

// if (random === 0){
//     console.log(answers[0]);
//  }else if (random === 1){
//     console.log(answers[1]);
// }else if (random === 2){
//     console.log(answers[2]);
// }else if (random === 3){
//     console.log(answers[3]);
// }else if (random === 4){
//     console.log(answers[4]);
// }else if (random === 5){
//     console.log(answers[5]);
// }else {
//     console.log("TRY AGAIN LATER");
// }
