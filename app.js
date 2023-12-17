const buttons = document.querySelectorAll(".accordion-button");
[...buttons].forEach((button)=>{
    //console.dir(button);
    const content = button.nextElementSibling.nextElementSibling;
    if(content.classList.contains("content")){
        content.classList.add("hide");
    }
    //add a event listener
    button.addEventListener("click", function(e){
        //if the target clicked is not
        // if(e.target !== e.target){
        //     console.log(e.target);
        // }
        //not equal to target to the target clicked
        //and have no hide class, put hide class


        if(e.target.classList.contains("accordion-button")){
            e.target.nextElementSibling.nextElementSibling.classList.toggle('hide');
            if(e.target.nextElementSibling.nextElementSibling.contains('hide')){
                
            }
        }
    })
})