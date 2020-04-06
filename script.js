var el = document.getElementById('attackBoard');
var elem = document.getElementById('gameBoard1');
var turns, interval
turns = 1;


//
var p1Health = 0
var p2Health = 0




document.getElementById('randomize').addEventListener('click', function () {
    for (var y = 0; y < shipBoard.length; y++) {
        for (var x = 0; x < shipBoard.length; x++) {
            shipBoard[y][x] = 0
        }
    }
    for (var y = 0; y < playBoard.length; y++) {
        for (var x = 0; x < playBoard.length; x++) {
            playBoard[y][x] = 0
        }
    }
    shipPlacements(5, shipBoard)
    shipPlacements(4, shipBoard)
    shipPlacements(3, shipBoard)
    shipPlacements(2, shipBoard)
    shipPlacements(5, playBoard)
    shipPlacements(4, playBoard)
    shipPlacements(3, playBoard)
    shipPlacements(2, playBoard)

    

    //
    p1Health = playersLife(shipBoard, p1Health);
    p2Health = playersLife(playBoard, p2Health);
    console.log(p1Health);
    console.log(p2Health);
    console.log(playBoard)
    //


    drawMyBoard();
    drawGrid();
})

shipBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]


playBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]


//
function playersLife(board, playerHealth) {
    var life = 0
    for (var y = 0; y < board.length; y++) {
        for (var x = 0; x < board.length; x++) {
            if (board[y][x] > 0) {
                
                life += 1
            }
        }
    }
    return life
}
//




var figureItOutNerd = function (wholeBoard, randomValue) {
    var boardTile = wholeBoard[randomValue];
    var isTileOccupied = boardTile.style.backgroundColor === 'red' || boardTile.style.backgroundColor === 'blue';

    if (isTileOccupied) {
        randomValue = Math.floor(Math.random() * 100);
        figureItOutNerd(wholeBoard, randomValue);
    } else {
        if (boardTile.getAttribute('class') === 'myWater') {
            boardTile.style.backgroundColor = 'blue';
        }

        if (boardTile.getAttribute('class') === 'myShip') {
            console.log('hit')
            boardTile.style.backgroundColor = "red"
        }
    }

}

//function for the computer's guesses
//note, var (openWater/occupied) are for the attackBoard, should I be calling those var out of the function? 
//will the previous function "gameplay" still work with the var assigned out side of the function??

function compGuess() {
    var p1Water = document.getElementsByClassName('myWater'); // type of: HTMLCollectionOf<Element> !== array
    var p1Ship = document.getElementsByClassName('myShip'); // type of: HTMLCollectionOf<Element> !== array

    // look up HTMLCollection vs array and you'll see why i had to use a spread operator 
    // var p1ShipArr = [...p1Ship];
    // var p1WaterArr = [...p1Water];

    var wholeBoard = [...p1Ship, ...p1Water];
    var randomValue = Math.floor(Math.random() * 100);

    if (turns % 2 !== 0) {
        figureItOutNerd(wholeBoard, randomValue);
    }

    turns = turns + 2;

    //checkWin();
    
    //
    checkWin(p1Health);
    //
}



let gamePlay = () => {
    var openWater = document.getElementsByClassName('water');
    var occupied = document.getElementsByClassName('ship');

    var onClickWater = function (e) {
        if (e.target.getAttribute('class') === 'water') {
            e.target.style.backgroundColor = 'blue'
        }
        e.target.removeEventListener('click', onClickWater);
        compGuess();
    };

    var onClickShip = function (e) {
        if (e.target.getAttribute('class') === 'ship') {
            e.target.style.backgroundColor = "red"
        }
        e.target.removeEventListener('click', onClickShip);
        compGuess();
    };

    for (let i = 0; i < openWater.length; i++) {
        openWater[i].addEventListener('click', onClickWater);
    }

    for (let i = 0; i < occupied.length; i++) {
        occupied[i].addEventListener('click', onClickShip);
    }

    //checkWin();

    //
    checkWin(p2Health);
    console.log(p2Health)
    //


    // add the game function that clciks for the computer's guesses 

}




//this function draws out the board to to guess enemy's ships 
function drawGrid() {
    el.innerHTML = '';
    for (var y = 0; y < playBoard.length; y = y + 1) {
        el.innerHTML += "<div class='container'></div>"
        for (var x = 0; x < playBoard[y].length; x = x + 1) {
            if (playBoard[y][x] == 0) {
                el.innerHTML += `<div class='water'></div>`;
            }
            else {
                el.innerHTML += `<div class='ship'></div>`;
            }
        }
    }
    gamePlay();
}
drawGrid();




