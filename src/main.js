// mouse

let mouseX = document.documentElement.clientWidth / 2;
let mouseY = document.documentElement.clientHeight / 2;
let mouseXlerp = mouseX;
let mouseYlerp = mouseY;
let lerp = 0.04;

function onMouseMove(event) {

  mouseX = event.clientX;
  mouseY = event.clientY;

}

document.addEventListener("mousemove", onMouseMove);

function updateMousePosition() {

  mouseXlerp += (mouseX - mouseXlerp) * lerp;
  mouseYlerp += (mouseY - mouseYlerp) * lerp;
  
  if (mouseXlerp !== mouseX || mouseYlerp !== mouseY) {
    if (Math.abs(mouseX - mouseXlerp) < 5) mouseXlerp = mouseX;
    if (Math.abs(mouseY - mouseYlerp) < 5) mouseYlerp = mouseY;
    document.documentElement.style.setProperty("--mouse-x", mouseXlerp + "px");
    document.documentElement.style.setProperty("--mouse-y", mouseYlerp + "px");
  }

  requestAnimationFrame(updateMousePosition);

}

updateMousePosition();


// scroll

let scrollY = window.scrollY;
let scrollSection = scrollY / document.documentElement.clientHeight;
let section1 = document.querySelector(".section-1");
let section2 = document.querySelector(".section-2");

function onScroll() {

  scrollY = window.scrollY;
  scrollSection = scrollY / document.documentElement.clientHeight;

  document.documentElement.style.setProperty("--scroll-section1", Math.max(0, Math.min(1, (scrollSection - 0.8) * 3)));
  document.documentElement.style.setProperty("--scroll-section2", Math.max(0, Math.min(1, (scrollSection - 2.2) * 3)));

  section1.style.display = scrollSection > 0.8 ? "flex" : "none";
  section2.style.display = scrollSection > 2.2 ? "flex" : "none";

}

document.addEventListener("scroll", onScroll);
document.addEventListener("resize", onScroll);
if (screen.orientation) screen.orientation.addEventListener("change", onScroll);

onScroll();
