let back = document.querySelectorAll(".a img");
let front = Array.from(document.querySelectorAll(".b img"));



for (let i = front.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [front[i], front[j]] = [front[j], front[i]];
}

let container = document.querySelector(".b");
container.innerHTML = "";
front.forEach(card => container.appendChild(card));



let prv = null;
let vtor = null;
let indeks = null;
let sostojba = false;

for (let i = 0; i < back.length; i++) 
{
  back[i].addEventListener("click", function () 
  {
    if (sostojba) return;

    back[i].style.visibility = "hidden";
    front[i].style.visibility = "visible";

    if (!prv) 
    {
      prv = front[i];
      indeks = i;
    } 
    else 
    {
      vtor = front[i];
      sostojba = true;

      if (prv.src !== vtor.src) 
      {
        setTimeout(function () 
        {
          prv.style.visibility = "hidden";
          back[indeks].style.visibility = "visible";
          vtor.style.visibility = "hidden";
          back[i].style.visibility = "visible";
          prv = null;
          vtor = null;
          indeks = null;
          sostojba = false;
        }, 1000);
        
      } 
      
      else 
      {
        prv = null;
        vtor = null;
        indeks = null;
        sostojba = false;
      }
    }
  });
}