//this function is the layout for board that the user ships will be on
function drawMyBoard() {
    elem.innerHTML = '';
    for (var y = 0; y < shipBoard.length; y = y + 1) {
        elem.innerHTML += "<div class='container'></div>"
        for (var x = 0; x < shipBoard.length; x = x + 1) {
            if (shipBoard[y][x] === 0) {
                elem.innerHTML += `<div class='myWater' value='${[y]}, ${[x]}'></div>`;
            }
            else if (shipBoard[y][x] >= 2) {
                elem.innerHTML += `<div class='myShip' value='${[y]}, ${[x]}'></div>`;

            }
        }
    }
    // gamePlay();
}
drawMyBoard();


//to do set game interval and have a ai randomly guess on myBoard everytime I click have the AI guess 

let shipPlacements = (sizeOfShip, boards) => {
    let coordinateX = Math.floor(Math.random() * 10) //0-9
    let coordinateY = Math.floor(Math.random() * 10) //0-9
    let orientation = Math.floor(Math.random() * 2) //0-1      

    if (orientation == 1) { //if orientation is vertical (1) ONLY manipulate the Y's of the playboard with Y++
        for (var y = 0; y < boards.length; y++) {
            if (coordinateY <= 4 && y >= coordinateY && y <= coordinateY + (sizeOfShip - 1)) { //build down 
                boards[y][coordinateX] = sizeOfShip
            }
            else if (coordinateY >= 5 && y <= coordinateY && y >= coordinateY - (sizeOfShip - 1)) { //build up 
                boards[y][coordinateX] = sizeOfShip
            }
        }
    }
    else if (orientation == 0) { //if orientation is vertical (1) ONLY manipulate the Y's of the playboard with Y++
        for (var x = 0; x < boards.length; x++) {
            if (coordinateX <= 4 && x >= coordinateX && x <= coordinateX + (sizeOfShip - 1)) { //build down 
                boards[coordinateY][x] = sizeOfShip
            }
            else if (coordinateX >= 5 && x <= coordinateX && x >= coordinateX - (sizeOfShip - 1)) { //build up 
                boards[coordinateY][x] = sizeOfShip
            }
        }
    }

    // if (orientation == 1) { //if orientation is vertical (1) ONLY manipulate the Y's of the playboard with Y++
    //     for (var y = 0; y < playBoard.length; y++) {
    //         if (coordinateY <= 4 && y >= coordinateY && y <= coordinateY + (sizeOfShip - 1)) { //build down 
    //             playBoard[y][coordinateX] = sizeOfShip
    //         }
    //         else if (coordinateY >= 5 && y <= coordinateY && y >= coordinateY - (sizeOfShip - 1)) { //build up 
    //             playBoard[y][coordinateX] = sizeOfShip
    //         }
    //     }
    // }
    // else if (orientation == 0) { //if orientation is vertical (1) ONLY manipulate the Y's of the playboard with Y++
    //     for (var x = 0; x < playBoard.length; x++) {
    //         if (coordinateX <= 4 && x >= coordinateX && x <= coordinateX + (sizeOfShip - 1)) { //build down 
    //             playBoard[coordinateY][x] = sizeOfShip
    //         }
    //         else if (coordinateX >= 5 && x <= coordinateX && x >= coordinateX - (sizeOfShip - 1)) { //build up 
    //             playBoard[coordinateY][x] = sizeOfShip
    //         }
    //     }
    // }

}


//
function checkWin (playerHealth) {
    if (playerHealth === 0) {
        alert
    }
    
}
//


//let checkWin = () => {
    // var mySpace = document.getElementsByClassName('myShip')
    // var occupied = document.getElementsByClassName('ship');
    // var p1Ships = 0 
    // var p2Ships = 0

    // for (var y = 0; y < shipBoard.length; y++) {
    //      for(var x = 0; x < shipBoard.length; x++) {
    //         if (mySpace[y].style.backgroundColor === "red" ) {
    //             return
    //         }
    //         console.log('ya lose')
    //     }
    // }
    // for (var y = 0; y < occupied.length; y++) {
    //      for(var x = 0; x < occupied.length; x++) {
    //         console.log(occupied[y])
    //         if (occupied[y].style.backgroundColor === 'red' ) {
    //             return
    //         }
    //         console.log('ya win')
    //      }
    // }
//}


// reset the array to the original position for shipBoard 

var openWater = document.getElementsByClassName('water');
var occupied = document.getElementsByClassName('ship');
document.getElementById('reset').addEventListener('click', () => {
    for (let i = 0; i < openWater.length; i++) {
        openWater[i].style.backgroundColor = "transparent";
    }
    for (let i = 0; i < occupied.length; i++) {
        occupied[i].style.backgroundColor = "transparent";
    }
})

