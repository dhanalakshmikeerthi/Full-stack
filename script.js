// Create heading
let heading = document.createElement("h2");
heading.innerText = "Student Details";
document.body.appendChild(heading);


// Create table
let table = document.createElement("table");
table.border = "1";


// Create table header
let headerRow = document.createElement("tr");

let headers = ["S.No", "Name", "Age", "Marks", "Actions"];

headers.forEach(function(header) {
    let th = document.createElement("th");
    th.innerText = header;
    headerRow.appendChild(th);
});

table.appendChild(headerRow);
document.body.appendChild(table);


// Create Add button
let addButton = document.createElement("button");
addButton.innerText = "Add Student";
document.body.appendChild(addButton);


// Create form
let form = document.createElement("div");
form.style.display = "none";

let nameInput = document.createElement("input");
nameInput.placeholder = "Enter Name";

let ageInput = document.createElement("input");
ageInput.placeholder = "Enter Age";
ageInput.type = "number";

let marksInput = document.createElement("input");
marksInput.placeholder = "Enter Marks";
marksInput.type = "number";

let saveButton = document.createElement("button");
saveButton.innerText = "Save";

form.appendChild(document.createElement("br"));
form.appendChild(nameInput);
form.appendChild(ageInput);
form.appendChild(marksInput);
form.appendChild(saveButton);

document.body.appendChild(form);


// Array to store students
let students = [];


// Add button functionality
addButton.onclick = function() {
    form.style.display = "block";

    nameInput.value = "";
    ageInput.value = "";
    marksInput.value = "";

    saveButton.innerText = "Save";
    editIndex = -1;
};


// Variable for edit operation
let editIndex = -1;


// Save / Add / Update
saveButton.onclick = function() {

    let name = nameInput.value;
    let age = ageInput.value;
    let marks = marksInput.value;

    if (name === "" || age === "" || marks === "") {
        alert("Please enter all values");
        return;
    }


    let student = {
        name: name,
        age: age,
        marks: marks
    };


    // Add
    if (editIndex === -1) {
        students.push(student);
    }

    // Update
    else {
        students[editIndex] = student;
    }


    displayStudents();

    form.style.display = "none";
};


// Display data in table
function displayStudents() {

    // Remove old rows except header
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }


    students.forEach(function(student, index) {

        let row = table.insertRow();

        // S.No
        let sno = row.insertCell();
        sno.innerText = index + 1;

        // Name
        let name = row.insertCell();
        name.innerText = student.name;

        // Age
        let age = row.insertCell();
        age.innerText = student.age;

        // Marks
        let marks = row.insertCell();
        marks.innerText = student.marks;

        // Actions
        let actions = row.insertCell();


        // Edit button
        let editButton = document.createElement("button");
        editButton.innerText = "Edit";

        editButton.onclick = function() {

            nameInput.value = student.name;
            ageInput.value = student.age;
            marksInput.value = student.marks;

            form.style.display = "block";

            saveButton.innerText = "Update";

            editIndex = index;
        };


        // Delete button
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";

        deleteButton.onclick = function() {

            students.splice(index, 1);

            displayStudents();
        };


        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
    });
}