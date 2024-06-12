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
let scrollSection = scrollY / window.innerHeight;

function onScroll() {

  scrollY = window.scrollY;
  scrollSection = scrollY / window.innerHeight;

  console.log(scrollY, scrollSection);

  document.documentElement.style.setProperty("--scroll-y", window.scrollY);
  document.documentElement.style.setProperty("--scroll-section", scrollSection);

  if (scrollSection > 1) {
    document.documentElement.style.setProperty("--scroll-section1", 1);
  }
  else {
    document.documentElement.style.setProperty("--scroll-section1", 0);
  }

}

document.addEventListener("scroll", onScroll);
