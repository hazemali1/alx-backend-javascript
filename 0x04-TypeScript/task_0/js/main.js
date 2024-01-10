var studen1 = {
    firstName: "hazem",
    lastName: "ali",
    age: 20,
    location: "egypt",
};
var studen2 = {
    firstName: "zoome",
    lastName: "hazem",
    age: 20,
    location: "paris",
};
var studentsList = [studen1, studen2];
var mytable = document.createElement("table");
mytable.setAttribute("border", "2");
mytable.setAttribute("width", "200px");
mytable.setAttribute("height", "200px");
mytable.style.marginLeft = "45%";
mytable.style.marginTop = "20%";
var row = document.createElement("tr");
var header_firstName = document.createElement("th");
header_firstName.textContent = "first name";
var header_location = document.createElement("th");
header_location.textContent = "location";
row.appendChild(header_firstName);
row.appendChild(header_location);
mytable.appendChild(row);
studentsList.forEach(function (ele) {
    var row = document.createElement("tr");
    var firstName = document.createElement("td");
    firstName.textContent = ele.firstName;
    row.appendChild(firstName);
    var location = document.createElement("td");
    location.textContent = ele.location;
    row.appendChild(location);
    row.style.textAlign = "center";
    mytable.appendChild(row);
});
document.body.appendChild(mytable);
