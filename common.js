let cancelBtn = document.querySelector(".cancelBtn");
let submitBtn = document.querySelector(".submitBtn");
let modalInfo = document.querySelector("form");
let modal = document.querySelector(".modal");
let login = document.querySelector(".login");
let cancelBtn2 = document.querySelector(".cancelBtn2");
let submitBtn2 = document.querySelector(".submitBtn2");
let download = document.querySelector(".download");
let downloadModal = document.querySelector(".downloadModal");
let crack = document.querySelector("#downloadBtn");
login.onclick = function () {
  modal.style.display = "block";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
cancelBtn.onclick = function () {
  modal.style.display = "none";
};
submitBtn.onclick = function () {
  modal.style.display = "none";
};
let map = document.querySelector("iframe");
let def = document.querySelector(".first");
map.style.height = def.offsetHeight - 28 - 40 + "px";
crack.onclick = function () {
  console.log("123");
  downloadModal.style.display = "block";
};
window.onclick = function (event) {
  if (event.target == downloadModal) {
    downloadModal.style.display = "none";
  }
};
cancelBtn2.onclick = function () {
  downloadModal.style.display = "none";
};
submitBtn2.onclick = function () {
  downloadModal.style.display = "none";
};