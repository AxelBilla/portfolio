/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("bg-nav").style.top = "0";
  } else {
    document.getElementById("bg-nav").style.top = "-10em";
  }
  prevScrollpos = currentScrollPos;
} 