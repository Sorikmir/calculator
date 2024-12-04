const monitor = document.querySelector(".calculator-screen");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");
const btn0 = document.querySelector(".btn-0");
const btnmul = document.querySelector(".btn-mult");
const btnmin = document.querySelector(".btn--");
const btnplus = document.querySelector(".btn-plus");
const btndev = document.querySelector(".btn-dev");
const btnequal = document.querySelector(".equal-sign");
const btnallclear = document.querySelector(".all-clear");

let param1 = "";
let param2 = "";
let operator = "";

console.log(btn1);
btn1.addEventListener("click", () => {
  monitor.innerText += 1;
  if (operator) {
    param2 += "1";
  } else {
    param1 += "1";
  }
});
btn2.addEventListener("click", () => {
  monitor.innerText += 2;
  if (operator) {
    param2 += "2";
  } else {
    param1 += "2";
  }
});
btn3.addEventListener("click", () => {
  monitor.innerText += 3;
  if (operator) {
    param2 += "3";
  } else {
    param1 += "3";
  }
});
btn4.addEventListener("click", () => {
  monitor.innerText += 4;
  if (operator) {
    param2 += "4";
  } else {
    param1 += "4";
  }
});
btn5.addEventListener("click", () => {
  monitor.innerText += 5;
  if (operator) {
    param2 += "5";
  } else {
    param1 += "5";
  }
});
btn6.addEventListener("click", () => {
  monitor.innerText += 6;
  if (operator) {
    param2 += "6";
  } else {
    param1 += "6";
  }
});
btn7.addEventListener("click", () => {
  monitor.innerText += 7;
  if (operator) {
    param2 += "7";
  } else {
    param1 += "7";
  }
});
btn8.addEventListener("click", () => {
  monitor.innerText += 8;
  if (operator) {
    param2 += "8";
  } else {
    param1 += "8";
  }
});
btn9.addEventListener("click", () => {
  monitor.innerText += 9;
  if (operator) {
    param2 += "9";
  } else {
    param1 += "9";
  }
});
btn0.addEventListener("click", () => {
  monitor.innerText += 0;
  if (operator) {
    param2 += "0";
  } else {
    param1 += "0";
  }
});
btnmul.addEventListener("click", () => {
  operator += "*";
  monitor.innerText = "";
});
btnplus.addEventListener("click", () => {
  operator += "+";
  monitor.innerText = "";
});
btnmin.addEventListener("click", () => {
  operator += "-";
  monitor.innerText = "";
});
btndev.addEventListener("click", () => {
  monitor.innerText += "/";
});

btnequal.addEventListener("click", () => {
  monitor.innerText = Number(param1) + Number(param2);
  console.log({ param1, param2 });
});
btnallclear.addEventListener("click", () => {
  monitor.innerText = "";
  param1 = "";
  param2 = "";
  operator = "";
});