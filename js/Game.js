/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases(); 
        this.activePhrase = null; 
    }

    createPhrases(){
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
                phrase: "I AM A DOG PERSON"
            },
            {
                phrase: "Never give up your dream"
            }
        ]
        return phrases;
    }

    getRandomPhrase(){
        let randomNumber = Math.floor((Math.random() * 4)); //create a random number between 0 to 4
        return this.phrases[randomNumber]; //return the random phrase
    }

    startGame(){    
        $("#overlay").hide(); //hide the initial overlay background
        this.activePhrase  = new Phrase(this.getRandomPhrase().phrase); //get a new active phrase and set it as active
        this.activePhrase.addPhraseToDisplay(); //display the actived phrase
    }
    
    //belowing code handling button clicking
    handleInteraction(button,key){
        //if the actived phrase does not includes the button's value, adds wrong class and disabled it
        if(button && (this.activePhrase.phrase.includes($(button).text()) === false)){
            $(button).addClass('wrong');
            $(button).prop('disabled', true);
            this.removeLife(); //remove one life
        } 

        //if the actived phrase includes button value, add a class choosen, disable it
        if(button && this.activePhrase.phrase.includes($(button).text())){
            $(button).addClass('chosen');
            $(button).prop('disabled', true); 
            this.activePhrase.showMatchedLetter($(button).text()); //show the matched letter 
            if(this.checkForWin() === true){
                this.gameOver(true); //if win, call gameover()
            };
        }

        //following part of code handles keyboard 
        if(key && (this.activePhrase.phrase.includes(key) === false)){
            $(".keyrow button").each((index, element)=>{
                if($(element).text()===key){
                    $(element).addClass('wrong');
                    //if disabled, u can't remove life anymore, only remove once
                    if(!$(element).is(":disabled")){
                        this.removeLife();
                    }
                    $(element).prop('disabled', true); 
                }
            })
        } 


        if(key && this.activePhrase.phrase.includes(key)){

            $(".keyrow button").each((index, element)=>{
                if($(element).text()===key){
                    $(element).addClass('chosen');
                    $(element).prop('disabled', true);
                }
            })

            this.activePhrase.showMatchedLetter(key);

            if(this.checkForWin() === true){
                this.gameOver(true);
            };
        }
        
    }
    

    checkForWin(){
        let count = 0;
        
        $("#phrase ul li").each((index, element) => {
            //if the button class equlas to show letter {letter}, then add one count
            if($(element).attr('class') === `show letter ${$(element).text()}`){
                count +=1;
            } 
            //if the button class equlas to space, then add one count
            if($(element).attr('class') === `space`){
                count +=1;
            } 
        })
        //if the count equals to the phrase length, return true so win
        if(count === ($("#phrase ul li").length)){
            return true;
        } 
    }

    removeLife(){
        
        $(".tries")[this.missed].remove(); //removing life based on index
        //adding a lose heart 
        $('<li class="tries"><img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>').insertBefore($("#scoreboard ol li")[this.missed]);
        //increase missed by one
        this.missed +=1;
        if(this.missed === 5){
            //if missed equals 5, then lose
            this.gameOver(false);
        }
    }
    gameOver(gameWon){

        if(gameWon === false){
            //if lose, remove previous win if there is one, add lose, show message
            $("#overlay").removeClass("win");
            $("#overlay").addClass("lose");
            $("#game-over-message").text("Sorry, better luck next time!");       
        }
        if(gameWon === true){
             //if lose, remove previous lose if there is one, add win, show message
            $("#overlay").removeClass("lose");
            $("#overlay").addClass("win");
            $("#game-over-message").text("Great Job!");    
        }
        //remove start background
        $("#overlay").removeClass("start");
        //reset the phrase 
        $("#phrase ul")[0].remove()
        //append a new ul
        $("#phrase").append('<ul></ul>');
        
        $("#overlay").show();//show the overlay
        $(".keyrow button").each((index, element) => {
            //reset all buttons
            $(element).removeClass("chosen");
            $(element).removeClass("wrong");
            $(element).prop("disabled",false);
        })
        
        this.missed = 0;//reset missed
        $(".tries").each((index,element)=>{
            //reset hearts
            $(element).remove();
        })
        for(let i=0;i<5;i++){
            //reset hearts
            $("#scoreboard ol").append('<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>')
        }    
    }
 }

