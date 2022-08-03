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

var totalP1 = document.getElementById("totalP1");
var totalP2 = document.getElementById("totalP2");

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

var acesP1Score = 0;
var acesP2Score = 0;
var ducesP1Score = 0;
var ducesP2Score = 0;
var threesP1Score = 0;
var threesP2Score = 0;
var foursP1Score = 0;
var foursP2Score = 0;
var fivesP1Score = 0;
var fivesP2Score = 0;
var sixesP1Score = 0;
var sixesP2Score = 0;
var choiceP1Score = 0;
var choiceP2Score = 0;
var fourOfKindP1Score = 0;
var fourOfKindP2Score = 0;
var fullHouseP1Score = 0;
var fullHouseP2Score = 0;
var smallStrP1Score = 0;
var smallStrP2Score = 0;
var largeStrP1Score = 0;
var largeStrP2Score = 0;
var yachtP1Score = 0;
var yachtP2Score = 0;

const turnText = document.getElementById("turn");

var turn = 1;

const preservedOne = document.getElementById("preserved1");
const preservedTwo = document.getElementById("preserved2");
const preservedThree = document.getElementById("preserved3");
const preservedFour = document.getElementById("preserved4");
const preservedFive = document.getElementById("preserved5");

var rollBtn = document.getElementById("rollBtn");

var diceOne = document.getElementById("diceImgOne");
var diceTwo = document.getElementById("diceImgTwo");
var diceThree = document.getElementById("diceImgThree");
var diceFour = document.getElementById("diceImgFour");
var diceFive = document.getElementById("diceImgFive");

var rollCount = 3;

