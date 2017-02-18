var color = $(".selected").css("background-color"),
    $canvas = $("canvas"),
    context = $canvas[0].getContext("2d"),
    lastEvent,
    mouseDown = false;

// When clicking on control list items
$(".controls").on("click", "li",function() {
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  color = $(this).css("background-color");
  $("#brushSize").css("background-color", color);
});
  
  
// When new color is pressed
$("#revealColorSelect").click(function() {
    if ($("#colorSelect").css('display') == 'none') {
        $("#colorSelect").fadeIn(300).css('display', "inline-block");
    } else {
        $("#colorSelect").fadeOut(300);
    }
});

// When brush options is pressed
$("#revealBrushOptions").click(function() {
    if ($("#brushOptions").css('display') == 'none') {
        $("#brushOptions").fadeIn(300).css('display', "inline-block");
    } else {
        $("#brushOptions").fadeOut(300);
    }
});

function changeColor() {
  var r = $("#red").val(), 
      g = $("#green").val(), 
      b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}
  
// When color sliders change
$("#red, #green, #blue").on("input", changeColor);
  
// When brush slider changes
$("#width").on("input", function() {
  context.lineWidth = $("#width").val();
  $("#brushSize").css("width", $("#width").val());
  $("#brushSize").css("height", $("#width").val());
});
  
// When add color is pressed
$("#addNewColor").click(function() {
  var $newColor = $("<li></li>");
  $(".controls ul").append($newColor);
  $newColor.css("background", $("#newColor").css("background-color"));
  $newColor.click();
});
  
  
$canvas.mousedown(function(e) {
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  if(mouseDown) {
  context.beginPath();
  context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  context.lineTo(e.offsetX, e.offsetY);
  context.strokeStyle = color;
  context.stroke(); 
  lastEvent = e; 
  }
}).mouseup(function() {
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});

context.lineCap = "round"; 
context.lineWidth = $("#width").val(); 
$("#brushSize").css("background-color", color);