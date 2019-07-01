/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

$("#btn__reset").on('click', () => {
    const game = new Game();
    game.startGame();
})