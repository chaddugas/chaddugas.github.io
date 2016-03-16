//Popup Constructor Function and Prototypes
function Popup(config) {
    this.title = config.title;
    this.message = config.message;
    this.buttons = config.buttons;
    this.buttonActn = config.buttonActn;
    this.url = config.url;
    this.method = config.method;
    this.class = config.class;
    this.reload = config.reload;

    this.initDefaults();

    this.me = this.makeHTML();
}

Popup.prototype.initDefaults = function () {
    if (this.title === undefined) { this.title = "Popup"; }
    if (this.message === undefined) { this.message = "The message was not supplied."; }
    if (this.buttons === undefined) { this.buttons = ['ok']; }
    if (this.method === undefined) { this.method = 'get'; }
    if (this.url === undefined) { this.url = false; }
    if (this.reload === undefined) { this.reload = false; }
};

Popup.prototype.makeHTML = function () {
    var html = $('<div class="overlay"></div>'),
        popup = $('<div id="popup" class="popup"></div>'),
        titlebar = $('<div class="titleBar"><span>' + this.title + '</span></div>'),
        note = $('<div class="note"><span>' + this.message + '</span></div>');

    if (this.class) {
        html.addClass(this.class);
    }

    popup.prepend(titlebar).append(note).append(this.makeBtns());
    html.append(popup);

    return html;
};

Popup.prototype.makeBtns = function () {
    var buttons = $('<div class="buttons"></div>'),
        form,
        button,
        input;

    for (i = 0; i < this.buttons.length; i++) {

        form = $('<form></form>');
        button = $('<span class="button">' + this.buttons[i] + '</span>');

        if (this.buttonActn) {
            for (x = 0; x < this.buttonActn[i].length; x++) {
                input = $('<input type="hidden" name="' + this.buttonActn[i][x].name + '" value="' + this.buttonActn[i][x].value + '" />');
                form.append(input);
            }
        }

        form.append(button);
        buttons.append(form);
    }
    return buttons;
};

Popup.prototype.bindButtons = function () {
    var thisPopup = this;

    this.me.find('span.button').each(function () {
        $(this).bind('click', function (event) {
            event.preventDefault();
            var form = $(event.target).parents('form');
            thisPopup.close(form);
        });
    });
};

Popup.prototype.open = function () {
    this.bindButtons();
    $('body').prepend(this.me);
};

Popup.prototype.close = function (form) {
    var thisPopup = this;

    this.me.css('animation-name', 'hidePopup');

    setTimeout(function () {
        thisPopup.me.remove();
        thisPopup.me.css('animation-name', '');
    }, 400);
};


//Popup Instance Declaration

var linkConfig = {
    title: "Custom Popup Object",
    message: "You have just triggered a link event.",
    class: 'fyi',
    buttons: ['awesome!']
};
var linkPop = new Popup(linkConfig);


var logoConfig = {
    title: "Custom Popup Object",
    message: "You have just triggered a site logo event.",
    class: 'fyi',
    buttons: ['sweet!']
};
var logoPop = new Popup(logoConfig);


var addrConfig = {
    title: "Custom Popup Object",
    message: "You have just triggered the address search event.",
    class: 'fyi',
    buttons: ['rad!']
};
var addrPop = new Popup(addrConfig);


var propConfig = {
    title: "Custom Popup Object",
    message: "You have just triggered a properties button event.",
    class: 'fyi',
    buttons: ['neat!']
};
var propPop = new Popup(propConfig);


var searchConfig = {
    title: "Custom Popup Object",
    message: "You have just triggered a property criteria event.",
    class: 'fyi',
    buttons: ['hooray!']
};
var searchPop = new Popup(searchConfig);


//Popup Instance Event Binding

$('a').click(function(event) {
    if ( !$(this).hasClass('ignore') ) {
    	event.preventDefault();
    	linkPop.open();
    }
});

$('#logo').click(function(event) {
	event.preventDefault();
	logoPop.open();
});

$('.go').click(function(event) {
    event.preventDefault();
    addrPop.open();
});

$('#search').submit(function(event) {
    event.preventDefault();
    addrPop.open();
});

$('.button').click(function(event) {
	event.preventDefault();
	propPop.open();
});

$('.searchSelect').change(function(event) {
	searchPop.open();
});


//Search Bar Management

$('#searchQuery').focus(function() {
	$(this).val('');
});

$('#searchQuery').blur(function() {
	if ( !$(this).val() ) {
		$(this).val('Enter Address, Neighborhood, City, Zip or MLS#');
	}
});