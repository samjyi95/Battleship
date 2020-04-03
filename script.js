

shipBoard = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 5, 0, 4, 0, 0, 0, 0, 0],
                [0, 0, 5, 0, 4, 0, 3, 0, 0, 0],
                [0, 0, 5, 0, 4, 0, 3, 0, 2, 0],
                [0, 0, 5, 0, 4, 0, 3, 0, 2, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ]


playBoard = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 5, 5, 5, 5, 5, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ]
                


var el = document.getElementById('attackBoard');
var openWater = document.getElementsByClassName('water');
var occupied = document.getElementsByClassName('ship');

 
let gamePlay = () => {
    for (let i = 0; i < openWater.length; i++){
        openWater[i].addEventListener('click', function(e) {
            console.log(e.target.getAttribute("data-row"), e.target.getAttribute("data-column"), e.target.getAttribute('data-value'))
            e.target.style.backgroundColor = "green";
            if (e.target.getAttribute('class') === 'water') {
                e.target.style.backgroundColor = 'blue'
            // console.log(e.target.getAttribute("data-row"), e.target.getAttribute("data-column"))
            }
            checkWin(e); 
        })
    }
    for (let i = 0; i < occupied.length; i++) {
        occupied[i].addEventListener('click', function(e) {
            console.log(e.target.getAttribute('data-value'))
            if (e.target.getAttribute('data-value') > 1){
                console.log(e.target)
                e.target.style.backgroundColor = "red"
            }
            checkWin(e);
        })
    }
}


//this function draws out the board to to guess enemy's ships 
function drawGrid(){
    el.innerHTML = '';
    for(var y = 0; y < playBoard.length ; y = y + 1) {
        el.innerHTML += "<div class='container'></div>"
        for(var x = 0; x < playBoard[y].length ; x = x + 1) {   
            if (playBoard[y][x] == 0) {
                el.innerHTML += `<div class='water' data-value='${playBoard[y][x]}' data-column='${[y]}' data-row='${[x]}'></div>`;
            }
            else {
                el.innerHTML += `<div class='ship' data-value='${playBoard[y][x]}' data-column='${[y]}' data-row='${[x]}'></div>`;
            }
        }
    }
}
drawGrid();

var elem = document.getElementById('gameBoard1')


//this function is the layout for board that the user ships will be on
function drawMyBoard () {
    elem.innerHTML = '';
    for (var y = 0; y < shipBoard.length; y = y + 1) {
        elem.innerHTML += "<div class='container'></div>"
        for(var x = 0; x < shipBoard.length; x = x + 1) {
            if (shipBoard[y][x] === 0) {
                elem.innerHTML += `<div class='myWater' value='${[y]}, ${[x]}'></div>`;
            }
            else if (shipBoard[y][x] >= 2) {
                elem.innerHTML += `<div class='myShip' value='${[y]}, ${[x]}'></div>`;
                
            }
        }
    }
    gamePlay();
}
drawMyBoard();



document.getElementById('reset').addEventListener('click', () => {
    for (let i = 0; i < openWater.length; i++){
        openWater[i].style.backgroundColor = "transparent";    
    }
    for (let i = 0; i < occupied.length; i++) {
        occupied[i].style.backgroundColor = "transparent";
    } 
    }) 


// reset the array to the original position for shipBoard 

//randomize the attackBoard(playBoard)?
// })
 


// placement conditions 
//*else if
//using Math.random the inputs for ship one would have to follow the following conditions
// ship 3 == 'A', 'A', 'A', 'A', 'A' && i++ || any number x5 && index.y[i++]
// ship one == 
//Math.floor(Math.random() * 10) returns a random interger from 0 - 10
//should use this for the indexes of the array 
//should I set the ships to certain numbers as variables???
// var guess = shipBoard[Math.floor(Math.random() * 10)]

//previous state and current state
//+-1
//array of states
//orientation  = math.random() b/n the intervals of 0-1 
//3 randoms for x coord, y coord, and which orientation


// let ship5 = shipBoard[y][x].value('5')
// let ship4 = shipBoard[y][x].value('4')
// let ship3 = shipBoard[y][x].value('3')
// let ship2 = shipBoard[y][x].value('2')  

// let y = shipBoard

