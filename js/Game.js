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
        return this.phrases[randomNumber];
    }

    startGame(){    
        $("#overlay").hide();
        this.activePhrase  = new Phrase(this.getRandomPhrase().phrase);
        console.log(this.activePhrase);
        this.activePhrase.addPhraseToDisplay();
    }
    
    handleInteraction(button){

        //console.log(this.activePhrase.phrase);
        //console.log(this.activePhrase);
        if(this.activePhrase.phrase.includes($(button).text()) === false){
            $(button).addClass('wrong');
            $(button).prop('disabled', true);
            this.removeLife();
        } 

        
        if(this.activePhrase.phrase.includes($(button).text())){
            $(button).addClass('chosen');
            $(button).prop('disabled', true);
            this.activePhrase.showMatchedLetter($(button).text());
            if(this.checkForWin() === true){
                this.gameOver(true);
            };
        }
        
    }
    

    //phrase.phrase needs to be reset
    handleInteractionKeyboard(key){
        
        console.log(this.activePhrase.phrase);
        
        if(this.activePhrase.phrase.includes(key) === false){
            $(".keyrow button").each((index, element)=>{
                if($(element).text()===key){
                    $(element).addClass('wrong');
                    $(element).prop('disabled', true);
                }
            })
            this.removeLife();
        } 


        if(this.activePhrase.phrase.includes(key)){

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
            if($(element).attr('class') === `show letter ${$(element).text()}`){
                count +=1;
            } 
            if($(element).attr('class') === `space`){
                count +=1;
            } 
        })
        //console.log(count);
        //console.log($("#phrase ul li").length);
        if(count === ($("#phrase ul li").length)){
            return true;
        } 
    }

    removeLife(){
        
        $(".tries")[this.missed].remove(); //first missing 
        $('<li class="tries"><img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>').insertBefore($("#scoreboard ol li")[this.missed]);
        this.missed +=1;
        if(this.missed === 5){
            this.gameOver(false);
        }
    }
    //reset issue needs to be solve
    gameOver(gameWon){

        if(gameWon === false){
            $("#overlay").removeClass("win");
            $("#overlay").addClass("lose");
            $("#game-over-message").text("Sorry, better luck next time!");       
        }
        if(gameWon === true){
            $("#overlay").removeClass("lose");
            $("#overlay").addClass("win");
            $("#game-over-message").text("Great Job!");    
        }

        $("#overlay").removeClass("start");
        $("#phrase ul")[0].remove()
        $("#phrase").append('<ul></ul>');
        $("#overlay").show();
        $(".keyrow button").each((index, element) => {
            $(element).removeClass("chosen");
            $(element).removeClass("wrong");
            $(element).prop("disabled",false);
        })
        
        this.missed = 0;
        $(".tries").each((index,element)=>{
            $(element).remove();
        })
        for(let i=0;i<5;i++){
            $("#scoreboard ol").append('<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>')
        }    
    }
 }

