// mind game

function mindGame(number){
    if(typeof number !== 'number'){
        return "Please insert a number";
    }
    else{
        let result = (((number * 3)+10)/2)-5;
        return result;
    }
}
console.log(mindGame(5));