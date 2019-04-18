console.log("connected");
var random = Math.floor(Math.random()*100+1)

function guess(number){
    if (number > random){
        return "Too High"
    }else if (number < random){
        return "Too Low"
    }else if (number == random){// 3 = will pass this in html???? not sure why
        return random + "! you got it"
    }else{
        return "ERROR!!!!"
    }
}
var attempt = [1,2,3,4,5,6,7]
function go(arr) {
    // var out = document.getElementById("output");
    var x = [];
    for(let i = 0; i <arr.length; i++)
        return arr[i]
    // out.innerHTML = x;
}
// console.log(go(attempt))    ;

function buttonPress(){
    var Text1 = document.getElementById("Text1").value;
        document.getElementById("answer").innerHTML = guess(Text1);
}
console.log(random);
// console.log(guess(100));
// console.log(guess(75));
// console.log(guess(50));
// console.log(guess(25));
// console.log(guess(0));
// console.log(guess("e"));
