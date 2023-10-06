// 1402-07-07
// project:car-insuranse
// tem:Amin
// discription:mohasebeh online insuranse car.

// variables
const form = document.querySelector('#request-quote')

// Events
document.addEventListener('DOMContentLoaded',afterLoad)
form.addEventListener('submit',submitForm)

// functions

// load safeh
function afterLoad(){
  displayYears();
}

// submit form to the error ya AllRight
function submitForm(e){
  e.preventDefault();

  // read value form the form
  const make = document.querySelector('#make').value
  const year = document.querySelector('#year').value
  const level = document.querySelector('input[name="level"]:checked')

  // check the value of fileds are corect
  if(make === '' || year === '' || level === ''){
    console.log('error :(')
  }else{
    console.log('okiiii :)')
  }
}

// show Yares
function displayYears() {
  // convert to number
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
        for (let i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }
      return parseInt(str);
    };

  // get curent Years
  let curentYear = new Date().toLocaleDateString("fa-IR");

  // slice date
  curentYear = curentYear.slice(0, 4);

  //   get maxYear
  let maxYear = fixNumbers(curentYear);

  //   get minYear
  let minYear = maxYear - 20;

  // accsess to the select tag
  const selectYear = document.querySelector("#year");

  // create option tag value
  const optionTag = document.createElement("option");
  optionTag.innerText = `-انتخاب-`;
  optionTag.value = '';

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
