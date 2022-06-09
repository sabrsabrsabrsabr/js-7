var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elEuro = document.querySelector(".js-euro");
var elDollor = document.querySelector(".js-dollor");
var elRubil = document.querySelector(".js-rubil");
var elButton = document.querySelector(".js-btn");
var elText = document.querySelector(".js-text");
var elSelect = document.querySelector(".js-select");

var doolor = 11035;
var yevro = 11750;
var rubil = 135;


elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  var pul = elInput.value.trim();
  var aaa = elSelect.value;
  var kurslar = 0;
  
  
  if (aaa == "EURO"){
    kurslar = `Siznig yevroingiz sho'ncha bo'ladi ${pul * yevro} so'm`;
  } else if ( aaa == "USD") {
    kurslar = `Siznig dolloringiz sho'ncha bo'ladi ${pul * doolor} so'm`;
  } else if ( aaa == "RUB"){
    kurslar = `Siznig rubilingiz sho'ncha bo'ladi ${pul * rubil} so'm`;
  } else {
    kurslar = "Xatolik bor qayta o'rinib ko'ring"
  }
  
  elText.textContent = `${kurslar}`;
  
})