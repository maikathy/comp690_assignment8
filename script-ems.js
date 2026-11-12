// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [12345, "John Smith", 1234, "john.smith@email.com", "Engineering"],
    [12335, "John Brown ", 4567, "john.brown@email.com", "Marketing"],
    [12325, "John Wilson", 7890, "john.wilson@email.com", "Sales"],
    [12315, "John Das", 7855, "john.das@email.com", "Admin"],
    [12355, "John John", 8984, "john.john@email.com", "QA"],
    
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem("employees") !== null) {
    employees = JSON.parse(localStorage.getItem("employees"));
}


// GET DOM ELEMENTS
const form = document.getElementById('addForm');
const empTable = document.getElementById('employees');
const empCount = document.getElementById('empCount');

const idInput = document.getElementById("id");

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [id, name, extension, email, department];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    idInput.focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {

        // CONFIRM THE DELETE
        let answer = confirm("Are you sure you want to delete this employee?");

        if (answer) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex;
            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex - 1, 1);
            // BUILD THE GRID
            buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {

    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    let tbody = empTable.querySelector("tbody");

    // REBUILD THE TBODY FROM SCRATCH
    tbody.innerHTML = "";

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of employees) {

        // BIND THE TBODY TO THE EMPLOYEE TABLE
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td>${employee[3]}</td>
            <td>${employee[4]}</td>
            <td>
                <button class="btn btn-danger btn-sm">Delete</button>
            </td>

        `;

        tbody.appendChild(row);
    }

    // UPDATE EMPLOYEE COUNT
    empCount.textContent = employees.length;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem("employees", JSON.stringify(employees));

}