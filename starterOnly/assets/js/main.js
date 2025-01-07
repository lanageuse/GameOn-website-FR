// DOM Elements
const modal = document.querySelector(".modal-overlay");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".btn-close");
const formData = document.querySelectorAll(".formData");

var editNav = () => {
     var topNav = document.getElementById("myTopnav");
    if (topNav.className === "topnav") {
      topNav.className += " responsive";
    } else {
      topNav.className = "topnav";
    }
}

// launch modal form
const launchModal = () =>{
  modal.style.display = "block";
}

//close modal form
const closeModal = () =>{
  modal.style.display = "none";
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((closeBtn) => closeBtn.addEventListener("click", closeModal));


