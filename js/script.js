window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  const minimumLoadingTime = 3000; // 2 seconds
  const startTime = Date.now();

  const hidePreloader = () => {
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  };

  const elapsedTime = Date.now() - startTime;
  const remainingTime = minimumLoadingTime - elapsedTime;

  if (remainingTime > 0) {
    setTimeout(hidePreloader, remainingTime);
  } else {
    hidePreloader();
  }
});

  window.addEventListener("scroll", () => {
    document.querySelector(".navbar")
      .classList.toggle("scrolled", window.scrollY > 50);
  });


  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.classList.toggle("active");
  });

  
  document.querySelectorAll(".dropdown .arrow").forEach(arrow => {
    arrow.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      arrow.closest(".dropdown").classList.toggle("active");
    });
  });


function openLogin(){
  document.getElementById("loginModal").style.display = "flex";
}

function closeLogin(){
  document.getElementById("loginModal").style.display = "none";
}

function togglePassword(){
  const password = document.getElementById("loginPassword");
  const eyeIcon = document.getElementById("eyeIcon");

  if (eyeIcon.classList.contains("fa-eye-slash")) {
    password.type = "text";                 
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } 
 
  else {
    password.type = "password";            
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
}


let isSignup = false;

function toggleAuth(){
  isSignup = !isSignup;

document.getElementById("formTitle").innerText =
  isSignup ? "Create Citizen Account" : "Citizen Services Portal Login";

document.getElementById("formSubtitle").innerText =
  isSignup 
    ? "Register to access government services, schemes & applications"
    : "Access your government services dashboard";

document.getElementById("submitBtn").innerText =
  isSignup ? "Register Account" : "Access Portal";

document.getElementById("switchText").innerText =
  isSignup 
    ? "Already registered on the citizen portal?"
    : "New to the citizen services portal?";

document.querySelector(".switch-text a").innerText =
  isSignup ? "Login" : "Create account";

document.getElementById("departmentName").style.display =
  isSignup ? "block" : "none";

document.getElementById("confirmPassword").style.display =
  isSignup ? "block" : "none";
}

function handleAuthSubmit(event){
  event.preventDefault();
  window.location.href = "404.html";
}

window.addEventListener("click", function(e){
  const modal = document.getElementById("loginModal");
  if(e.target === modal){
    modal.style.display = "none";
  }
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = 500 / 120;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();

});

function showTab(tabId){
  document.querySelectorAll(".tab-content").forEach(tab=>{
    tab.classList.remove("active");
  });

  document.querySelectorAll(".tab-btn").forEach(btn=>{
    btn.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");
  event.target.classList.add("active");
}