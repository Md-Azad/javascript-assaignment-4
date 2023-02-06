/*
evenOdd function is written for taking a string input
and return even if the stirng's length is a even number otherwise odd.

*/

function evenOdd(str){
    if(typeof str !== "string"){
        return "please give a string input.";
    }
    else if(str.length%2 === 0 ){
        return "even";
    }
    else{
        return "odd"
    }
}
console.log(evenOdd(false));