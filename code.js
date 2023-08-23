"use strict";

const boxes = document.querySelectorAll(".box");

const verifyVisibility = (entries)=>{
   for(const entry of entries){
      if(entry.isIntersecting) console.log("The box is being seen.", entry.target.textContent);
   }
}

const observer = new IntersectionObserver(verifyVisibility);

for (const box of boxes){
   observer.observe(box);
}