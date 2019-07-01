/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPharses(); 
        this.activePhrase = null; 
    }

    createPharses(){
        const phrases = [
            {
                phrase: "I like Starbucks"
            },
            {
                phrase: "My dog loves drinking her milk"
            },
            {
                phrase: "May the force be with you"
            }, 
            {
                phrase: "I am a dog person"
            },
            {
                phrase: "Never give up your dream"
            }
        ]
        return phrases;
    }

    getRandomPhrase(){
        let randomNumber = Math.floor((Math.random() * 4)); //create a random number between 0 to 4
        return this.phrases[randomNumber];
    }

    startGame(){    
        $("#overlay").hide();
        this.activePhrase  = this.getRandomPhrase();
        const phrase = new Phrase(this.activePhrase.phrase);
        phrase.addPhraseToDisplay();
    }
 }

