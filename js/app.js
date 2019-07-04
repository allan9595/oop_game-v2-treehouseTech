/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

$('#btn__reset').css("display","none");
$(document).ready(()=>{
    $('#btn__reset').fadeIn(2000); //fade in the start button
})


$("#btn__reset").on('click', () => {
    game = new Game();
    game.startGame(); //start the game
  
})

$(".keyrow button").on('click',(e) => {
    game.handleInteraction(e.target,null); //if user use button
})

document.addEventListener('keyup',(e)=>{
    game.handleInteraction(null,e.key); //if user use keyboard
})