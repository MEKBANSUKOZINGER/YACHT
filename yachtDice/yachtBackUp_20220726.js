var array = [0,0,0,0,0];

var yachtScore = 0;
var fourOfKindScore = 0;
var fullHouseScore = 0;
var smallStrScore =0;
var largeStrScore = 0;
var choiceScore = 0;
var oneScore = 0;
var twoScore = 0;
var threeScore = 0;
var fourScore = 0;
var fiveScore = 0;
var sixScore = 0;

var acesP1Bool = false;
var ducesP1Bool = false;
var threesP1Bool = false;
var foursP1Bool = false;
var fivesP1Bool = false;
var sixesP1Bool = false;
var choiceP1Bool = false;
var fourOfKindP1Bool = false;
var fullHouseP1Bool = false;
var smallStrP1Bool = false;
var largeStrP1Bool = false;
var yachtP1Bool = false;

var acesP2Bool = false;
var ducesP2Bool = false;
var threesP2Bool = false;
var foursP2Bool = false;
var fivesP2Bool = false;
var sixesP2Bool = false;
var choiceP2Bool = false;
var fourOfKindP2Bool = false;
var fullHouseP2Bool = false;
var smallStrP2Bool = false;
var largeStrP2Bool = false;
var yachtP2Bool = false;

const turnText = document.getElementById("turn");

var turn = 0;

const preservedOne = document.getElementById("preserved1");
const preservedTwo = document.getElementById("preserved2");
const preservedThree = document.getElementById("preserved3");
const preservedFour = document.getElementById("preserved4");
const preservedFive = document.getElementById("preserved5");

var diceOne = document.getElementById("diceImgOne");
var diceTwo = document.getElementById("diceImgTwo");
var diceThree = document.getElementById("diceImgThree");
var diceFour = document.getElementById("diceImgFour");
var diceFive = document.getElementById("diceImgFive");

var currentPlayer = 'P3';

function roll() {
    var lockOne = document.getElementById("lockOne").checked;
    var lockTwo = document.getElementById("lockTwo").checked;
    var lockThree = document.getElementById("lockThree").checked;
    var lockFour = document.getElementById("lockFour").checked;
    var lockFive = document.getElementById("lockFive").checked;

    console.log(lockOne, lockTwo, lockThree, lockFour, lockFive);

    //var random1 = Math.floor(Math.random()*6 + 1);
    var random2 = Math.floor(Math.random()*6 + 1);
    var random3 = Math.floor(Math.random()*6 + 1);
    var random4 = Math.floor(Math.random()*6 + 1);
    var random5 = Math.floor(Math.random()*6 + 1);
    if (!lockOne) {
        array[0] = Math.floor(Math.random()*6 + 1);
        console.log("changed1");
        diceOne.src = `./diceImages/dice${array[0]}.png`; 
        //preservedOne.innerText(" ");
    } else {
        console.log("not changed");
        //preservedOne.innerText("preserved");
    }
    if (lockTwo === false) {
        array[1] = random2;
        console.log("changed2");
        //preservedTwo.innerText(" ");
    } else  {
        console.log("not changed");
        //preservedTwo.innerText("preserved");
    }
    if (lockThree === false) {
        array[2] = random3;
        console.log("changed3");
        //preservedThree.innerText(" ");
    } else {
        console.log("not changed");
        //preservedThree.innerText("preserved");
        
    }
    if (lockFour === false) {
        array[3] = random4;
        console.log("changed4");
        //preservedFour.innerText(" ");
    } else {
        console.log("not chnaged");
        //preservedFour.innerText("preserved");
    }
    if (lockFive === false) {
        array[4] = random5;
        console.log("changed5");
        //preservedFive.innerText(" ");
    } else {
        console.log("not changed");
        //preservedFive.innerText("preserved");
    }
    diceTwo.src = `./diceImages/dice${array[1]}.png`; 
    diceThree.src = `./diceImages/dice${array[2]}.png`; 
    diceFour.src = `./diceImages/dice${array[3]}.png`; 
    diceFive.src = `./diceImages/dice${array[4]}.png`; 
    console.log(array);
    turn += 1;
    judge(array);
}
console.log(array);

