let moreBtn = document.querySelector(".moreBtn");
let move = 0;
let newsContainer = document.querySelector("#news-of-the-week");
let types = [
  [
    "news (5).jpg",
    "Ratchet & Clank: Rift Apart получит режим с рейтрейсингом в 60 FPS",
    "27377",
    "14",
  ],
  [
    "news (6).jpg",
    "Модификация для Days Gone увеличила размер орд до 750 зомби",
    "5462",
    "12",
  ],
  [
    "news (7).jpg",
    "Слух: в новом PvP-шутере Ghost Recon и Splinter Cell",
    "731",
    "7",
  ],
  [
    "news (8).jpg",
    "Писатель о работе над репликами орков в играх серии Middle-earth",
    "43520",
    "18",
  ],
];
let dist = 0;
var slider = document.querySelectorAll("#slider .slide");
var currentSlide = 0;
var interval = setInterval(nextSlide, 7000);
function nextSlide() {
  slider[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slider.length;
  slider[currentSlide].className = "slide showing";
}
let rightBtn = document.querySelector(".rightBtn");
let slider2 = document.querySelector(".slider2");
let leftBtn = document.querySelector(".leftBtn");
leftBtn.onclick = function () {
  dist -= 100;
  if (dist == -100) {
    dist = (slider2.children.length - 1) * 100;
  }
  slider2.style.transform = "translateX(-" + dist + "%)";
  console.log(dist);
};
rightBtn.onclick = function () {
  dist += 100;
  dist = dist % (slider2.children.length * 100);
  slider2.style.transform = "translateX(-" + dist + "%)";
};
moreBtn.onclick = function () {
  for (let i = 0; i < 2; i++) {
    let a = document.createElement("a");
    a.classList.add("block");
    let newsInfo = `
    <img src="${types[move + i][0]}" alt="" />
          <p>
            ${types[move + i][1]}
          </p>
          <h5>
            <img src="eye.svg" alt="" /> ${types[move + i][2]}
            <img src="comment.svg" alt="" /> ${types[move + i][3]}
          </h5>
    `;
    a.innerHTML = newsInfo;
    newsContainer.insertBefore(a, moreBtn);
  }
  move += 2;
  if (move == types.length) {
    moreBtn.style.display = "none";
  }
};
let harmon = document.getElementsByClassName("harmon");

for (let i = 0; i < harmon.length; i++) {
  harmon[i].addEventListener("click", function () {
    console.log(123);
    this.classList.toggle("active");

    panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// for (let i = 0; i < harmon.length; i++) {
//   harmon[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     let panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }
