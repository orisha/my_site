

// PROGRAMMING BLOCK

PresentDivCommandContent = function( who ){


    time = 100;

    $('#' + who).children().each(function () {

        var chd = $(this).clone()

        setTimeout(

                function () {

                    $('.MainTerminal').append( chd );
                    CancelScrollBottom();
                    setTimeout_ScrollBottom = setTimeout( 'ScrollBottom()', 0)
                }
            , time)

        time = time + timeInc;

    });


    setTimeout( EnableCliForType, time);



}

programming = function(){

    time = 100;
    var InitialMessage = "Please, type or click one of the follow Languages:"


    let spnInit = $('<span />')

    spnInit.addClass('spnInit')

    $('.MainTerminal').append( spnInit )

    for (i in InitialMessage) {

        let letter ;
        letter = InitialMessage[i];




        setTimeout(
                function () {

                    $('.spnInit').last().append(letter)
                    if ( i == 0){
                        CancelScrollBottom();
                        setTimeout_ScrollBottom = setTimeout( 'ScrollBottom()', 0)
                    }

                }
            , time);
        time = time + timeInc;

    }
    setTimeout( PresentLanguages, time);
    CancelScrollBottom(time + 10);

}


kotlin = function(){

    PresentDivCommandContent("Kotlin")
}

kotlincode = function(){

    ShowCode('samples/kotlin/AsyncAPIRequest.kt.html')
}

php = function(){


    PresentDivCommandContent("PHP")

}

phpcode = function(){

    ShowCode('samples/php/MySessionUI.php.html')
}


javascript = function(){



    PresentDivCommandContent("JavaScript")


}
javascriptcode = function(){

    ShowCode('samples/js/MyAutoCompleteModal.js.html')
}

golang = function(){



    PresentDivCommandContent("GoLang")


}

golangcode = function(){

    ShowCode('samples/go/Insert.go.html')
}




ShowCode = function(path){

    openPdf(path)
    setTimeout( EnableCliForType, 0);
}



/// PERSONAL BLOCK

resume = function(){



    openPdf("public/FullStack_WebDeveloper_Diego_Favero_resume.pdf");

}

about = function(){


    PresentDivCommandContent("About")


}

clear = function(){

    ClearTerminal()



}

contact = function() {

   PresentDivCommandContent("Contact")

}


skills = function(){



    PresentDivCommandContent("Skills")


}





// HELP BLOCK

home = function(){

    clearTimeout(setTimeout_ScrollBottom)

    $('.Terminal').html( initial )

    setTimeout( StartCLI, 500);



}

menu = function() {


    PresentComands()

}

help = function() {

    PresentDivCommandContent("Help")


}