function judge(array) {


    var arr = array.slice();
    arr.sort();
    var stringArr = JSON.stringify(arr);
    const largeStrEx_1 = [1,2,3,4,5];
    const largeStrEx_2 = [2,3,4,5,6];
    const smallStrEx_1 = [1,1,2,3,4];
    const smallStrEx_2 = [1,2,2,3,4];
    const smallStrEx_3 = [1,2,3,3,4];
    const smallStrEx_4 = [1,2,3,4,4];
    const smallStrEx_5 = [1,2,3,4,6];
    const smallStrEx_6 = [1,2,3,4,5];
    const smallStrEx_7 = [2,2,3,4,5];
    const smallStrEx_8 = [2,3,3,4,5];
    const smallStrEx_9 = [2,3,4,4,5];
    const smallStrEx_10 = [2,3,4,5,5];
    const smallStrEx_11 = [2,3,4,5,6];
    var result = {one : 0, two : 0, three : 0, four : 0, five : 0, six : 0};
    for (var j = 0; j<arr.length; j++) {
        if (arr[j] == 1) {
            result.one += 1;
        } else if (arr[j] == 2) {
            result.two += 1;
        } else if (arr[j] == 3) {
            result.three += 1;
        } else if (arr[j] == 4) {
            result.four += 1;
        } else if (arr[j] == 5) {
            result.five += 1;
        } else if (arr[j] == 6) {
            result.six += 1;
        }
    }

    if (result.one == 5 || result.two == 5 || result.three == 5 || result.four == 5 || result.five == 5 || result.six == 5) {
        console.log("yacht");
        yachtScore = 50;
    } else if (result.one == 4 || result.two == 4 || result.three == 4 || result.four == 4 || result.five == 4 || result.six == 4) {
        console.log("4 of kind");
        fourOfKindScore = arr.reduce(function add(sum, currValue) {
            return sum + currValue;
        }, 0);
    } else if (result.one == 3 || result.two == 3 || result.three == 3 || result.four == 3 || result.five == 3 || result.six == 3) {
        if (result.one == 2 || result.two == 2 || result.three == 2 || result.four == 2 || result.five == 2 || result.six == 2) {
            console.log("full house");
            console.log(Object.keys(result).find(key => result[key] === 3));
            fullHouseScore = arr.reduce(function add(sum, currValue) {
                return sum + currValue;
            }, 0);
        }
    } else if (stringArr == JSON.stringify(largeStrEx_1) || stringArr == JSON.stringify(largeStrEx_2)) {
        console.log("large straight");
        largeStrScore = 30;
    } else if (stringArr == JSON.stringify(smallStrEx_1) || stringArr == JSON.stringify(smallStrEx_2) || stringArr == JSON.stringify(smallStrEx_3) || stringArr == JSON.stringify(smallStrEx_4) || stringArr == JSON.stringify(smallStrEx_5)) {
        console.log("small straight");
        smallStrScore = 15;
    } else if (stringArr == JSON.stringify(smallStrEx_6) || stringArr == JSON.stringify(smallStrEx_7) || stringArr == JSON.stringify(smallStrEx_8) || stringArr == JSON.stringify(smallStrEx_9) || stringArr == JSON.stringify(smallStrEx_9) || stringArr == JSON.stringify(smallStrEx_10) || stringArr == JSON.stringify(smallStrEx_11)) {
        console.log("small straight");
        smallStrScore = 15;
    }


    console.log(result);
    score();
    console.log(turn);
}

function score() {
    if (turn % 2 == 1) {
        currentPlayer = "P1";
    } else {
        currentPlayer = "P2";
    }

    aces = document.getElementById(`aces${currentPlayer}`);
    duces = document.getElementById(`duces${currentPlayer}`);
    threes = document.getElementById(`threes${currentPlayer}`);
    fours = document.getElementById(`fours${currentPlayer}`);
    fives = document.getElementById(`fives${currentPlayer}`);
    sixes = document.getElementById(`sixes${currentPlayer}`);
    bonus = document.getElementById(`bonus${currentPlayer}`);
    choice = document.getElementById(`choice${currentPlayer}`);
    fourOfKind = document.getElementById(`fourOK${currentPlayer}`);
    fullHouse = document.getElementById(`fullHouse${currentPlayer}`);
    smallStr = document.getElementById(`smallStr${currentPlayer}`);
    largeStr = document.getElementById(`largeStr${currentPlayer}`);
    yacht = document.getElementById(`yacht${currentPlayer}`);
    total = document.getElementById(`total${currentPlayer}`);
    
    if (currentPlayer == "P1") {
        if (!acesP1Bool) {
            aces.innerText = oneScore;
        }
        if (!ducesP1Bool) {
            duces.innerText = twoScore;
        }
        if (!threesP1Bool) {
            threes.innerText = threeScore;
        }
        if (!foursP1Bool) {
            fours.innerText = fourScore;
        }
        if (!fivesP1Bool) {
            fives.innerText = fiveScore;
        }
        if (!sixesP1Bool) {
            sixes.innerText = sixScore;
        }
        if (!choiceP1Bool) {
            choice.innerText = choiceScore;
        }
        if (!fourOfKindP1Bool) {
            fourOfKind.innerText = fourOfKindScore;
        }
        if (!fullHouseP1Bool) {
            fullHouse.innerText = fullHouseScore;
        }
        if (!smallStrP1Bool) {
            smallStr.innerText = smallStrScore;
        }
        if (!largeStrP1Bool) {
            largeStr.innerText = largeStrScore;
        }
        if (!yachtP1Bool) {
            yacht.innerText = yachtScore;
        }

    } else if (currentPlayer == "P2") {
        if (!acesP2Bool) {
            aces.innerText = oneScore;
        }
        if (!ducesP2Bool) {
            duces.innerText = twoScore;
        }
        if (!threesP2Bool) {
            threes.innerText = threeScore;
        }
        if (!foursP2Bool) {
            fours.innerText = fourScore;
        }
        if (!fivesP2Bool) {
            fives.innerText = fiveScore;
        }
        if (!sixesP2Bool) {
            sixes.innerText = sixScore;
        }
        if (!choiceP2Bool) {
            choice.innerText = choiceScore;
        }
        if (!fourOfKindP2Bool) {
            fourOfKind.innerText = fourOfKindScore;
        }
        if (!fullHouseP2Bool) {
            fullHouse.innerText = fullHouseScore;
        }
        if (!smallStrP2Bool) {
            smallStr.innerText = smallStrScore;
        }
        if (!largeStrP2Bool) {
            largeStr.innerText = largeStrScore;
        }
        if (!yachtP2Bool) {
            yacht.innerText = yachtScore;
        }
    }

}

