$(document).ready(function(){

//Fade In Animation For The Logo
    $("#logo").hide();
    $("#logo").fadeTo(1500, 1);

//Light Box Script
    var $lightbox = $('<div id="lightbox"></div>'),
        $image = $('<div id="image"></div>'),
        $caption = $('<p id="caption"></p>'),
        $overlay = $('<div id="overlay"></div>');
        $clickToVisit = $('<span id="clickToVisit"></span>');

    $lightbox.append($image);
    $image.append($overlay);
    $image.append($caption);
    $overlay.append($clickToVisit);
    $('body').append($lightbox);

    $('#gallery a').click(function(event) {
        event.preventDefault();
        
        var imageBackground = $(this).children('img').attr('src'),
            captionText = $(this).children('img').attr('alt'),
            siteLocation = $(this).attr('href');
        
        $image.css('background', 'url(' + imageBackground + ')');
        $image.addClass('image');
        $caption.text(captionText);
        $clickToVisit.html('<a href="' + siteLocation + '">[click to view]</a>');
        $lightbox.fadeIn(400);
    });//end gallery item click
 
    $lightbox.click(function() {
        $lightbox.fadeOut(400);
    });//end lightbox click

});//end document ready