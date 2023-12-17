const headers = document.querySelectorAll(".accordion-header");
[...headers].forEach((header)=>{
    //console.dir(header);
    if(header.nextElementSibling.classList.contains("content")){
        const content = header.nextElementSibling;
        content.classList.add("hide");
    }
    //add a event listener
    header.addEventListener("click", function(e){
       // console.log(e.target.classList,' its is here')
        if(e.target.classList.contains("accordion-header")){
            console.log(e.target.nextElementSibling.classList.remove('hide'));
        }
    })
})