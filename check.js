function check(firstFriendGems, secondFriendGems,thirdFriendGems){

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

console.log(check(20,200,50));
console.log(check(100,5,1));
console.log(check(false,"azad",1));