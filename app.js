
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("works").addEventListener("click", function (event) {
      event.stopPropagation();
      if (event.target.id === "one" || event.target.id === "two") {
          window.open(
              "https://github.com/Karine-Ollivier",
              "_blank",
              "noreferrer"
          );
      }
  });

  window.addEventListener("scroll", function () {
    var wrappers = document.querySelectorAll(".wrapper");
    wrappers.forEach(function(wrapper) {
        if (window.scrollY > 300) {
            wrapper.classList.add("show");
        } else {
            wrapper.classList.remove("show");
        }
    });
  });

  document.getElementById("top").addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  var wrapper2 = document.querySelector(".wrapper2");
  var contactMe = document.querySelector(".contact-me");
  var content = document.querySelector(".content");

  wrapper2.addEventListener("click", function () {
      contactMe.classList.add("show-me");
      content.classList.add("blur");
  });

  document.getElementById("close").addEventListener("click", function () {
      contactMe.classList.remove("show-me");
      content.classList.remove("blur");
  });
    // Ajout pour gérer l'affichage du tooltip
     var authorBlurb = document.querySelector('.author-blurb');
     var tooltip = document.querySelector('.author-blurb .tooltip');
 
     // Fonction pour afficher le tooltip
     function showTooltip() {
         tooltip.style.visibility = 'visible';
         tooltip.style.opacity = 1;
     }
 
     // Fonction pour masquer le tooltip
     function hideTooltip() {
         tooltip.style.visibility = 'hidden';
         tooltip.style.opacity = 0;
     }
 
     // Attacher les événements pour afficher/masquer le tooltip
     authorBlurb.addEventListener('mouseenter', showTooltip);
     authorBlurb.addEventListener('mouseleave', hideTooltip);
});