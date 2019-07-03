/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
        this.phrase = phrase.toLowerCase(); 
     }

    addPhraseToDisplay(){
        for(let i=0;i<this.phrase.length;i++){
            //add all phrase letter by letter into the ul list
            $("#phrase ul").append(`<li>${this.phrase[i]}</li>`);
        }
        $("#phrase ul li").each((index, element) => {
            if($(element).text() !== " "){
                //applying class, initially all are hide letter
                $(element).addClass(`hide letter ${$(element).text()}`);
            } 
            if($(element).text() === " "){
                //applying class to space
                $(element).addClass("space");
            }
        })
    }

    checkLetter(letter){
       for(let i=0;i<this.phrase.length;i++){
           //if letter matches phrase letter, return true
           if(letter === this.phrase[i]){
               return true;
           } else {
               return false;
           }
       }
    }

    showMatchedLetter(letter){
        $("#phrase ul li").each((index, element) => {
            if($(element).text() === letter){
                //show the matched letter by remove hide class
                $(element).removeClass(`hide letter ${$(element).text()}`);
                $(element).addClass(`show letter ${$(element).text()}`);
            } 
        })
    }
 }