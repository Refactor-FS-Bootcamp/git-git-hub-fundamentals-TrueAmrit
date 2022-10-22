function passcheck(pass) {
  var min = 6,
    max = 20,
    step = 0;
  var n = pass.length;

  if (n <= 6) {
    step += min - n;
  }
  if (n >= 20) {
    step += n - max;
  }

  if (n < 5 || n > 23) {
    return step;
  }
  if (n >= 5 && n <= 23) {
    let numR = 1,
      lowerR = 1,
      upperR = 1,
      repeat = 0,
      rep = 0;
    const strArr = pass.split("");
    var numarr = strArr.map((char) => !isNaN(char - 1));
    numarr.forEach((value) => {
      if (value === true) {
        numR = 0;
      }
    });
    // console.log(numarr, numR);
    var lowerarr = strArr.map((char) => char !== char.toUpperCase());
    lowerarr.forEach((value) => {
      if (value === true) {
        lowerR = 0;
      }
    });
    // console.log(lowerarr, lowerR);
    var upperarr = strArr.map((char) => char !== char.toLowerCase());
    upperarr.forEach((value) => {
      if (value === true) {
        upperR = 0;
      }
    });
    // console.log(upperarr, upperR);
    for (var j = 0; j < strArr.length; j++) {
      // console.log(strArr[j]);
      if (strArr[j] == strArr[j + 1] && strArr[j] == strArr[j + 2]) {
        repeat += 1;
        j += 2;
      }
    }
    // console.log(numR, lowerR, upperR, repeat, step);
    if (
      (numR == 1 && lowerR == 0 && upperR == 1) ||
      (numR == 0 && lowerR == 1 && upperR == 1) ||
      (numR == 1 && lowerR == 1 && upperR == 0)
    ) {
      rep = 2;
    }
    if (
      (numR == 1 && lowerR == 0 && upperR == 0) ||
      (numR == 0 && lowerR == 1 && upperR == 0) ||
      (numR == 0 && lowerR == 0 && upperR == 1)
    ) {
      rep = 1;
    }
    if (rep == repeat) {
      repeat = 0;
    }
    // console.log(rep, repeat);
    var total = step + rep + repeat;
    return total;
  }
}

var examplePass = "abcdeefAAA";
//change value of string examplePass to test different cases
// console.log(examplePass.length);
var result = passcheck(examplePass);
console.log(result);
