let formName = document.forms.firstForm.Full_Name;
let formEmail = document.forms.firstForm.Email_Address;
let formNumber = document.forms.firstForm.Phone_No;
let formMessage = document.forms.firstForm.message;
let formButton = document.forms.firstForm.form_submit;
let formPass = document.forms.firstForm.Password;
let errorMessageName = document.querySelector(".error-message-name");
let errorMessageEmail = document.querySelector(".error-message-email");
let errorMessageNumber = document.querySelector(".error-message-number");
let errorMessagePass = document.querySelector(".error-message-password");
let errorMessage = document.querySelector(".error-message-message");
let count = document.querySelector(".count");
// let valueLength = formMessage.value;

console.log(formValidate());

function main() {
	if (formValidate() === true) {
		return true;
	} else {
		return false;
	}
}
function formValidate() {
	if (
		(nameValidation(),
		emailValidation(),
		numberValidation(),
		strongPass(),
		check()) == true
	) {
		return true;
	} else false;
}

function nameValidation() {
	let nameReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	let regEx = new RegExp(nameReg, "g");
	let formNameValue = formName.value;
	let test = formNameValue.match(regEx);

	if (test !== null) {
		errorMessageName.innerHTML = "";
		return true;
	} else if (formNameValue == "") {
		errorMessageName.innerHTML = "Full Name is Required";
		return false;
	} else if (test == null) {
		errorMessageName.innerHTML = "You can only write letters not number";
		return false;
	}
}

function emailValidation() {
	let nameReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	let regEx = new RegExp(nameReg, "g");
	let formEmailValue = formEmail.value;
	let test = formEmailValue.match(regEx);

	if (test !== null) {
		errorMessageEmail.innerHTML = "";
		return true;
	} else if (formEmailValue == "") {
		errorMessageEmail.innerHTML = "Email Address is required";
		return false;
	} else if (test == null) {
		errorMessageEmail.innerHTML =
			"Please input valid Email like example@gmail.com";
		return false;
	}
}

function numberValidation() {
	let nameReg = /^(\+)?(\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
	let regEx = new RegExp(nameReg, "g");
	let formNumberValue = formNumber.value;
	let test = formNumberValue.match(regEx);

	if (test !== null) {
		errorMessageNumber.innerHTML = "";
		return true;
	} else if (formNumberValue == "") {
		errorMessageNumber.innerHTML = "Phone No is required";
		return false;
	} else if (test == null) {
		errorMessageNumber.innerHTML = "Please give a valid Number";
		return false;
	}
}

function strongPass() {
	let namereg =
		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
	let regexpr = new RegExp(namereg, "g");
	let value = formPass.value;
	let password = value.match(regexpr);

	if (password !== null) {
		errorMessagePass.innerHTML = "";
		return true;
	} else if (value == "") {
		errorMessagePass.innerHTML = "Password is required";
		return false;
	} else {
		errorMessagePass.innerHTML = "Weak Password";
		return false;
	}
}

formMessage.addEventListener("input", () => {
	let valueLength = formMessage.value;
	let length = Number(valueLength.length);
	count.innerHTML = length;
	check(length);
});

function check(e) {
	if (e > 250) {
		errorMessage.innerHTML = `Length Should be less than 250 characters`;
		return false;
	} else if (e <= 250) {
		errorMessage.innerHTML = ``;
		return true;
	}
}
