var screenWidth, screenHeight, bodyElement, message, topbarHeight;
bodyElement = $(window);
topbarHeight = $(".top-bar").height();



$(document).foundation();

$(document).ready( function(){
    setupBackGround( calculateDimensions() );
});

$(window).resize( function(){
    location.reload( true );
    setupBackGround( calculateDimensions() );
});

function calculateDimensions(){
    var dimensions;
    screenWidth = bodyElement.width();
    screenHeight = bodyElement.height();
    screenHeight -= topbarHeight;
    dimensions = { scrWidth: screenWidth, scrHeight: screenHeight };
    return dimensions;
}

function setupBackGround( dimensions ){
    message = "The Width is: " + dimensions.scrWidth.toString() + "." + "<br /> The Height is: " + dimensions.scrHeight.toString() + ".";
    $('#information').html( message );
}