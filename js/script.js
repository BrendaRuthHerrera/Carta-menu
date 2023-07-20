// const btnmenu = document.querySelector("#btnmenu");
// const menu = document.querySelector("#menu");

// btnmenu.addEventListener("click", function () {
//   menu.classList.toggle("mostrar");
//  });

// const submenubtn = document.querySelectorAll(".submenu-btn");
//  for (let i = 0; i < submenubtn.length; i++) {
//    submenubtn[i].addEventListener("click", function () {
//      if (window.innerWidth < 1024) {
//        const submenu = this.nextElementSibling;
//        const height = submenu.scrollHeight;
//        if (submenu.classList.contains("desplegar")) {
//          submenu.classList.remove("desplegar");
//          submenu.removeAttribute("style");
//        } else {
//          submenu.classList.add("desplegar");
//          submenu.style.height = height + "px";
//        }
//      }
//    });
//  }


// SLIDER NO TOCAR!!!! 
let list = document.querySelector(".slider .list");
let images = document.querySelectorAll(".slider .list .image");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthImages = images.length - 1;

let refreshSlider = setInterval(() => {
  next.click();
}, 5000);

next.onclick = function () {
  if (active + 1 > lengthImages) {
    active = 0;
  } else {
    active += 1;
  }
  reloadSlider();
};

prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthImages;
  } else {
    active -= 1;
  }
  reloadSlider();
};

function reloadSlider() {
  let checkLeft = images[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  let lastActiveDot = document.querySelector(".slider .dots li.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");
  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {
    next.click();
  }, 5000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadSlider();
  });
});