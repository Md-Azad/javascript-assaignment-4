/*
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
console.log(isLGSeven(13));