function acesP1decide() {
    if (currentPlayer == 'P1' && !acesP1Bool) {
        acesP1Bool = true;
        aces.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function ducesP1decide() {
    if (currentPlayer == 'P1' && !ducesP1Bool) {
        ducesP1Bool = true;
        duces.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function threesP1decide() {
    if (currentPlayer == 'P1' && !threesP1Bool) {
        threesP1Bool = true;
        threes.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function foursP1decide() {
    if (currentPlayer == 'P1' && !foursP1Bool) {
        foursP1Bool = true;
        fours.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function fivesP1decide() {
    if (currentPlayer == 'P1' && !fivesP1Bool) {
        fivesP1Bool = true;
        fives.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function sixesP1decide() {
    if (currentPlayer == 'P1' && !sixesP1Bool) {
        sixesP1Bool = true;
        sixes.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function choiceP1decide() {
    if (currentPlayer == 'P1' && !choiceP1Bool) {
        choiceP1Bool = true;
        choice.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function fourOfKindP1decide() {
    if (currentPlayer == 'P1' && !fourOfKindP1Bool) {
        fourOfKindP1Bool = true;
        fourOfKind.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function fullHouseP1decide() {
    if (currentPlayer == 'P1' && !fullHouseP1Bool) {
        fullHouseP1Bool = true;
        fullHouse.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function smallStrP1decide() {
    if (currentPlayer == 'P1' && !smallStrP1Bool) {
        smallStrP1Bool = true;
        smallStr.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function largeStrP1decide() {
    if (currentPlayer == 'P1' && !largeStrP1Bool) {
        largeStrP1Bool = true;
        largeStr.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function yachtP1decide() {
    if (currentPlayer == 'P1' && !yachtP1Bool) {
        yachtP1Bool = true;
        yacht.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function acesP2decide() {
    if (currentPlayer == 'P2' && !acesP2Bool) {
        acesP2Bool = true;
        aces.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function ducesP2decide() {
    if (currentPlayer == 'P2' && !ducesP2Bool) {
        ducesP2Bool = true;
        duces.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function threesP2decide() {
    if (currentPlayer == 'P1' && !threesP2Bool) {
        threesP2Bool = true;
        threes.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function foursP2decide() {
    if (currentPlayer == 'P2' && !foursP2Bool) {
        foursP2Bool = true;
        fours.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function fivesP2decide() {
    if (currentPlayer == 'P2' && !fivesP2Bool) {
        fivesP2Bool = true;
        fives.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function sixesP2decide() {
    if (currentPlayer == 'P2' && !sixesP2Bool) {
        sixesP2Bool = true;
        sixes.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function choiceP2decide() {
    if (currentPlayer == 'P2' && !choiceP2Bool) {
        choiceP2Bool = true;
        choice.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function fourOfKindP2decide() {
    if (currentPlayer == 'P2' && !fourOfKindP2Bool) {
        fourOfKindP2Bool = true;
        fourOfKind.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function fullHouseP2decide() {
    if (currentPlayer == 'P2' && !fullHouseP2Bool) {
        fullHouseP2Bool = true;
        fullHouse.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function smallStrP1decide() {
    if (currentPlayer == 'P1' && !smallStrP1Bool) {
        smallStrP1Bool = true;
        smallStr.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function largeStrP1decide() {
    if (currentPlayer == 'P1' && !largeStrP1Bool) {
        largeStrP1Bool = true;
        largeStr.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

function yachtP1decide() {
    if (currentPlayer == 'P1' && !yachtP1Bool) {
        yachtP1Bool = true;
        yacht.style = 'color: aliceblue;';
        turn += 1;
        currentPlayer = 'P3';
    } else {
        alert("invalid access");
    }
}

"tester.some(value => value==1)"

"Object.keys(오브젝트).find(key => 오브젝트[key] === 밸류) 하면 키값이 나옴"