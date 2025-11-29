window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    setTimeout(() => {
      loader.classList.add("hide");
    }, 1000); 
  });

  document.addEventListener("DOMContentLoaded", () => {
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
  