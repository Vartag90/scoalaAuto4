const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu_ro = document.querySelector("#menu__ro").cloneNode(1);
const menu_ru = document.querySelector("#menu__ru").cloneNode(1);



// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");

    if (body.querySelector('.menu__ro').classList.contains('menu__active')) {
        renderPopupRo()
    } else {
        renderPopupRu()
    }
}

// Здесь мы рендерим элементы в наш попап
function renderPopupRo() {
    popup.appendChild(menu_ro);
    popup.querySelector('.menu__ru').style.display = 'none';
    popup.querySelector('.menu__ro').style.display = 'flex';
    //popup.removeChild(menu_ru);
}

function renderPopupRu() {
    popup.appendChild(menu_ru);
    popup.querySelector('.menu__ro').style.display = 'none';
    popup.querySelector('.menu__ru').style.display = 'flex';
    //popup.removeChild(menu_ro);
}

// Код для закрытия меню при нажатии на ссылку
const links_ro = Array.from(menu_ro.children);

// Для каждого элемента меню при клике вызываем ф-ию
links_ro.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

const links_ru = Array.from(menu_ru.children);

// Для каждого элемента меню при клике вызываем ф-ию
links_ru.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}