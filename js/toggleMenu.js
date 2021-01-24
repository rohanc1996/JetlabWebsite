function toggleMenu(x) {
  x.classList.toggle("change");
  if (!isNavOpen){
    openNav();
    isNavOpen = true;
    document.body.style.overflow = "hidden";
  }
  else{
    closeNav();
    isNavOpen = false;
    document.body.style.overflow = "auto";
  }
}
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("overlay").style.height = "calc(15%)";
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("overlay").style.height = "0%";
}
