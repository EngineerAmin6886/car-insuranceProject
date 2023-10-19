// 1402-07-07
// project:car-insuranse
// tem:Amin
// discription:mohasebeh online insuranse car.

// variables
const form = document.querySelector("#request-quote");

// Events
document.addEventListener("DOMContentLoaded", afterLoad);
form.addEventListener("submit", submitForm);

// functions

// load safeh
function afterLoad() {
  displayYears();
}

// submit form to the error ya AllRight
function submitForm(e) {
  e.preventDefault();

  // read value form the form
  const make = document.querySelector("#make").value;
  const year = document.querySelector("#year").value;
  const level = document.querySelector('input[name="level"]:checked').value;

  // check the value of fileds are corect
  if (make === "" || year === "" || level === "") {
    displayMsg("لطفا مقادیر فرم رو با دقت پر کنید");
  } else {
    // STEP1: GET INFO
    let insuranceCase = {
      carMake: make,
      carYear: year,
      carlevel: level,
    };

    // STEP2: CALCULATE
    calculateprice(insuranceCase);

    // STEP3:SHOW RESULT MESSAGE BOX
  }
}

function calculateprice(info) {
  let price = 0,
    base = 200000;
  const make = info.make;

  // shaktar ghimat gozari cars
  /*
      make1:       =>    1.15
      make2:       =>    1.30
      make3:       =>    1.80
  */

  switch (make) {
    case "1":
      price = base * 1.15;
      break;
    case "2":
      price = base * 1.3;
      break;
    case "3":
      price = base * 1.8;
      break;
  }

  //  + calculate Year
  // get the year
  const yaer = info.year,
    diffrence = function (year) {
      // Convert to number
      let persianNumbers = [
          /۰/g,
          /۱/g,
          /۲/g,
          /۳/g,
          /۴/g,
          /۵/g,
          /۶/g,
          /۷/g,
          /۸/g,
          /۹/g,
        ],
        arabicNumbers = [
          /٠/g,
          /١/g,
          /٢/g,
          /٣/g,
          /٤/g,
          /٥/g,
          /٦/g,
          /٧/g,
          /٨/g,
          /٩/g,
        ],
        fixNumbers = function (str) {
          if (typeof str === "string") {
            for (var i = 0; i < 10; i++) {
              str = str
                .replace(persianNumbers[i], i)
                .replace(arabicNumbers[i], i);
            }
          }
          return parseInt(str);
        };

      // get max year
      const now = new Date().toLocaleDateString("fa-IR");
      let nowYear = now.slice(0, 4);
      let max = fixNumbers(nowYear);
      year = max - year;

      return year;
    };
  // 3% cheaper for each year
  price = price - ((diffrence * 3) / 100) * price;
}


// user Interface (UI) faunction
// display message box
function displayMsg(msg) {
  // create message box
  const messageBox = document.createElement("div");
  messageBox.classList = "error";
  messageBox.innerText = msg;

  // show message
  form.insertBefore(messageBox, document.querySelector(".form-group"));

  // remove message box
  setTimeout(() => {
    document.querySelector(".error").remove();
  }, 5000);
}

// tabdel typeof string b number v tabdel adad farsi v arabi b english.
// adad farsi v arabi  ba typeof string migereh.
// v bhemon adad engilesh ba typeof number mideh.
 function fixNumbers (str) {
  let persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ],
  arabicNumbers = [
    /٠/g,
    /١/g,
    /٢/g,
    /٣/g,
    /٤/g,
    /٥/g,
    /٦/g,
    /٧/g,
    /٨/g,
    /٩/g,
  ]
  if (typeof str === "string") {
    for (let i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return parseInt(str);
};


function displayFaris (){
  // get curent Years
  let curentYear = new Date().toLocaleDateString("fa-IR");

  // slice date
  curentYear = curentYear.slice(0, 4);

  //   get maxYear
  let maxYear = fixNumbers(curentYear);

  //   get minYear
  let minYear = maxYear - 20;

  
}

// show Yares
function displayYears() {

  fixNumbers();

  displayFaris();

  // accsess to the select tag
  const selectYear = document.querySelector("#year");

  // create option tag value
  const optionTag = document.createElement("option");
  optionTag.innerText = `-انتخاب-`;
  optionTag.value = "";

  // append option to the select year
  selectYear.appendChild(optionTag);

  // create for loop for make option tag
  for (let i = maxYear; i >= minYear; i--) {
    // create option tag
    const optionTag = document.createElement("option");
    optionTag.value = i;
    optionTag.innerText = `سال ${i}`;

    // append option to the select year
    selectYear.appendChild(optionTag);
  }
}
displayYears();
