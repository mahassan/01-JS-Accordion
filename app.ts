const accordionHeader = document.querySelectorAll("section") as NodeList;
const para = document.querySelectorAll("section p") as NodeList;

accordionHeader.forEach((header)=>{
    header.addEventListener("click", ()=>{
      const section = header as HTMLBaseElement;
      section.children[1].classList.toggle('hidden');
    })
})

window.addEventListener("DOMContentLoaded", ()=>{
  para.forEach((paragraph)=>{
    const p = paragraph as HTMLParagraphElement
    p.classList.add("hidden");
  })
})