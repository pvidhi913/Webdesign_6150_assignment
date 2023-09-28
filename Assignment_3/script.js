//code for adding new student
var rows = 3;
var checkrow = 0;

tableHead = ['', 'STUDENT', 'ADVISOR', 'AWARD STATUS', 'SEMESTER', 'TYPE', 'BUDGET', 'PERCENTAGE', 'DELETE', 'EDIT'];
tableVal = [' ', 'Student ', 'Teacher ', 'Approved', 'Fall', 'TA', '23456', '100%', '<button onclick="deleteStudent(this)" class = "buttonDelete">Delete</button>', '<button onclick="editStudent(this)" class = "buttonEdit" >Edit</button>']

function addnewStudent() {

  let table = document.getElementById('myTable');
  let rowCalc = table.rows.length;
  let rowId = rows + 1;

  alert("Student " + rowId + " Record added successfully");
  let tr = table.insertRow(rowCalc);
  tr.setAttribute("id", rowId);

  const tablarray = [];
  for (let i = 0; i < tableHead.length; i++) {
    tablarray.push(tr.insertCell(i));
  }
  rows += 1;
  tablarray[0].innerHTML = '<input type="checkbox"  onchange="clickboxDy(this)" /><br /><br /><img src="down.png" width="25px" onclick="clickdownDy(this)"/>'
   tablarray[1].innerHTML = tableVal[1] + (rows);
  tablarray[2].innerHTML = tableVal[2] + (rows);
  tablarray[3].innerHTML = tableVal[3];
  tablarray[4].innerHTML = tableVal[4];
  tablarray[5].innerHTML = tableVal[5];
  tablarray[6].innerHTML = tableVal[6];
  tablarray[7].innerHTML = tableVal[7];
  tablarray[8].innerHTML = tableVal[8];
  tablarray[8].className = "delBtn";
  tablarray[9].innerHTML = tableVal[9];
  tablarray[9].className = "editBtn";

  var nextrow = table.insertRow(rowCalc + 1);
  nextrow.className = "dropDownTextArea";
  var cell = nextrow.insertCell(0);
  cell.innerHTML = '<td >Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /></td>';
  cell.colSpan = 8
}

//code for deleting student
function deleteStudent(val) {

  let row = val.parentNode.parentNode.rowIndex;
  var rowId = val.parentNode.parentNode.id;
  alert("Student " + rowId + " Record deleted successfully");
  let table = document.getElementById('myTable');
  table.deleteRow(row + 1);
  table.deleteRow(row);

  checkrow--;

  let x = document.getElementsByClassName("delBtn");
  let y = document.getElementsByClassName("editBtn");
  if (checkrow == 0) {
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      y[i].style.display = "none";
    }
  }

  if (checkrow > 0) {
    let z = document.getElementById("button");
    z.disabled = false;
    z.style.backgroundColor = "orange";
    z.style.borderColor = "orange";
  } else if (checkrow == 0) {
    let z = document.getElementById("button");
    z.disabled = true;
    z.style.backgroundColor = "grey";
    z.style.borderColor = "grey";
  }

}

//code for check box changes to yellow
function clickbox(val) { 
  let row = val.parentNode.parentNode;
  var valueEdit = row.lastChild.previousSibling.lastChild;
  var valueDel = row.lastChild.previousSibling.previousSibling.previousSibling.lastChild;
  if (val.checked) {
    row.style.backgroundColor = 'yellow';
    let x = document.getElementsByClassName("delBtn");
    let y = document.getElementsByClassName("editBtn");

    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "table-cell";
      y[i].style.display = "table-cell";
    }

    valueEdit.style.display = "block";
    valueDel.style.display = "block";
    checkrow++;
  }
  else {
    row.style.backgroundColor = 'transparent';
    let x = document.getElementsByClassName("delBtn");
    let y = document.getElementsByClassName("editBtn");
    valueEdit.style.display = "none";
    valueDel.style.display = "none";
    checkrow--;

    if (checkrow == 0) {
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
      }
    }
  }

  if (checkrow > 0) {
    let z = document.getElementById("button");
    z.disabled = false;
    z.style.backgroundColor = "orange";
    z.style.borderColor = "orange";
  } else if (checkrow == 0) {
    let z = document.getElementById("button");
    z.disabled = true;
    z.style.backgroundColor = " grey";
    z.style.borderColor = "grey";
  }

}

function clickboxDy(val) { 
  let row = val.parentNode.parentNode;
  var valueEdit = row.lastChild.lastChild;
   var valueDel = row.lastChild.previousSibling.lastChild;
   if (val.checked) {
    row.style.backgroundColor = 'yellow';
    let x = document.getElementsByClassName("delBtn");
    let y = document.getElementsByClassName("editBtn");

    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "table-cell";
      y[i].style.display = "table-cell";
    }

    valueEdit.style.display = "block";
    valueDel.style.display = "block";
    checkrow++;
  }
  else {
    row.style.backgroundColor = 'transparent';
    let x = document.getElementsByClassName("delBtn");
    let y = document.getElementsByClassName("editBtn");
    valueEdit.style.display = "none";
    valueDel.style.display = "none";
    checkrow--;

    if (checkrow == 0) {
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
      }
    }
  }

  if (checkrow > 0) {
    let z = document.getElementById("button");
    z.disabled = false;
    z.style.backgroundColor = "orange";
    z.style.borderColor = "orange";
  } else if (checkrow == 0) {
    let z = document.getElementById("button");
    z.disabled = true;
    z.style.backgroundColor = "grey";
    z.style.borderColor = "grey";
  }

}
  
//code for dropdown image to display Awards info
function clickdown(val) {
  var textRow = val.parentNode.parentNode.nextSibling.nextSibling;
  if (textRow.style.display == "table-row") {
    textRow.style.display = "none";
  } else {
    textRow.style.display = "table-row";
  }
  
}

function clickdownDy(val) {
  var textRow = val.parentNode.parentNode.nextSibling;
  if (textRow.style.display == "table-row") {
    textRow.style.display = "none";
  } else {
    textRow.style.display = "table-row";
  }
  
}




//code for Editing
function editStudent(val) {

  var rowId = val.parentNode.parentNode.id;
   var row = document.getElementById(rowId);
   var cols = row.getElementsByTagName("td");
  let editPopup = prompt("Edit the details of Student " + rowId + ":" )
  alert("Student " + rowId + " data updated successfully");
  
}