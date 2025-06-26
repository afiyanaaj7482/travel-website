let user = document.getElementById("user");
let loginBtn = document.getElementById("loginBtn");
let submit = document.getElementById("submit");
let placName = document.getElementById("placeName");

user.addEventListener("click", function() {
  document.querySelector(".loginPage").classList.toggle("active1")
})

loginBtn.addEventListener("click", function(){
  let email = document.getElementById("email");
  let pass = document.getElementById("pass");

  if(email.value =="" && pass.value ==""){
      alert("Please Fill Detail ")
  }else{
      alert("You Logged In");
      document.querySelector(".loginPage").style.display="none"
  }
})

submit.addEventListener("click", function(event) {
  event.preventDefault();
  if (placName.value == "") {
    alert("Fill Form")
  } else {
    alert(placName.value + " Tour Booked")
  }
})

document.querySelector(".contactForm button").addEventListener("click", function() {
  const name = document.querySelector(".contactForm input[placeholder='Enter Name']").value;
  const email = document.querySelector(".contactForm input[placeholder='Enter Email']").value;

  if (name === "" || email === "") {
    alert("Please fill in all fields.");
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
  } else {
    alert("Thank you for contacting us, " + name + "!");
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("callbackForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const formdata = new FormData(event.target);
  if (formdata.get("destination") === "" || formdata.get("departure") === "" || formdata.get("name") === "" || formdata.get("phone") === "" || formdata.get("email") === "") {
    alert("Please fill in all fields.");
  } else if (!validateEmail(formdata.get("email"))) {
    alert("Please enter a valid email address.");
  } else {
    alert("Form submitted successfully!");
    closePopup();
  }
});
