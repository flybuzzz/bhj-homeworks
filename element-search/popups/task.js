const modalMain = document.getElementById('modal_main');
const modalCloses = document.querySelectorAll('.modal__close');
const modal = document.getElementsByClassName('modal');
const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success');

    modalMain.classList.add('modal_active');

    for(let modalClose of modalCloses){ 

    modalClose.onclick = () => {
       modalMain.classList.remove('modal_active');
       modalSuccess.classList.remove('modal_active');
    }
}

    showSuccess.onclick = () => {
        modalSuccess.classList.add('modal_active');
        modalMain.classList.remove('modal_active');
    }
