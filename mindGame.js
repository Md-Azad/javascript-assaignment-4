/*
    mindGame is a funtion that takes only and only a positive and number type input.
    if above two condition are matched then return (((number * 3)+10)/2)-5;
*/

function mindGame(number){
    
    if(typeof number !== 'number'){
        return "Please insert a number";
    }
    else{
        let result = (((number * 3)+10)/2)-5;
        return result;
    }
}
let giveInput = Math.abs(-5);
console.log(mindGame(giveInput));

