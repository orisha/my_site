



CommandNotFound = function(){

    let dvCmdNtFnd = $('<div />');

    dvCmdNtFnd.append( 'Command Not Found... type or click <span class="ComandList" onclick="RunCommand(\'help\')">help</span> to list available commands <br />')

    $('.MainTerminal').append( dvCmdNtFnd )
    CancelScrollBottom();
    setTimeout_ScrollBottom = setTimeout( 'ScrollBottom()', 0)

    setTimeout( EnableCliForType(), 100)

    return true;

}


CommandNotImplemented = function(){

    let dvCmdNtFnd = $('<div />');

    dvCmdNtFnd.append( 'Command Not Implemented YET ... type or click <span class="ComandList" onclick="RunCommand(\'help\')">help</span> to list available commands <br />')

    $('.MainTerminal').append( dvCmdNtFnd )
    CancelScrollBottom();
    setTimeout_ScrollBottom = setTimeout( 'ScrollBottom()', 0)

    setTimeout( EnableCliForType(), 100)

    return true;

}

RunCommand = function( command ){


    if ( command == ""){

        EnableCliForType()
        return;
    }

    if ( command == '?'){

        command = 'help';
    }

    let cmd = command.toLowerCase()

    $('.CLIType').last().val(cmd)
    $('.CLIType').attr('readonly', 'readonly')

    let DoesCmdExists = ComandList.includes( cmd );
    let DoesLangExists = Languages.includes( cmd );
    let DoesLangCodeExists = LanguagesCodes.includes( cmd );



    if ( DoesCmdExists !== true  && DoesLangExists !== true && DoesLangCodeExists !== true){

        return CommandNotFound();

    }
    else{

        try {

            eval( cmd + '()' )
            // $('.MainTerminal').append( '<br>' )

            return true;

        }
        catch (e) {

            console.log( e )
            return CommandNotImplemented()
        }

    }
}

ClearTerminal = function( who ){

    $('.Terminal').children().each(function () {

        $(this).remove()
    })
        .promise()
        .done(function () {

            Rebuild(who)
        })
}

Rebuild = function(Who) {

    let trml = $('<span />')
    trml.addClass("MainTerminal")

    $('.Terminal').append( trml );


    if ( Who && Who != '' ){

        setTimeout(Who, 120)
    }
    else {

        setTimeout( EnableCliForType, 100);

    }

}

PresentLanguages = function() {


    time = 100

    setTimeout('$(\'.MainTerminal\').append( \'<br />\' )',time - 10)

    $('.MainTerminal').append( '<div />' )

    for ( i in Languages ){

        let dvcmd = $('<div />')

        dvcmd.addClass( 'ComandList clickMe' )
        dvcmd.html( Languages[i])

        dvcmd.attr('onclick', "RunCommand($(this).html())" );

        let  FillLanguages= function(  ){

            $('.MainTerminal').append( dvcmd )
            CancelScrollBottom();
            setTimeout_ScrollBottom = setTimeout( 'ScrollBottom()', 0)
        }

        setTimeout( FillLanguages, time);

        time = time + timeInc;
    }

    setTimeout( EnableCliForType, time);
}

PresentComands = function (){



    time = 100

    setTimeout('$(\'.MainTerminal\').append( \'<br />\' )',time - 10)

    $('.MainTerminal').append( '<div />' )

    for ( i in ComandList ){

        let dvcmd = $('<div />')

        dvcmd.addClass( 'ComandList clickMe' )
        dvcmd.html( ComandList[i])

        dvcmd.attr('onclick', "RunCommand(\"" + ComandList[i] + "\")" );

        let  FillCommand = function(  ){

            $('.MainTerminal').append( dvcmd )
            CancelScrollBottom();
            setTimeout_ScrollBottom = setTimeout( 'ScrollBottom()', 0)
        }

        setTimeout( FillCommand, time);

        time = time + timeInc;
    }

    setTimeout( EnableCliForType, time);



}

StartCLI = function () {

    time = 100;
    var InitialMessage = "Please, type or click one of the follow commands:"


    let spnInit = $('<span />')

    spnInit.addClass('spnInit')

    $('.MainTerminal').append( spnInit )

    for (i in InitialMessage) {

        let letter = InitialMessage[i];
        setTimeout( function () {

            $('.spnInit').last().append(letter);

            if ( i == 0){
                CancelScrollBottom();
                setTimeout_ScrollBottom = setTimeout( 'ScrollBottom()', 0)
            }
        }, time);

        time = time + timeInc;

    }
    setTimeout( 'PresentComands()', time);

}


EnableCliForType = function(){


    time = 100

    var CLI = $('<div />')

    CLI.append('$ ')

    var ipt = $('<input  />')
    ipt.addClass( 'IptTerminal CLIType')
    ipt.attr('type', 'text')
    // ipt.attr('onkeypress', 'ss(this)')
    ipt.on("keyup", function(event) {

        if ( $(this).attr('readonly')){
            return false
        }

        if (event.key === "Enter") {
            RunCommand ( $(this).val() )
        }
    })


    CLI.append ( ipt )


    setTimeout(
        function () {
                    $('.MainTerminal').append( '<br />' )
                    $('.MainTerminal').append( CLI )
                    $('.MainTerminal').append( '<br />' )
                    CancelScrollBottom()
                    setTimeout_ScrollBottom = setTimeout( 'ScrollBottom()', 0 )
                    setTimeout( 'ChangeCursor()', 0);

                }
        , time);


}
