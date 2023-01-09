const langbar_root = document.querySelector('.langbar-module--langbar--f0eb6');

const lang_ro = langbar_root.querySelector('#lang__ro');
const lang_ru = langbar_root.querySelector('#lang__ru');
const main_ro = document.querySelector('.main__ro');
const main_ru = document.querySelector('.main__ru');
const langbar = langbar_root.querySelectorAll('.langbar');
const navbar_root = document.querySelector('.navbar');
const navbar__main = navbar_root.querySelector('.navbar__main span');
const navbar__grupe = navbar_root.querySelector('.navbar__grupe span');
const navbar__categorii = navbar_root.querySelector('.navbar__categorii span');
const navbar__conditii = navbar_root.querySelector('.navbar__conditii span');
const navbar__gallery = navbar_root.querySelector('.navbar__gallery span');
const navbar__util = navbar_root.querySelector('.navbar__util span');
const navbar__contacts = navbar_root.querySelector('.navbar__contacts span');
const navbar__main_link = navbar_root.querySelector('.navbar__main');
const navbar__grupe_link = navbar_root.querySelector('.navbar__grupe');
const navbar__categorii_link = navbar_root.querySelector('.navbar__categorii');
const navbar__conditii_link = navbar_root.querySelector('.navbar__conditii');
const navbar__gallery_link = navbar_root.querySelector('.navbar__gallery');
const navbar__util_link = navbar_root.querySelector('.navbar__util');
const navbar__contacts_link = navbar_root.querySelector('.navbar__contacts');

for (const elem of langbar) {
    elem.addEventListener('click', function(event) {
        Array.from(langbar).map(elem => elem.classList.remove('langbar-active'));
        event.target.classList.add('langbar-active');
        if (lang_ro.classList.contains('langbar-active')) {
            main_ro.style.display = 'block';
            main_ru.style.display = 'none';
            navbar_root.querySelector('.menu__ru').classList.remove('menu__active');
            navbar_root.querySelector('.menu__ro').classList.add('menu__active');
            navbar__main.textContent = 'Principala';
            navbar__grupe.textContent = 'Grupe';
            navbar__categorii.textContent = 'Categorii';
            navbar__conditii.textContent = 'Conditii';
            navbar__gallery.textContent = 'Galerie';
            navbar__util.textContent = 'Util';
            navbar__contacts.textContent = 'Contacte';
            navbar__main_link.href = '#main__ro';
            navbar__grupe_link.href = '#grupe__ro';
            navbar__categorii_link.href = '#categorii__ro';
            navbar__conditii_link.href = '#conditii__ro';
            navbar__gallery_link.href = '#gallery__ro';
            navbar__util_link.href = '#util__ro';
            navbar__contacts_link.href = '#contacts__ro';
            renderPopupRo()

        } else {
            main_ru.style.display = 'block';
            main_ro.style.display = 'none';
            navbar_root.querySelector('.menu__ro').classList.remove('menu__active');
            navbar_root.querySelector('.menu__ru').classList.add('menu__active');
            navbar__main.textContent = 'Главная';
            navbar__grupe.textContent = 'Группы';
            navbar__categorii.textContent = 'Категории';
            navbar__conditii.textContent = 'Условия';
            navbar__gallery.textContent = 'Галерея';
            navbar__util.textContent = 'Инфо';
            navbar__contacts.textContent = 'Контакты';
            navbar__main_link.href = '#main__ru';
            navbar__grupe_link.href = '#grupe__ru';
            navbar__categorii_link.href = '#categorii__ru';
            navbar__conditii_link.href = '#conditii__ru';
            navbar__gallery_link.href = '#gallery__ru';
            navbar__util_link.href = '#util__ru';
            navbar__contacts_link.href = '#contacts__ru';
            renderPopupRu()
        }
    })
}