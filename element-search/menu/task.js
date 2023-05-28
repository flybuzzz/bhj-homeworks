
const listItems = Array.from(document.querySelectorAll(".menu__item"));

for (let index = 0; index < listItems.length; index++) { 
  const link = listItems[index].querySelector(".menu__link");          
    const menuMenu = listItems[index].querySelector(".menu.menu_sub");
    if (menuMenu !== null && link !== null) {                                          
        link.onclick = () => {                               
          menuMenu.classList.toggle("menu_active");
          return false;
        }
    }
}
