document.addEventListener('DOMContentLoaded', function () {
  const projectLinks = {
      "h3-one": "tripbuddy-details.html", 
      "h3-two": "oflix-details.html"
      // Ajout de nouveaux projets ici
      // "newProjectID": "newProjectURL.html"
    };
  
    document.querySelectorAll(".work h3").forEach(h3 => {
      h3.addEventListener("click", function (event) {
        const projectId = event.currentTarget.id;
        console.log(`Project ID: ${projectId}`);
          if (projectLinks[projectId]) {
              window.location.href = projectLinks[projectId];
          }
      });
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
      // Bascule la classe 'show-me' pour afficher ou cacher le formulaire
      contactMe.classList.toggle("show-me");
      content.classList.toggle("blur");
    });
  
    document.getElementById("close").addEventListener("click", function () {
      // Bascule la classe 'show-me' pour afficher ou cacher le formulaire
      contactMe.classList.toggle("show-me");
      content.classList.toggle("blur");
    });
  
  
    // Gestion du tooltip
    var authorBlurb = document.querySelector('.author-blurb');
    var tooltip = document.querySelector('.author-blurb .tooltip');
  
    function showTooltip() {
      console.log('Souris sur authorBlurb');
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = 1;
    }
  
    function hideTooltip() {
      console.log('Souris hors de authorBlurb');
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = 0;
    }
  
    authorBlurb.addEventListener('mouseenter', showTooltip);
    authorBlurb.addEventListener('mouseleave', hideTooltip);
  });