function roll() {
    

    if (rollCount == 0) {
        alert("You have to choose one now!");
    } else {
        rollBtn.innerText = `ROLL ${rollCount -1}/3`

        lockOne = document.getElementById("lockOne").checked;
        lockTwo = document.getElementById("lockTwo").checked;
        lockThree = document.getElementById("lockThree").checked;
        lockFour = document.getElementById("lockFour").checked;
        lockFive = document.getElementById("lockFive").checked;

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
        rollCount -= 1;
        judge(array);
    }
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

    var acesCount = 0;
    var ducesCount = 0;
    var threesCount = 0;
    var foursCount = 0;
    var fivesCount = 0;
    var sixesCount = 0;
    for (var a = 0; a < 5; a++ ) {
        if (arr[a] == 1) {
            acesCount += 1;
        } else if (arr[a] == 2) {
            ducesCount += 1;
        } else if (arr[a] == 3) {
            threesCount += 1;
        } else if (arr[a] == 4) {
            foursCount += 1;
        } else if (arr[a] == 5) {
            fivesCount += 1;
        } else if (arr[a] == 6) {
            sixesCount += 1;
        }
    }

    yachtScore = 0;
    largeStrScore = 0;
    smallStrScore = 0;
    fullHouseScore = 0;
    fourOfKindScore = 0;
    choiceScore = arr.reduce(function add(sum, currValue) {
        return sum + currValue;
    }, 0);

    oneScore = acesCount;
    twoScore = ducesCount * 2;
    threeScore = threesCount * 3;
    fourScore = foursCount * 4;
    fiveScore = fivesCount * 5;
    sixScore = sixesCount * 6;

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

    console.log(currentPlayer);

    acesP1 = document.getElementById(`acesP1`);
    ducesP1 = document.getElementById(`ducesP1`);
    threesP1 = document.getElementById(`threesP1`);
    foursP1 = document.getElementById(`foursP1`);
    fivesP1 = document.getElementById(`fivesP1`);
    sixesP1 = document.getElementById(`sixesP1`);
    bonusP1 = document.getElementById(`bonusP1`);
    choiceP1 = document.getElementById(`choiceP1`);
    fourOfKindP1 = document.getElementById(`fourOKP1`);
    fullHouseP1 = document.getElementById(`fullHouseP1`);
    smallStrP1 = document.getElementById(`smallStrP1`);
    largeStrP1 = document.getElementById(`largeStrP1`);
    yachtP1 = document.getElementById(`yachtP1`);

    acesP2 = document.getElementById(`acesP2`);
    ducesP2 = document.getElementById(`ducesP2`);
    threesP2 = document.getElementById(`threesP2`);
    foursP2 = document.getElementById(`foursP2`);
    fivesP2 = document.getElementById(`fivesP2`);
    sixesP2 = document.getElementById(`sixesP2`);
    bonusP2 = document.getElementById(`bonusP2`);
    choiceP2 = document.getElementById(`choiceP2`);
    fourOfKindP2 = document.getElementById(`fourOKP2`);
    fullHouseP2 = document.getElementById(`fullHouseP2`);
    smallStrP2 = document.getElementById(`smallStrP2`);
    largeStrP2 = document.getElementById(`largeStrP2`);
    yachtP2 = document.getElementById(`yachtP2`);
    
    if (currentPlayer == "P1") {
        if (!acesP1Bool) {
            acesP1.innerText = oneScore;
            acesP1Score = oneScore;
        }
        if (!ducesP1Bool) {
            ducesP1.innerText = twoScore;
            ducesP1Score = twoScore;
        }
        if (!threesP1Bool) {
            threesP1.innerText = threeScore;
            threesP1Score = threeScore;
        }
        if (!foursP1Bool) {
            foursP1.innerText = fourScore;
            foursP1Score = fourScore;
        }
        if (!fivesP1Bool) {
            fivesP1.innerText = fiveScore;
            fivesP1Score = fiveScore;
        }
        if (!sixesP1Bool) {
            sixesP1.innerText = sixScore;
            sixesP1Score = sixScore;
        }
        if (!choiceP1Bool) {
            choiceP1.innerText = choiceScore;
            choiceP1Score = choiceScore;
        }
        if (!fourOfKindP1Bool) {
            fourOfKindP1.innerText = fourOfKindScore;
            fourOfKindP1Score = fourOfKindScore;
        }
        if (!fullHouseP1Bool) {
            fullHouseP1.innerText = fullHouseScore;
            fullHouseP1Score = fullHouseScore;
        }
        if (!smallStrP1Bool) {
            smallStrP1.innerText = smallStrScore;
            smallStrP1Score = smallStrScore;
        }
        if (!largeStrP1Bool) {
            largeStrP1.innerText = largeStrScore;
            largeStrP1Score = largeStrScore;
        }
        if (!yachtP1Bool) {
            yachtP1.innerText = yachtScore;
            yachtP1Score = yachtScore;
        }

    } else if (currentPlayer == "P2") {
        if (!acesP2Bool) {
            acesP2.innerText = oneScore;
            acesP2Score = oneScore;
        }
        if (!ducesP2Bool) {
            ducesP2.innerText = twoScore;
            ducesP2Score = twoScore;
        }
        if (!threesP2Bool) {
            threesP2.innerText = threeScore;
            threesP2Score = threeScore;
        }
        if (!foursP2Bool) {
            foursP2.innerText = fourScore;
            foursP2Score = fourScore;
        }
        if (!fivesP2Bool) {
            fivesP2.innerText = fiveScore;
            fivesP2Score = fiveScore;
        }
        if (!sixesP2Bool) {
            sixesP2.innerText = sixScore;
            sixesP2Score = sixScore;
        }
        if (!choiceP2Bool) {
            choiceP2.innerText = choiceScore;
            choiceP2Score = choiceScore;
        }
        if (!fourOfKindP2Bool) {
            fourOfKindP2.innerText = fourOfKindScore;
            fourOfKindP2Score = fourOfKindScore;
        }
        if (!fullHouseP2Bool) {
            fullHouseP2.innerText = fullHouseScore;
            fullHouseP2Score = fullHouseScore;
        }
        if (!smallStrP2Bool) {
            smallStrP2.innerText = smallStrScore;
            smallStrP2Score = smallStrScore;
        }
        if (!largeStrP2Bool) {
            largeStrP2.innerText = largeStrScore;
            largeStrP2Score = largeStrScore;
        }
        if (!yachtP2Bool) {
            yachtP2.innerText = yachtScore;
            yachtP2Score = yachtScore;
        }
    }

}

