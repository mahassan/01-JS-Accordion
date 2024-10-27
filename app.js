const accordion = document.querySelectorAll(".accordion");
accordion.forEach((x,i) => {
  x.addEventListener("click", function(e){
  if(e.currentTarget.classList.contains('open')){
    e.currentTarget.classList.remove('open')
  }else{
    e.currentTarget.classList.add('open')
  }
  })
})
