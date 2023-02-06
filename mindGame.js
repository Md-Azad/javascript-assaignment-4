// mind game

function mindGame(number){
    if((typeof number)===false){
        return "Please insert a number";
    }
    else{
        let result = (((number * 3)+10)/2)-5;
        return result;
    }
}
console.log(mindGame(33));