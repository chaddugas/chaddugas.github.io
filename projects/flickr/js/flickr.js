$(document).ready(function(){

// Hide #photos ul
    $('#photos').hide();

// Form submit ajax function
    $('form').submit(function(event) {
        event.preventDefault();
        $('#waiting').hide();
        function photoSearch() {
            $.ajax({
                dataType: 'json',
                url: 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
                data: { 
                    tags: $('#search').val(),
                    format: 'json'}, //end data object
                success: function(data) {
                    if (data.items.length > 0) {
                        var photoHTML = "";
                        $.each(data.items, function(i, photo) {
                            photoHTML += '<li class="grid-25 tablet-grid-50">';
                            photoHTML += '<a href="' + photo.link + '" class="image">';
                            photoHTML += '<img src="' + photo.media.m + '"></a></li>';
                        });//end each
                        $('#photos').html(photoHTML);
                        $('#waiting').fadeOut(490);
                        $('#photos').delay(490).fadeIn(500);
                    } else {
                            $('#waiting').delay(490).text('No photos found with the tag ' + $('#search').val() + '. Please try another search.').fadeIn(500);
                    }//end of if else
                    $('#search').blur();
                }//end success function
            }); //end AJAX
        }// end photoSearch function
        photoSearch()
    });//end form submit

// Page Load Preliminary Search
    $('form').submit();

// Search input focus event
    $('#search').on('focus', function(){
        $('#search').val('');
        $('#waiting').text('Waiting for next search...');
        $('#photos').fadeOut(490);
        $('#waiting').delay(490).fadeIn(500);
    });//end focus event

});//end document.ready