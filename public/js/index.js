let formName = document.forms.firstForm.Full_Name;
let formEmail = document.forms.firstForm.Email_Address;
let formNumber = document.forms.firstForm.Phone_No;
let formMessage = document.forms.firstForm.message;
let formButton = document.forms.firstForm.form_submit;
let errorMessageName = document.querySelector(".error-message-name");
let errorMessageEmail = document.querySelector(".error-message-email");

function formValidate() {
	if (nameValidation() === true && emailValidation() == true) {
		return true;
	} else {
		return false;
	}
}

function nameValidation() {
	let nameReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	let regEx = new RegExp(nameReg, "g");
	let formNameValue = formName.value;
	let test = formNameValue.match(regEx);
	let error = (errorMessageName.innerHTML =
		"You can only write letters not number");

	if (test !== null) {
		return true;
	} else if (formNameValue == "") {
		error = errorMessageName.innerHTML = "Full Name is Required";
		return false;
	} else if (test == null) {
		return error;
	}
}

function emailValidation() {
	let nameReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	let regEx = new RegExp(nameReg, "g");
	let formEmailValue = formEmail.value;
	let test = formEmailValue.match(regEx);
	let error = (errorMessageEmail.innerHTML =
		"Please input valid Email like example@gmail.com");

	if (test !== null) {
		return true;
	} else if (formEmailValue == "") {
		error = errorMessageEmail.innerHTML = "Email Address is required";
		return false;
	} else if (test == null) {
		return error;
	}
}
