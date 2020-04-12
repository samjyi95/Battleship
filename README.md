BATTLESHIP
Battleship is a game I created for the purpose of a project.

To start off I created the boards using an array and DOM manipulation, with the array I gave each cell a 'data-value' of '0', any number that was higher than '1' was consisderd a ship. If the user clicked (using an eventListener), in addition to that tile having a value of 2 or higher, would change the background-color red otherwise blue.

gameplay:
gameplay was set on an interval that determined the users turn or the computer's turn. with turn+2 rather than turn+ 1 (the turns went in a snake-oriented order) having the turns set on an interval of 2 allowed the the normal flow of the game to continue with each player going at every other turn.

randomiz function:
this function was a little difficult, the processof this function was determined by parameters of being specific length and the orientation. once the orientation was randommly determined, and depending on the "y-value or the "x-value" I would have the ships set to build foward or backward so that I could avoid ships falling off the board. 
Note: I still nneed to place a function that makes it so that the ships are not randomly congregated togethe.

win functions were placed where for-loop examined each bored, and if it had any values higher than one, it would add to the respective players health, which would then be decremated on 'hit' or 'click'. once a player's health reached 0, I used innerHTML to display which player won. 

INSTRUCTIONS 
first randomize the board (which simultaneously randomizes the computers board as well)
Start the game by clicking on the "attack board" until a winner is determined.
once a winner is determined, you can click "reset" to clear the board and randomzie to your pleasure.