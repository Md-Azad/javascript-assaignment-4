function isLGSeven(userinput){
    let substractValue = userinput-7;
    if(typeof userinput !== 'number'){
        return "Please insert a number";
    }
    else if(substractValue>=0){
        return userinput*2;

    }
    else{
        return substractValue;
    }
}
console.log(isLGSeven(15));