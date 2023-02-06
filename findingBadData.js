/*
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