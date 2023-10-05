//code for checkbox select
function checkSelection(){

	if(document.getElementById('selectCheckBox').checked)
		document.getElementById('selectCheckBox').checked = false;

	var x = document.getElementById('selectList');

	if(x.value == "none"){

		document.getElementById('dropDown').style.display = "none";
		var y = document.getElementById('dropDown');
		y.childNodes[1].required = false;
	}
	else{

		var y = document.getElementById('dropDown').style.display = "inline-block";
		document.getElementById('dropDownbox').style.display = "none";
		var z = document.getElementById('dropDown');
		z.childNodes[1].required = true;
	}

	var y = document.getElementById('onSelect');
	if(x.value=="noodles")
		y.innerHTML = "&nbsp;Spicy Ramen";
	else if(x.value=="burger")
		y.innerHTML = "&nbsp;Veggie Burger";
	else if(x.value=="fries")
		y.innerHTML = "&nbsp;Peri Peri Fries";
	else if(x.value=="pizza")
		y.innerHTML = "&nbsp;Large Cheesy";
	else if(x.value=="pasta")
		y.innerHTML = "&nbsp;Arabiata Pasta";
}

function checkBox(x){

	if(x.checked){

		document.getElementById('dropDownbox').style.display = "inline-block";
		document.getElementById('selectListText').required = true;

	}
	else{
		document.getElementById('afterCheckbox').style.display = "none";
		document.getElementById('selectListText').required = false;
	}
}



var firstnameError = document.getElementById("firstname_error");
var lastnameError = document.getElementById("lastname_error");
var emailError = document.getElementById("error_email");
var phoneNumberError = document.getElementById("error_phoneNumber");
var streetAddress1Error = document.getElementById("error_streetaddress1");
var cityError = document.getElementById("error_city")
var stateError = document.getElementById("error_state")
var zipcodeError = document.getElementById("error_zip")
var commentError = document.getElementById("error_comment")
var selectCheckBoxError = document.getElementById("selectBox_error")

//validations for selectbox
function validateSelectbox(){
    var selectbox = document.getElementById("selectListText").value;
    if(selectbox.length == 0 || selectbox.length == null || selectbox.length == " "){
        selectCheckBoxError.innerHTML = "Field is required";
        return false;
    }else{
        selectCheckBoxError.innerHTML="&nbsp";
    }
    return true;
}
//validations for firstname
function validatefname() {
    var firstname = document.getElementById("firstname").value;
   
    if(firstname.length == 0 || firstname.length == null || firstname.length == " "){
        firstnameError.innerHTML = "Name is required";
        return false;
    }

    if(!firstname.match(/^[a-zA-Z]+$/)){
        firstnameError.innerHTML = "First name should have letters only";
        return false;
    }

    if(firstname.length<3){
        firstnameError.innerHTML = "Name should have atleast 3 characters";
        return false;
    } else if(firstname.length>10){
        firstnameError.innerHTML = "Name must be less than 10 characters ";
        return false;
    }else{
        firstnameError.innerHTML="&nbsp";
    }

    return true;
}

// validations for lastname
function validatelname() {
    var lastname = document.getElementById("lastname").value;
   
    if(lastname.length == 0 || lastname.length == null || lastname.length == " "){
        lastnameError.innerHTML = "Last name is required";
        return false;
    }

    if(!lastname.match(/^[a-zA-Z]+$/)){
        lastnameError.innerHTML = "Name should have letters only";
        return false;
    }
    if(lastname.length<3){
        lastnameError.innerHTML = "Name should have atleast 3 characters";
        return false;
    } else if(lastname.length>10){
        lastnameError.innerHTML = "Name must be less than 10 characters ";
        return false;
    }else{
        lastnameError.innerHTML="&nbsp";
    }
    return true;
    
}

// validations for mail
function validatemail(){

    var email = document.getElementById("email").value;
   
    if(email.length == 0 || email.length == null || email.length == " "){
        emailError.innerHTML = "Mail is required";
        return false;
    }

    else if(!email.toLowerCase().match(/^[A-Za-z0-9._%+-]+@northeastern\.edu$/)){
        emailError.innerHTML = "Please match the format";
        return false;
    }
    else{
    emailError.innerHTML="&nbsp";
    }
    return true;
}
//validation for phone number

function validatephone(){
    var phoneNumber = document.getElementById("phoneNumber").value;

    if(phoneNumber.length == 0 || phoneNumber.length == null || phoneNumber.length == " "){
        phoneNumberError.innerHTML = "Number is required";
        return false;
    }
   
    else if (!phoneNumber.match(/^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/)){
        phoneNumberError.innerHTML = "Please match the format";
        return false;
    }
    else{
        phoneNumberError.innerHTML="&nbsp";
        }
    
    return true;
}

//validation for streetAddress

function validateAddress1(){
    var streetAddress1 = document.getElementById("streetaddress1").value;

    if(streetAddress1.length == 0 || streetAddress1.length == null || streetAddress1.length == " "){
        streetAddress1Error.innerHTML = "Field is required";
        return false;
    }
    else{
        streetAddress1Error.innerHTML="&nbsp";
    }
    return true;
}

//validation for city
function validateCity(){
    var city = document.getElementById("city").value;

    if(city.length == 0 || city.length == null || city.length == " "){
        cityError.innerHTML = "Field is required";
        return false;
    }else{
        cityError.innerHTML="&nbsp";
        }
    return true;
}

//validations for state
function validateState(){
    var state = document.getElementById("state").value;

    if(state.length == 0 || state.length == null || state.length == " "){
        stateError.innerHTML = "State field is required";
        return false;
    }else{
        stateError.innerHTML="&nbsp";
        }
    return true;
}

