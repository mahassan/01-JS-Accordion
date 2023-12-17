const headers = document.querySelectorAll(".accordion-header");
[...headers].forEach((header)=>{
    //console.dir(header);
    if(header.nextElementSibling.classList.contains("content")){
        const content = header.nextElementSibling;
        content.classList.add("hide");
    }
    //add a event listener
    header.addEventListener("click", function(e){
        //if the target clicked is not
        if(e.target !== e.target){
            console.log(e.target);
        }
        //not equal to target to the target clicked
        //and have no hide class, put hide class


        if(e.target.classList.contains("accordion-header")){
            e.target.nextElementSibling.classList.toggle('hide')
        }
    })
})