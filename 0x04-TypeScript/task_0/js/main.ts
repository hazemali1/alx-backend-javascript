interface Student {
	firstName: string
	lastName: string
	age: number
	location: string
}

let studen1 : Student = {
	firstName: "hazem",
	lastName: "ali",
	age: 20,
	location: "egypt",
}

let studen2 : Student = {
	firstName: "zoome",
	lastName: "hazem",
	age: 20,
	location: "paris",
}

let studentsList: Array<Student> = [studen1, studen2];

let mytable = document.createElement("table");
mytable.setAttribute("border", "2");
mytable.setAttribute("width", "200px");
mytable.setAttribute("height", "200px");
mytable.style.marginLeft="45%";
mytable.style.marginTop="20%";
let row = document.createElement("tr");
let header_firstName = document.createElement("th");
header_firstName.textContent = "first name";
let header_location = document.createElement("th");
header_location.textContent = "location";
row.appendChild(header_firstName);
row.appendChild(header_location);
mytable.appendChild(row);

studentsList.forEach(ele => {
	let row = document.createElement("tr");
	let firstName = document.createElement("td");
	firstName.textContent = ele.firstName;
	row.appendChild(firstName);
	let location = document.createElement("td");
	location.textContent = ele.location;
	row.appendChild(location);
	row.style.textAlign = "center";
	mytable.appendChild(row);
});

document.body.appendChild(mytable);

