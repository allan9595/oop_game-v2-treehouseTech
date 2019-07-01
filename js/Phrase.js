/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
        this.phrase = phrase.toLowerCase(); 
     }

    addPhraseToDisplay(){
        for(let i=0;i<this.phrase.length;i++){
            $("#phrase ul").append(`<li>${this.phrase[i]}</li>`);
        }
        $("#phrase ul li").each((index, element) => {
            if($(element).text() !== " "){
                $(element).addClass(`hide letter ${$(element).text()}`);
            } 
            if($(element).text() === " "){
                $(element).addClass("space");
            }
        })
    }
 }