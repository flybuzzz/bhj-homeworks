const menuSubs = document.querySelectorAll('.menu_sub');
const menuItem = document.querySelectorAll('.menu__item');
const menuLinks = document.querySelectorAll('.menu__link');



menuItem.forEach(el => {
    el.addEventListener('click', (e) => {
        if (e.target.nextSibling.nextSibling.classList.value === 'menu menu_sub') {
            e.preventDefault()
            menuSubs.forEach(el => el.classList.remove('menu_active'));
            e.target.nextSibling.nextSibling.classList.add('menu_active')
        } 
    })
})
