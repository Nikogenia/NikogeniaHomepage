let mouseX = document.documentElement.clientWidth / 2;
let mouseY = document.documentElement.clientHeight / 2;
let mouseXlerp = mouseX;
let mouseYlerp = mouseY;
let lerp = 0.04;

function updateMousePosition(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

document.addEventListener("mousemove", updateMousePosition);

function update() {

  mouseXlerp += (mouseX - mouseXlerp) * lerp;
  mouseYlerp += (mouseY - mouseYlerp) * lerp;
  if (Math.abs(mouseX - mouseXlerp) < 5) mouseXlerp = mouseX;
  if (Math.abs(mouseY - mouseYlerp) < 5) mouseYlerp = mouseY;
  
  if (mouseXlerp !== mouseX || mouseYlerp !== mouseY) {
    document.documentElement.style.setProperty("--mouse-x", mouseXlerp + "px");
    document.documentElement.style.setProperty("--mouse-y", mouseYlerp + "px");
  }

  requestAnimationFrame(update);

}

update();
