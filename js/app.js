/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();
$("#btn__reset").on('click', () => {
    
    console.log(game);
    game.startGame();
        
})

$(".keyrow button").on('click',(e) => {
    game.handleInteraction(e.target);
})

document.addEventListener('keyup',(e)=>{
    game.handleInteractionKeyboard(e.key);
})
