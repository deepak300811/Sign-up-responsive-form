function addClass(selDiv) {
  let name = document.getElementById("name-div")
  let lname = document.getElementById("lname-div")
  let email = document.getElementById("email-div")
  let password = document.getElementById("password-div")

  if (selDiv === "nameDiv") {
    name.classList.add("active")
    lname.classList.remove("active")
    email.classList.remove("active")
    password.classList.remove("active")
  } else if (selDiv === "lnameDiv") {
    lname.classList.add("active")
    name.classList.remove("active")
    email.classList.remove("active")
    password.classList.remove("active")
  } else if (selDiv === "emailDiv") {
    email.classList.add("active")
    name.classList.remove("active")
    password.classList.remove("active")
    lname.classList.remove("active")
  } else if (selDiv === "passwordDiv") {
    password.classList.add("active")
    name.classList.remove("active")
    lname.classList.remove("active")
    email.classList.remove("active")
  } else {
    name.classList.remove("active")
    password.classList.remove("active")
    lname.classList.remove("active")
    email.classList.remove("active")
  }
}

function checkError() {
  let name = document.getElementById("name").value
  let lastName = document.getElementById("lastName").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

  let nameDiv = document.getElementById("name-div")
  let lnameDiv = document.getElementById("lname-div")
  let emailDiv = document.getElementById("email-div")
  let passwordDiv = document.getElementById("password-div")
  let errorFlag = false
  if (name.trim() === "" || name.trim() === null || name.trim() === undefined) {
    nameDiv.classList.add("error")
    errorFlag = true
  }
  if (
    lastName.trim() === "" ||
    lastName.trim() === null ||
    lastName.trim() === undefined
  ) {
    lnameDiv.classList.add("error")
    errorFlag = true
  }
  if (
    email.trim() === "" ||
    email.trim() === null ||
    email.trim() === undefined
  ) {
    emailDiv.classList.add("error")
    errorFlag = true
  }
  if (
    password.trim() === "" ||
    password.trim() === null ||
    password.trim() === undefined
  ) {
    passwordDiv.classList.add("error")
    errorFlag = true
  }

  if (!errorFlag) {
    document.getElementById("myForm").submit()
  }
}

document
  .getElementById("btn-clear")
  .addEventListener("click", function (event) {
    event.preventDefault()
  })

document.getElementById("name-div").addEventListener("keydown", function () {
  document.getElementById("name-div").classList.remove("error")
})
document.getElementById("lname-div").addEventListener("keydown", function () {
  document.getElementById("lname-div").classList.remove("error")
})
document.getElementById("email-div").addEventListener("keydown", function () {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const val = document.getElementById("email").value
  if (!re.test(String(val).toLowerCase())) {
    document.getElementById("email-div").classList.add("error")
  } else {
    document.getElementById("email-div").classList.remove("error")
  }
})
document
  .getElementById("password-div")
  .addEventListener("keydown", function () {
    document.getElementById("password-div").classList.remove("error")
  })
