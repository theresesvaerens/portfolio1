window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    setTimeout(() => {
      loader.classList.add("hide");
    }, 1000); 
  });


  document.addEventListener("DOMContentLoaded", () => {
    const navBtn = document.querySelector(".nav-toggle-btn");
    const navbar = document.querySelector(".navbar");
    const navList = document.querySelector(".navbar-list");
    const navLinks = document.querySelectorAll(".navbar-link");
  
 
    navBtn.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navList.classList.remove("active");
      });
    });
  

    document.addEventListener("click", (e) => {
      if (!navList.contains(e.target) && !navBtn.contains(e.target)) {
        navList.classList.remove("active");
      }
    });

    const aboutText = document.querySelector(".about-text");
    const aboutImg = document.querySelector(".about-img");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          }
        });
      },
      { threshold: 0.3 }
    );
  
    observer.observe(aboutText);
    observer.observe(aboutImg);
  });
  
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const form = e.target;
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString()
    })
    .then(() => {
      document.getElementById("success-message").style.display = "block"; 
      form.reset(); 
    })
    .catch((error) => alert(error));
  });