var acesP1RealScore = 0;
var ducesP1RealScore = 0;
var threesP1RealScore = 0;
var foursP1RealScore = 0;
var fivesP1RealScore = 0;
var sixesP1RealScore = 0;
var choiceP1RealScore = 0;
var fourOfKindP1RealScore = 0;
var fullHouseP1RealScore = 0;
var smallStrP1RealScore = 0;
var largeStrP1RealScore = 0;
var yachtP1RealScore = 0;

var acesP2RealScore = 0;
var ducesP2RealScore = 0;
var threesP2RealScore = 0;
var foursP2RealScore = 0;
var fivesP2RealScore = 0;
var sixesP2RealScore = 0;
var choiceP2RealScore = 0;
var fourOfKindP2RealScore = 0;
var fullHouseP2RealScore = 0;
var smallStrP2RealScore = 0;
var largeStrP2RealScore = 0;
var yachtP2RealScore = 0;

function acesP1decide() {
    if (currentPlayer == 'P1' && !acesP1Bool) {
        acesP1Bool = true;
        acesP1.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        acesP1RealScore = acesP1Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function ducesP1decide() {
    if (currentPlayer == 'P1' && !ducesP1Bool) {
        ducesP1Bool = true;
        ducesP1.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        ducesP1RealScore = ducesP1Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function threesP1decide() {
    if (currentPlayer == 'P1' && !threesP1Bool) {
        threesP1Bool = true;
        threesP1.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        threesP1RealScore = threesP1Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function foursP1decide() {
    if (currentPlayer == 'P1' && !foursP1Bool) {
        foursP1Bool = true;
        foursP1.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        foursP1RealScore = foursP1Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function fivesP1decide() {
    if (currentPlayer == 'P1' && !fivesP1Bool) {
        fivesP1Bool = true;
        fivesP1.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        fivesP1RealScore = fivesP1Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function sixesP1decide() {
    if (currentPlayer == 'P1' && !sixesP1Bool) {
        sixesP1Bool = true;
        sixesP1.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        sixesP1RealScore = sixesP1Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function choiceP1decide() {
    if (currentPlayer == 'P1' && !choiceP1Bool) {
        choiceP1Bool = true;
        choiceP1.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        choiceP1RealScore = choiceP1Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function fourOfKindP1decide() {
    if (currentPlayer == 'P1' && !fourOfKindP1Bool) {
        fourOfKindP1Bool = true;
        fourOfKindP1.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        fourOfKindP1RealScore = fourOfKindP1Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function fullHouseP1decide() {
    if (currentPlayer == 'P1' && !fullHouseP1Bool) {
        fullHouseP1Bool = true;
        fullHouseP1.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        fullHouseP1RealScore = fullHouseP1Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function smallStrP1decide() {
    if (currentPlayer == 'P1' && !smallStrP1Bool) {
        smallStrP1Bool = true;
        smallStrP1.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        smallStrP1RealScore = smallStrP1Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function largeStrP1decide() {
    if (currentPlayer == 'P1' && !largeStrP1Bool) {
        largeStrP1Bool = true;
        largeStrP1.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        largeStrP1RealScore = largeStrP1Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function yachtP1decide() {
    if (currentPlayer == 'P1' && !yachtP1Bool) {
        yachtP1Bool = true;
        yachtP1.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        yachtP1RealScore = yachtP1Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function acesP2decide() {
    if (currentPlayer == 'P2' && !acesP2Bool) {
        acesP2Bool = true;
        acesP2.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        acesP2RealScore = acesP2Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function ducesP2decide() {
    if (currentPlayer == 'P2' && !ducesP2Bool) {
        ducesP2Bool = true;
        ducesP2.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        ducesP2RealScore = ducesP2Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function threesP2decide() {
    if (currentPlayer == 'P2' && !threesP2Bool) {
        threesP2Bool = true;
        threesP2.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        threesP2RealScore = threesP2Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function foursP2decide() {
    if (currentPlayer == 'P2' && !foursP2Bool) {
        foursP2Bool = true;
        foursP2.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        foursP2RealScore = foursP2Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function fivesP2decide() {
    if (currentPlayer == 'P2' && !fivesP2Bool) {
        fivesP2Bool = true;
        fivesP2.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        fivesP2RealScore = fivesP2Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function sixesP2decide() {
    if (currentPlayer == 'P2' && !sixesP2Bool) {
        sixesP2Bool = true;
        sixesP2.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        sixesP2RealScore = sixesP2Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function choiceP2decide() {
    if (currentPlayer == 'P2' && !choiceP2Bool) {
        choiceP2Bool = true;
        choiceP2.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        choiceP2RealScore = choiceP2Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function fourOfKindP2decide() {
    if (currentPlayer == 'P2' && !fourOfKindP2Bool) {
        fourOfKindP2Bool = true;
        fourOfKindP2.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        fourOfKindP2RealScore = fourOfKindP2Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function fullHouseP2decide() {
    if (currentPlayer == 'P2' && !fullHouseP2Bool) {
        fullHouseP2Bool = true;
        fullHouseP2.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        fullHouseP2RealScore = fullHouseP2Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function smallStrP2decide() {
    if (currentPlayer == 'P2' && !smallStrP2Bool) {
        smallStrP2Bool = true;
        smallStrP2.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        smallStrP2RealScore = smallStrP2Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function largeStrP2decide() {
    if (currentPlayer == 'P2' && !largeStrP2Bool) {
        largeStrP2Bool = true;
        largeStrP2.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        largeStrP2RealScore = largeStrP2Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

function yachtP2decide() {
    if (currentPlayer == 'P2' && !yachtP2Bool) {
        yachtP2Bool = true;
        yachtP2.style = 'color: aliceblue;';
        currentPlayer = 'P3';
        yachtP2RealScore = yachtP2Score;
        turnChange();
    } else {
        alert("invalid access");
    }
}

var realTurn = 1;

var bonusP1RealScore = 0;
var bonusP2RealScore = 0;

function turnChange() {
    var totalBonusP1 = acesP1RealScore + ducesP1RealScore + threesP1RealScore + foursP1RealScore + fivesP1RealScore + sixesP1RealScore;
    var totalBonusP2 = acesP2RealScore + ducesP2RealScore + threesP2RealScore + foursP2RealScore + fivesP2RealScore + sixesP2RealScore;
    if (turn  == 24) {
        console.log("Game Over!");
    } else {
    totalP1.innerText = acesP1RealScore + ducesP1RealScore + threesP1RealScore + foursP1RealScore + fivesP1RealScore + sixesP1RealScore + choiceP1RealScore + fourOfKindP1RealScore + fullHouseP1RealScore + smallStrP1RealScore + largeStrP1RealScore + yachtP1RealScore + bonusP1RealScore;
    totalP2.innerText = acesP2RealScore + ducesP2RealScore + threesP2RealScore + foursP2RealScore + fivesP2RealScore + sixesP2RealScore + choiceP2RealScore + fourOfKindP2RealScore + fullHouseP2RealScore + smallStrP2RealScore + largeStrP2RealScore + yachtP2RealScore + bonusP2RealScore;
    bonusP1.innerText = `P1 : ${acesP1RealScore + ducesP1RealScore + threesP1RealScore + foursP1RealScore + fivesP1RealScore + sixesP1RealScore} / 63`;
    bonusP2.innerText = `P1 : ${acesP2RealScore + ducesP2RealScore + threesP2RealScore + foursP2RealScore + fivesP2RealScore + sixesP2RealScore} / 63`;
    if (totalBonusP1 >= 63) {
        bonusP1.style = "background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82); background-clip: border-box; -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
        bonusP1RealScore = 35;
    }
    if (totalBonusP2 >= 63) {
        bonusP2.style = "background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82); background-clip: border-box; -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
        bonusP2RealScore = 35;
    }
    turn += 1;
    rollCount = 3;
    alert("turn change");
    if (turn % 2 == 1) {
        realTurn += 1;
        turnText.innerHTML = `<p class="innerTextTurnTitle">Turn<br>${realTurn} / 12</p>`;
    }
    rollBtn.innerText = 'ROLL 3/3';
    acesP1Score = 0;
    acesP2Score = 0;
    ducesP1Score = 0;
    ducesP2Score = 0;
    threesP1Score = 0;
    threesP2Score = 0;
    foursP1Score = 0;
    foursP2Score = 0;
    fivesP1Score = 0;
    fivesP2Score = 0;
    sixesP1Score = 0;
    sixesP1Score = 0;
    choiceP1Score = 0;
    choiceP2Score = 0;
    fourOfKindP1Score = 0;
    fourOfKindP2Score = 0;
    fullHouseP1Score = 0;
    fullHouseP2Score = 0;
    smallStrP1Score = 0;
    smallStrP2Score = 0;
    largeStrP1Score = 0;
    largeStrP2Score = 0;
    yachtP1Score = 0;
    yachtP2Score = 0;

    if (!acesP1Bool) {
        acesP1.innerText = 0;
    }
    if (!ducesP1Bool) {
        ducesP1.innerText = 0;
    }
    if (!threesP1Bool) {
        threesP1.innerText = 0;
    }
    if (!foursP1Bool) {
        foursP1.innerText = 0;
    }
    if (!fivesP1Bool) {
        fivesP1.innerText = 0;
    }
    if (!sixesP1Bool) {
        sixesP1.innerText = 0;
    }
    if (!choiceP1Bool) {
        choiceP1.innerText = 0;
    }
    if (!fourOfKindP1Bool) {
        fourOfKindP1.innerText = 0;
    }
    if (!fullHouseP1Bool) {
        fullHouseP1.innerText = 0;
    }
    if (!smallStrP1Bool) {
        smallStrP1.innerText = 0;
    }
    if (!largeStrP1Bool) {
        largeStrP1.innerText = 0;
    }
    if (!yachtP1Bool) {
        yachtP1.innerText = 0;
    }

    if (!acesP2Bool) {
        acesP2.innerText = 0;
    }
    if (!ducesP2Bool) {
        ducesP2.innerText = 0;
    }
    if (!threesP2Bool) {
        threesP2.innerText = 0;
    }
    if (!foursP2Bool) {
        foursP2.innerText = 0;
    }
    if (!fivesP2Bool) {
        fivesP2.innerText = 0;
    }
    if (!sixesP2Bool) {
        sixesP2.innerText = 0;
    }
    if (!choiceP2Bool) {
        choiceP2.innerText = 0;
    }
    if (!fourOfKindP2Bool) {
        fourOfKindP2.innerText = 0;
    }
    if (!fullHouseP2Bool) {
        fullHouseP2.innerText = 0;
    }
    if (!smallStrP2Bool) {
        smallStrP2.innerText = 0;
    }
    if (!largeStrP2Bool) {
        largeStrP2.innerText = 0;
    }
    if (!yachtP2Bool) {
        yachtP2.innerText = 0;
    }
    }
}
"tester.some(value => value==1)"

"Object.keys(오브젝트).find(key => 오브젝트[key] === 밸류) 하면 키값이 나옴"