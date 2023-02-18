let voiti = document.querySelector(".voiti");
let openV = document.querySelector(".go-back");
let share = document.querySelector(".share");
let shareV = document.querySelector(".share-v");
let openR = document.querySelector(".go-back-r");
let cancel = document.querySelector(".cancel");
let cancelR = document.querySelector(".cancel-r");
let kir = document.querySelector(".kir");
let kirR = document.querySelector(".kir-r");
let input1 = document.querySelector(".input-v1");
let input2 = document.querySelector(".input-v2");
let input3 = document.querySelector(".input-v3");
let input4 = document.querySelector(".input-v4");
let input5 = document.querySelector(".input-v5");
let shopBtn = document.querySelector(".shop-btn");
localStorage.setItem("input33", input3.value);
voiti.addEventListener("click", function () {
  openV.classList.remove("gbv");
});
share.addEventListener("click", function () {
  openV.classList.add("gbv");
  openR.classList.remove("gbr");
});
shareV.addEventListener("click", function () {
  openR.classList.add("gbr");
  openV.classList.remove("gbv");
});
cancel.addEventListener("click", function () {
  openV.classList.add("gbv");
  openR.classList.add("gbr");
});
cancelR.addEventListener("click", function () {
  openV.classList.add("gbv");
  openR.classList.add("gbr");
});

kirR.addEventListener("click", function () {
  localStorage.setItem("input33", input3.value);
  localStorage.setItem("input44", input4.value);
  localStorage.setItem("input55", input5.value);
  alert("Успешно зарегались!");
  openV.classList.add("gbv");
  openR.classList.add("gbr");
});
kir.addEventListener("click", function () {
  if (input1.value.length == 0) {
    input1.style.border = "2px solid red";
  }
  if (input2.value.length == 0) {
    input2.style.border = "2px solid red";
  }
  if (
    input1.value == localStorage.getItem("input33") &&
    input2.value == localStorage.getItem("input44")
  ) {
    alert("Вход выполнен успешно!");
    input1.value = "";
    input2.value = "";
    openV.classList.add("gbv");
    openR.classList.add("gbr");
  } else {
    alert("Вход не выполнен");
    input1.value = "";
    input2.value = "";
  }
});
