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