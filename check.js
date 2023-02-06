/*
     Problem number: 1 
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

/*
    Problem Number : 2.
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
console.log(evenOdd("false"));

/*
    Problem number: 3.
    isLGSeven funtion takes user input in number type and substract 7 from the input. 
    if the substract result is less then or equal 7 then return the result or multiply the input by 2.
*/

function isLGSeven(userinput){
    let substractValue = userinput-7;
    if(typeof userinput !== 'number'){
        return "Please insert a number";
    }
    else if(substractValue>=7){
        return userinput*2;

    }
    else{
        return substractValue;
    }
}
console.log(isLGSeven(15));


/*
    Problem number: 4.
    This findingBadData funtion receives an array and return the number of element with negative value.
*/

const data = [-4,-9,-5,-33,-55];

function findingBadData(dataArray){

    let badData = [];


    if(Array.isArray(dataArray)  !== true){
        return "Please insert an array.";
    }
    else{
        for(let i =0; i<dataArray.length; i++){
            if(dataArray[i]<0){
                badData.push(data[i]);
            }

        }
        return badData.length;
    }

}

console.log(findingBadData(data));


/*
    Problem number: 5.
    This function will convert the gems to diamond according to the user's gems power. 
*/

function gemsToDiamond(firstFriendGems, secondFriendGems,thirdFriendGems){

    let firstFriendsGemspower = 21;
    let secondFriendsGemspower = 32;
    let thirdFriendsGemspower = 43;

    let firstFriendDiamond = firstFriendGems*firstFriendsGemspower;
    let secondFriendDiamond = secondFriendGems*secondFriendsGemspower;
    let thirdFriendDiamond = thirdFriendGems*thirdFriendsGemspower;

    let totalDiamond = firstFriendDiamond+secondFriendDiamond+thirdFriendDiamond;
    if((typeof firstFriendGems === 'number') && (typeof secondFriendGems === 'number') && (typeof thirdFriendGems === 'number')){
        if(totalDiamond>2000){
            return totalDiamond-2000;
        }
        else{
            return totalDiamond;
        }
    }
    else{
        return "please give me numbers.";
    }
}

console.log(gemsToDiamond(20,200,"50"));


