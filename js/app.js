/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

$('#btn__reset').css("display","none");
$(document).ready(()=>{
    $('#btn__reset').fadeIn(2000); //fade in the start button
})


let game = new Game();
$("#btn__reset").on('click', () => {
    
    game.startGame(); //start the game
        
})

$(".keyrow button").on('click',(e) => {
    game.handleInteraction(e.target); //if user use button
})

document.addEventListener('keyup',(e)=>{
    game.handleInteractionKeyboard(e.key); //if user use keyboard
})
