const accordionHeader = document.querySelectorAll("section") as NodeList;
const para = document.querySelectorAll("section p") as NodeList;

accordionHeader.forEach((header)=>{
    header.addEventListener("click", ()=>{
      const section = header as HTMLBaseElement;
      let title = section.children as HTMLCollection;
      const toggleIcon = title[0].children[1] as Element;
      if(toggleIcon.classList.contains("icon-plus")){
        toggleIcon.classList.replace("icon-plus","icon-minus");
        section.children[1].classList.replace("active","non-active");
      }else{
         toggleIcon.classList.replace("icon-minus","icon-plus");
          section.children[1].classList.replace("non-active","active");
      }
    })
})

window.addEventListener("DOMContentLoaded", ()=>{
  para.forEach((paragraph)=>{
    const p = paragraph as HTMLParagraphElement
    p.classList.add("active");
  })
})