var xhrEmployees = new XMLHttpRequest();
var xhrRooms = new XMLHttpRequest();

xhrEmployees.onreadystatechange = function() {
  if (xhrEmployees.readyState === 4) {
    var employees = JSON.parse(xhrEmployees.responseText);
    var statusHTML = "<ul class=\"bulleted\">";
    for (var i=0; i < employees.length; i++) {
      if (employees[i].inoffice) {
        statusHTML += "<li class=\"in\">" + employees[i].name + "</li>";
      } else {
        statusHTML += "<li class=\"out\">" + employees[i].name + "</li>";
      }
    }
    statusHTML += "</ul>";
    document.getElementById("employeeList").innerHTML = statusHTML;
  }
};
xhrEmployees.open("GET", "data/employees.json");
xhrEmployees.send();


xhrRooms.onreadystatechange = function() {
  if (xhrRooms.readyState === 4) {
    var rooms = JSON.parse(xhrRooms.responseText);
    var statusHTML = "<ul class=\"rooms\">";
    for (var i=0; i < rooms.length; i++) {
      if (rooms[i].available) {
        statusHTML += "<li class=\"empty\">" + rooms[i].room + "</li>";
      } else {
        statusHTML += "<li class=\"full\">" + rooms[i].room + "</li>";
      }
    }
    statusHTML += "</ul>";
    document.getElementById("roomList").innerHTML = statusHTML;
  }
};
xhrRooms.open("GET", "data/rooms.json");
xhrRooms.send();