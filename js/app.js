// 1402-07-07
// project:car-insuranse
// tem:Amin
// discription:mohasebeh online insuranse car.

// variables

// Events

// functions

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
  console.log(maxYear);
  //   get minYear
  let minYear = maxYear - 20;
  console.log(minYear);
}
displayYears();