//validations for zipcode
function validateZipcode(){
    var zipcode = document.getElementById("zipcode").value;

    if(zipcode.length == 0 || zipcode.length == null || zipcode.length == " "){
        zipcodeError.innerHTML = "Field is required";
        return false;
    }
   
    if(!zipcode.match( /(^\d{5}$)|(^\d{5}-\d{4}$)/)){
        zipcodeError.innerHTML = "Please match the Zipcode format"
        return false;
    }
    else{
        zipcodeError.innerHTML="&nbsp";
        }
    
    return true;
}

//validations for comment
function validatecomment(){
    var comment = document.getElementById("comment").value;

    if(comment.length == 0 || comment.length == null || comment.length == " "){
        commentError.innerHTML = "Comment field is required";
        return false;
    }else{
        commentError.innerHTML="&nbsp";
        }
    return true;
}


//code for inserting values in table

function submitButton(){

    
    document.getElementById('dropDown').style.display = "none;"

    if(document.getElementById('miss').checked)
 			title = "Miss.";
	 	else if(document.getElementById('mr').checked)
	 		title = "Mr.";
	 	else
	 		title = "Mrs.";

	 	firstName = document.getElementById('firstname').value;
	 	lastName = document.getElementById('lastname').value;
	 	email = document.getElementById('email').value;
	 	phone = document.getElementById('phoneNumber').value;
	 	zipCode = document.getElementById('zipcode').value;
        streetaddress1 = document.getElementById('streetaddress1').value;
        streetaddress2 = document.getElementById('streetaddress2').value;
	 	city = document.getElementById('city').value;
	 	state = document.getElementById('state').value;
         comment = document.getElementById('comment').value;
	 	food = document.getElementById('selectList').value;
                console.log("1");
	  	if(document.getElementById('selectList').value!="none")
	  	{
	 		foodTextBox = document.getElementById('selectListText').value;
	 	}
	 	else
	 		foodTextBox = "-";

             sessionStorage.setItem("title", title);
             sessionStorage.setItem("firstName", firstName);
             sessionStorage.setItem("lastName", lastName);
             sessionStorage.setItem("email", email);
             sessionStorage.setItem("phone", phone);
             sessionStorage.setItem("streetaddress1", streetaddress1);
             sessionStorage.setItem("streetaddress2", streetaddress2);
             sessionStorage.setItem("zipCode", zipCode);
             sessionStorage.setItem("comment", comment);
             sessionStorage.setItem("foodTextBox", foodTextBox);
             sessionStorage.setItem("food", food);
    
             return true;
         
         return false;
    }

function resetButton(){

    document.getElementById("error_email").style.display="none";
    document.getElementById("firstname_error").style.display="none";
    document.getElementById("lastname_error").style.display="none";
    document.getElementById("error_phoneNumber").style.display="none";
    document.getElementById("error_streetaddress1").style.display="none";
    document.getElementById("error_streetaddress2").style.display="none";
    document.getElementById("error_city").style.display="none";
    document.getElementById("error_state").style.display="none";
    document.getElementById("error_zip").style.display="none";
    document.getElementById("dropDown").style.display="none";
    document.getElementById("dropDownbox").style.display="none";

}
function isMyFormValid() {
    return validatefname() &&
        validatelname() &&
        validatemail() &&
        validatephone() &&
        validateAddress1() &&
        validateCity() &&
        validateState() &&
        validateZipcode() &&
        validateSelectbox() &&
        validatecomment();
}
const form = document.myForm;
form.addEventListener('change', function() {
    if (isMyFormValid()) {
        document.myForm.submit.disabled=false;
        return true;
    } else {
        document.myForm.submit.disabled = true; 
        return false; 
    }
});

function showData(){

    firstName = document.getElementById('firstname').value;
    lastName = document.getElementById('lastname').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phoneNumber').value;
    zipCode = document.getElementById('zipcode').value;
    streetaddress1= document.getElementById('streetaddress1').value;
    streetaddress2= document.getElementById('streetaddress2').value;
    city = document.getElementById('city').value;
    state = document.getElementById('state').value;
    comment = document.getElementById('comment').value;
    food = document.getElementById('selectList').value;
    var table = document.getElementById('myTable');
    var personRow=document.createElement('tr');
    var tdFName=document.createElement('td');
    var tdLName=document.createElement('td');
    var tdEmail=document.createElement('td');
    var tdPhNum=document.createElement('td');
    var tdAdd1=document.createElement('td');
    var tdAdd2=document.createElement('td');
    var tdCity=document.createElement('td');
    var tdstate=document.createElement('td');
    var tdZip=document.createElement('td');
    var tdFood=document.createElement('td');
    var tdCom=document.createElement('td');
    tdFName.innerHTML=firstName;
    tdLName.innerHTML=lastName;
    tdEmail.innerHTML=email;
    tdPhNum.innerHTML=phone;
    tdAdd1.innerHTML=streetaddress1;
    tdAdd2.innerHTML=streetaddress2;
    tdCity.innerHTML=city;
    tdstate.innerHTML=state;
    tdZip.innerHTML=zipCode;
    tdFood.innerHTML=food;
    tdCom.innerHTML=comment;
    table.lastElementChild.appendChild(personRow);
    personRow.appendChild(tdFName);
    personRow.appendChild(tdLName);
    personRow.appendChild(tdEmail);
    personRow.appendChild(tdPhNum);
    personRow.appendChild(tdAdd1);
    personRow.appendChild(tdAdd2);
    personRow.appendChild(tdCity);
    personRow.appendChild(tdstate);
    personRow.appendChild(tdZip);
    personRow.appendChild(tdFood);
    personRow.appendChild(tdCom);
    return false;

}



