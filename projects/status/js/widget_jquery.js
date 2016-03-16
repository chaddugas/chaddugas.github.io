$(document).ready(function () {
  var employees = function(response) {
    var statusHTML = '<ul class="bulleted">';
    $.each(response, function(index, employee) {
      if (employee.inoffice) {
        statusHTML += "<li class=\"in\">" + employee.name + "</li>";
      } else {
        statusHTML += "<li class=\"out\">" + employee.name + "</li>";
      }
    }); // end each
    statusHTML += "</ul>";
    $("#employeeList").html(statusHTML);
  }
  
  var rooms = function(response) {
    var statusHTML = '<ul class="rooms">';
    $.each(response, function(index, room) {
      if (room.available) {
        statusHTML += "<li class=\"empty\">" + room.room + "</li>";
      } else {
        statusHTML += "<li class=\"full\">" + room.room + "</li>";
      }
    }); // end each
    statusHTML += "</ul>";
    $("#roomList").html(statusHTML);
  }
  
  $.getJSON("../status/data/employees.json", employees); // end getJSON
  $.getJSON("../status/data/rooms.json", rooms); // end getJSON
  
}); // end ready