// let ship5y = shipBoard[y]
// let ship4y = shipBoard[y]
// let ship3y = shipBoard[y]
// let ship2y = shipBoard[y] 
// let ship5x = shipBoard{[y]},{[x]}
// let ship4x = shipBoard[y][x]
// let ship3x = shipBoard[y][x]
// let ship2x = shipBoard[y][x]

// console.log(ship5y)


// console.log(setRandom)


let shipPlacements = (sizeOfShip) => {
    document.getElementById('randomize').addEventListener('click', function() {
        let counter = 0
        let coordinateX = Math.floor(Math.random() * 10) //0-9
        let coordinateY = Math.floor(Math.random() * 10) //0-9
        let orientation = Math.floor(Math.random() * 2 ) //0-1
		// const sizeOfShip = Math.floor(Math.random() * 5 ) //size of ship (0,5)
		// elem.innerHTML = '';

		//If orientation is Vertical then we want to only manipulate Y axis (1 is for vertical)
		if(orientation == 1) {
			//Want to manipulate the shipboard so that it accounts for my random coordinates
			for (var y = 0; y < shipBoard.length; y++) {
				for(var x = 0; x < shipBoard.length; x++) {
					//+- coordinateY and coordinate
					//0 - sizeOfShip
					for(let counter = 0; counter < sizeOfShip; counter++) {
						if(coordinateY+counter < shipBoard.length)
						{
							shipBoard[coordinateY+counter][coordinateX] = sizeOfShip;
							// document.getElementsByClassName('water')
							// elem.innerHTML += `<div class='ship' value='${[y]}, ${[x]}'></div>`;
							// elem.innerHTML.style.backgroundColor = "green"
						}
						// else {
						// 	shipBoard[coordinateY+counter][coordinateX] = sizeOfShip;
						// }
					}					
				}
			}
			
			//Example:  (0,7) if we continue to increment it will stop at 9 (0,9) now we want to go to (0,6), (0,5), (0,4) Coordinate Y == 7 
			if(coordinateY + counter > shipBoard.length){
				for(let counter = 0; counter < shipBoard.length - (coordinateY + counter); counter++) {
					if(coordinateY+counter < shipBoard.length)
					{
						shipBoard[coordinateY-counter][coordinateX] = sizeOfShip;
					}
					// else {
					// 	shipBoard[coordinateY-counter][coordinateX] = sizeOfShip;
					// }
				}	
			}
		}
		else if(orientation == 0) {
							//Want to manipulate the shipboard so that it accounts for my random coordinates
			for (var y = 0; y < shipBoard.length; y++) {
				for(var x = 0; x < shipBoard.length; x++) {
					//+- coordinateY and coordinate
					//0 - sizeOfShip
					for(let counter = 0; counter < sizeOfShip; counter++) {
						if(coordinateY+counter < shipBoard.length)
						{
							shipBoard[coordinateY+counter][coordinateX] = sizeOfShip;
						}
						// else {
						// 	shipBoard[coordinateY+counter][coordinateX] = sizeOfShip;
						// }
					}					

						
				}
			}
			
			//Example:  (0,7) if we continue to increment it will stop at 9 (0,9) now we want to go to (0,6), (0,5), (0,4) Coordinate Y == 7 
			if(coordinateY + counter > shipBoard.length){
				for(let counter = 0; counter < shipBoard.length - (coordinateY + counter); counter++) {
					if(coordinateY+counter < shipBoard.length)
					{
						shipBoard[coordinateY-counter][coordinateX] = sizeOfShip;
					}
					else {
						shipBoard[coordinateY-counter][coordinateX] = sizeOfShip;
					}
				}	
			}
			console.log(x, y, orientation)
			drawMyBoard();
		};
	})
}

shipPlacements();

//need to set a function that will place the enemy's ship on the 
//the board with "Math.random" will hide the results later 

//0 = open waters
//1 = ship hit
//2 <= ships  



 let checkWin = (e) => {
    // for (var y = 0; y < shipBoard.length; y++) {
    //     for(var x = 0; x < shipBoard.length; x++) {
    //         if (shipBoard[y][x].getAttribute('data-value') == 0 || 1 ) {
    //             console.log("ya lose")
    //         }
    //         else {
    //             break;
    //         }
    //     }
    // }
    for (var y = 0; y < occupied.length; y++) {
        // for(var x = 0; x < occupied.length; x++) {
            console.log(occupied[y])
            if (occupied[y].style.backgroundColor !== 'red' ) {
                return
            }
                console.log('ya win')
        // }
    }
 } 


