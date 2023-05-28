const closesModal = Array.from(document.querySelectorAll(".modal__close_times"));
const successShow = document.querySelector(".show-success");
const modal = Array.from(document.querySelectorAll(".modal"));
const activeClassName = "modal_active";

modal[0].classList.add(activeClassName);

successShow.addEventListener("click", function () {    
  modal[0].classList.remove(activeClassName);         
  modal[1].classList.add(activeClassName);           
})

for (let index = 0; index < closesModal.length; index++) {     
    const closeModal = closesModal[index];
    closeModal.addEventListener("click", function () {                 
        closeModal.closest(".modal").classList.remove(activeClassName);  
    })
  }
