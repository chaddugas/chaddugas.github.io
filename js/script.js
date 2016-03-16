/*************************************
MATERIALIZE SCRIPTS
*************************************/
    (function($){
        $(function(){
            $('#menu-button').sideNav({
                menuWidth: 220,
                edge: 'left',
                closeOnClick: false,
                activationWidth: 70
            });
            $('.parallax').parallax();
            $('ul.tabs').tabs();
            $('.scrollspy').scrollSpy();
            
            /*var options = [
                {selector: 'h3.about', offset: 300, callback: 'toast("Hi there! Thanks for visiting my website.", 2500 )' },
                {selector: 'h3.contact', offset: 300, callback: 'toast("Keep in touch!", 2500 )' },
            ];
            scrollFire(options);*/
        });
    })(jQuery);



    /*************************************
    GENERAL SCRIPTS
    *************************************/

    //********Random Console Quote********
    quotes = [];
    authors = [];
    quotes[0] = "I have a new philosophy. I'm only going to dread one day at a time.";
    authors[0] = "Charles Schulz";
    quotes[1] = "Reality is the leading cause of stress for those in touch with it.";
    authors[1] = "Jack Wagner";
    quotes[2] = "Few things are harder to put up with than the annoyance of a good example.";
    authors[2] = "Mark Twain";
    quotes[3] = "The pure and simple truth is rarely pure and never simple.";
    authors[3] = "Oscar Wilde";
    quotes[4] = "There's no business like show business, but there are several businesses like accounting.";
    authors[4] = "David Letterman";
    quotes[5] = "Man invented language to satisfy his deep need to complain.";
    authors[5] = "Lily Tomlin";
    quotes[6] = "Muddy water is best cleared by leaving it alone.";
    authors[6] = "Alan Watts";

    index = Math.floor(Math.random() * quotes.length);
    console.log('"' + quotes[index] + '" - ' + authors[index]);



    /************Nav/Page Scroll Events*************/
    $(function () {
        var currentHash = "#home"
        $(document).scroll(function () {
            $('.hash').each(function () {
                var top = window.pageYOffset;
                var distance = top - $(this).offset().top;
                var hash = $(this).attr('id');
                var title = '[' + hash + ']';

                if (distance < 400 && distance > -300 && currentHash != hash) {
                    $('head title').text(title);
                    currentHash = hash;
                }
            });
        });
    });



    /************Nav Link Press Events************/
    $('header nav ul li').click(function(event) {
        event.preventDefault();
        $("html,body").stop();
        var locationHref = window.location.href,
            elementClick = $(this).children('a').attr("href"),
            destination = $(elementClick).offset().top + 1;
            
            $('head title').text('[' + elementClick.slice(1) + ']');
            $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 1200, function() {
                return false});
    }); //end nav scroll function



    /*************************************
    SECTION SPECIFIC SCRIPTS
    *************************************/

    /***********Calculate Age For About Section***********/
    function age( birth, now ) {
        //Get 1 day in milliseconds
        var one_day=parseFloat(1000*60*60*24);

        // Convert both dates to milliseconds
        var birth_ms = parseFloat(birth.getTime());
        var now_ms = parseFloat(now.getTime());

        // Calculate the difference in milliseconds
        var difference_ms = parseFloat(now_ms - birth_ms);

        // Convert difference in milliseconds to days
        var ageInDays = parseFloat(difference_ms/one_day); 

        // Convert difference in days to years
        var ageInYears = parseInt(Math.floor(ageInDays/365.25)); 

        return ageInYears;
    }

    var now = new Date(),
    birth = new Date('09/26/1991');

    $('#age').text(age(birth, now));


    /************No Link Script************/
    $('.no-link').click(function(event) {
        event.preventDefault();
    });