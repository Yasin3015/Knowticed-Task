const formEl = document.querySelector("form");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

const isValidName = (name) => {
  if (name.length < 6 && name.length > 0) {
    nameError.textContent = "Name must be at least 6 characters long";
    return false;
  } else if (name.length === 0) {
    nameError.textContent = "Please Enter your Name";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
};
const isValidEmail = (email) => {
  if (email === "") {
    emailError.textContent = "Please Enter your Email";
    return false;
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid Email";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
};
const isValidPhone = (phone) => {
  if (phone === "") {
    phoneError.textContent = "Please Enter your Phone Number";
    return false;
  }
  const phoneRegex = /^\d{10,15}$/;
  if (!phoneRegex.test(phone)) {
    phoneError.textContent = "Invalid Phone Number";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
};

const isValidSubject = (subject) => {
  if (subject === "") {
    subjectError.textContent = "Please Enter Subject";
    return false;
  }
  return true;
};

const isValidMessage = (message) => {
  if (message === "") {
    messageError.textContent = "Please Enter Message";
    return false;
  }
  return true;
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  subjectError.textContent = "";
  phoneError.textContent = "";

  const validName = isValidName(data.name.trim());
  const validEmail = isValidEmail(data.email.trim());
  const validPhone = isValidPhone(data.phone.trim());
  const validSubject = isValidSubject(data.subject.trim());
  const validMessage = isValidMessage(data.message.trim());

  if (
    !validName ||
    !validEmail ||
    !validPhone ||
    !validSubject ||
    !validMessage
  )
    return;

  fetch("https://knowticed-api.onrender.com/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
});
