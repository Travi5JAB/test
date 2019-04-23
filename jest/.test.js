describe("coffee", () => {
    test ("drink coffe if tired", () => {
        expect(coffee(true)).toBe("drink coffee")
        expect(coffee(false)).toBe("keep working")
    })
})
// Write the test for a function that returns "drink coffee"
// if you are tired and "keep working"
// if you are not tired. Write the function and make the test pass.
var tired = true
function coffee(str){
    if (str){
        return "drink coffee"
    }else if (str === false){
        return "keep working"
    }else{
        return "ERROR"
    }
}
/////////////////////////////////////////////////////////////////////


describe("stress", () => {
    test ("drink coffe if tired", () => {
        expect(stress(true)).toBe("relax")
        expect(stress(false)).toBe("keep going")
    })
})
// Write the test for a function that returns
// "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function and make the test pass.

var stressed = true
function stress(str){
    if (str){
        return "relax"
    }else if (str === false){
        return "keep going"
    }else{
        return "ERROR"
    }
}
///////////////////////////////////////////////////////////////////////


describe("budget", () => {
    test ("drink coffe if tired", () => {
        expect(budget(inBudget)).toBe("in budget")

    })
})
// Write the test for a function that returns "in budget"
// if a price is lower than $300. Write the function and make the test pass.


var inBudget = 299
function budget(cost){
    if(cost<300){
        return "in budget"

    }
}

///////////////////////////////////////////////////////////////////////


describe("lessThan", () => {
    test ("which number is higher", () => {
        expect(lessThan(10,7)).toBe("10 is greater")
        expect(lessThan(5,7)).toBe("7 is greater")
        expect(lessThan(5,5)).toBe("5 is equal to 5")
        expect(lessThan("a",5)).toBe("NOT A NUMBER")

    })
})
// Write the test for a function that takes in two arguments(numbers)
// and returns the smaller number.
// Write the function and make the test pass.

function lessThan(num1,num2){
    if(typeof num1 != "number" || typeof num2 != "number"){
        return "NOT A NUMBER"
    }else if(num1 > num2){
        return num1+ " is greater"
    }else if (num1 < num2){
        return num2+ " is greater"
    }else if (num1 === num2){
        return num2+ " is equal to " +num1
    }
}


///////////////////////////////////////////////////////////////////////


describe("odds", () => {
    test ("odd or even", () => {
        expect(odds(3)).toBe("odd")
        expect(odds(4)).toBe("even")
        expect(odds(5)).toBe("odd")
        expect(odds(6)).toBe("even")

    })
})
// Write the test for a function that takes
// in one argument(number) and returns
// whether the number is odd.
// Write the function and make the test pass.

// function odds(num){
//     if(num === 0){
//         return "number is 0"
//     }else if(num<0)
//     }else if(num % 2 === 1){
//         return "odd"
//     }else if(num % 2 === 0){
//         return "even"
//     }
// }
function odds(num) {
    if(num % 2 !=0){
        return "odd"
    }else {
        return "even"
        }
    }




    ///////////////////////////////////////////////////////////////////////


    describe("fruitColor", () => {
        test ("what color is that fruit?", () => {
            expect(fruitColor("banana")).toBe("yellow")
            expect(fruitColor("apple")).toBe("red")
            expect(fruitColor("grape")).toBe("purple")
            expect(fruitColor("Coconut")).toBe("Enter Valid Fruit")

        })
    })

    // Write the test for a function
    // that takes in a fruit and returns yellow if the argument is banana,
    // red if apple and purple if grape.
    // Write the function and make the test pass.
    //

    function fruitColor(str){
        if(str === "banana"){
            return "yellow"
        }else if(str === "apple"){
            return "red"
        }else if(str === "grape"){
            return "purple"
        }else{
            return "Enter Valid Fruit"
        }
    }


///////////////////////////////////////////////////////////////////////


        describe("rick", () => {
            test ("what color is that fruit?", () => {
                expect(rick()).toBe("Morty")

            })
        })


// Write the test for a function
// called Rick that returns "Morty".
// Write the function and make the test pass.

function rick(){
    return "Morty"
}


///////////////////////////////////////////////////////////////////////


        describe("greeter", () => {
            test ("greets person who enters name", () => {
                expect(greeter("Chris")).toBe(`Welcome, Chris`)

            })
        })
function greeter (name) {
    return `Welcome, ${name}`
}


// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function and make the test pass.






///////////////////////////////////////////////////////////////////////


        describe("double", () => {
            test ("doubles input", () => {
                expect(double(9)).toBe(18)

            })
        })
function double (num) {
    return num * 2
}

// Write the test for a function called double that takes an number as an argument and returns the result of that number multiplied by 2. Write the function and make the test pass.
//

///////////////////////////////////////////////////////////////////////


        describe("multiply", () => {
            test ("number times number", () => {
                expect(multiply(9,5)).toBe(45)

            })
        })
function multiply (n1,n2){
    return n1 * n2
}


// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other. Write the function and make the test pass.


///////////////////////////////////////////////////////////////////////


        describe("divisibleBy", () => {
            test ("checks to see if number is evenly divided by second number", () => {
                expect(divisibleBy(9,5)).toBe("Not evenly divisible")
                expect(divisibleBy(10,5)).toBe("Evenly divisible")


            })
        })
function divisibleBy (num1, num2) {
    if (num1 % num2 ===0) {
        return "Evenly divisible"
    } else {
        return "Not evenly divisible"
    }
}





        //
        //
        // Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5". Write the function and make the test pass.






///////////////////////////////////////////////////////////////////////


        describe("describeProduct", () => {
            test ("takes product argument and returns name and cost", () => {
                expect(describeProduct(product)).toBe("The product is a chair. It costs $14.99.")

                    })
                })

var product = { name: "chair", price: 14.99 }

function describeProduct(arr){
    var {name,price}=arr
    return `The product is a ${name}. It costs $${price}.`
}
                //
                // Consider this variable: var product = { name: "chair", price: 14.99 } Write the test for a function called describeProduct takes product as an argument and returns "The product is a chair. It costs $14.99". Write the function and make the test pass.
