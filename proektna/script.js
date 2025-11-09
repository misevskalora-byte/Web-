let b2 = document.querySelector(".b2");
let counter2 = b2.querySelector("span");
let value2 = Number(counter2.textContent);

b2.addEventListener("click", function() {
    value2++;
    counter2.textContent = value2;
});


let b0 = document.querySelector(".b0");
let counter0 = b0.querySelector("span");
let value0 = Number(counter0.textContent);

b0.addEventListener("click", function() {
    value0++;
    counter0.textContent = value0;
});


let b4 = document.querySelector(".b4");
let counter4 = b4.querySelector("span");
let value4 = Number(counter4.textContent);

b4.addEventListener("click", function() {
    value4++;
    counter4.textContent = value4;
});


let b3 = document.querySelector(".b3");
let counter3 = b3.querySelector("span");
let value3 = Number(counter3.textContent);

b3.addEventListener("click", function() {
    value3++;
    counter3.textContent = value3;
});


let b1 = document.querySelector(".b1");
let counter1 = b1.querySelector("span");
let value1 = Number(counter1.textContent);

b1.addEventListener("click", function() {
    value1++;
    counter1.textContent = value1;
});



let b22 = document.querySelector(".b22");
let counter22 = b22.querySelector("span");
let value22 = Number(counter22.textContent);

b22.addEventListener("click", function() {
    value22++;
    counter22.textContent = value22;
});


let b00 = document.querySelector(".b00");
let counter00 = b00.querySelector("span");
let value00 = Number(counter0.textContent);

b00.addEventListener("click", function() {
    value00++;
    counter00.textContent = value00;
});


let b44 = document.querySelector(".b44");
let counter44 = b44.querySelector("span");
let value44 = Number(counter44.textContent);

b44.addEventListener("click", function() {
    value44++;
    counter44.textContent = value44;
});


let b33 = document.querySelector(".b33");
let counter33 = b33.querySelector("span");
let value33 = Number(counter3.textContent);

b33.addEventListener("click", function() {
    value33++;
    counter33.textContent = value33;
});


let b11 = document.querySelector(".b11");
let counter11 = b11.querySelector("span");
let value11 = Number(counter11.textContent);

b11.addEventListener("click", function() {
    value11++;
    counter11.textContent = value11;
});


let l1 = document.querySelector(".den1img2");
let blank = document.querySelector(".blank");

l1.addEventListener("click", function() {
  blank.classList.add("active");
});

blank.addEventListener("click", function() {
  blank.classList.remove("active");
});





let l2 = document.querySelector(".den2img2");
let blank2 = document.querySelector(".blank2");

l2.addEventListener("click", function() {
  blank2.classList.add("active2");
});

blank2.addEventListener("click", function() {
  blank2.classList.remove("active2");
});



let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
}
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}



  let select = 0;

  function gfg(n) {
    select = n;
    let dzvez = document.querySelectorAll(".star");
    dzvez.forEach((star, i) => {
      star.style.color = i < n ? "gold" : "black";
    });
  }

  let btn = document.querySelector(".sub");
  let input = document.querySelector(".txt");

  btn.addEventListener("click", function () {

    input.value = "";
    select = 0;
    let dzvez = document.querySelectorAll(".star");
    dzvez.forEach(star => star.style.color = "black");
  });
