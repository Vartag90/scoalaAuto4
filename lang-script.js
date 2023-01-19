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
            navbar__grupe.textContent = 'Admitere';
            navbar__categorii.textContent = 'Categorii';
            navbar__conditii.textContent = 'Preturi';
            navbar__gallery.textContent = 'Galerie';
            navbar__util.textContent = 'Linkuri';
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
            navbar__conditii.textContent = 'Цены';
            navbar__gallery.textContent = 'Галерея';
            navbar__util.textContent = 'Литература';
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


function Sim(sldrId) {

    let id = document.getElementById(sldrId);
    if (id) {
        this.sldrRoot = id
    } else {
        this.sldrRoot = document.querySelector('.sim-slider')
    };

    // Carousel objects
    this.sldrList = this.sldrRoot.querySelector('.sim-slider-list');
    this.sldrElements = this.sldrList.querySelectorAll('.sim-slider-element');
    this.sldrElemFirst = this.sldrList.querySelector('.sim-slider-element');
    this.leftArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-left');
    this.rightArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-right');
    this.indicatorDots = this.sldrRoot.querySelector('div.sim-slider-dots');

    // Initialization
    this.options = Sim.defaults;
    Sim.initialize(this)
};

Sim.defaults = {

    // Default options for the carousel
    loop: true, // Бесконечное зацикливание слайдера
    auto: true, // Автоматическое пролистывание
    interval: 5000, // Интервал между пролистыванием элементов (мс)
    arrows: true, // Пролистывание стрелками
    dots: true // Индикаторные точки
};

Sim.prototype.elemPrev = function(num) {
    num = num || 1;

    let prevElement = this.currentElement;
    this.currentElement -= num;
    if (this.currentElement < 0) this.currentElement = this.elemCount - 1;

    if (!this.options.loop) {
        if (this.currentElement == 0) {
            this.leftArrow.style.display = 'none'
        };
        this.rightArrow.style.display = 'block'
    };

    this.sldrElements[this.currentElement].style.opacity = '1';
    this.sldrElements[prevElement].style.opacity = '0';

    if (this.options.dots) {
        this.dotOn(prevElement);
        this.dotOff(this.currentElement)
    }
};

Sim.prototype.elemNext = function(num) {
    num = num || 1;

    let prevElement = this.currentElement;
    this.currentElement += num;
    if (this.currentElement >= this.elemCount) this.currentElement = 0;

    if (!this.options.loop) {
        if (this.currentElement == this.elemCount - 1) {
            this.rightArrow.style.display = 'none'
        };
        this.leftArrow.style.display = 'block'
    };

    this.sldrElements[this.currentElement].style.opacity = '1';
    this.sldrElements[prevElement].style.opacity = '0';

    if (this.options.dots) {
        this.dotOn(prevElement);
        this.dotOff(this.currentElement)
    }
};

Sim.prototype.dotOn = function(num) {
    this.indicatorDotsAll[num].style.cssText = 'background-color:#BBB; cursor:pointer;'
};

Sim.prototype.dotOff = function(num) {
    this.indicatorDotsAll[num].style.cssText = 'background-color:#556; cursor:default;'
};

Sim.initialize = function(that) {

    // Constants
    that.elemCount = that.sldrElements.length; // Количество элементов

    // Variables
    that.currentElement = 0;
    let bgTime = getTime();

    // Functions
    function getTime() {
        return new Date().getTime();
    };

    function setAutoScroll() {
        that.autoScroll = setInterval(function() {
            let fnTime = getTime();
            if (fnTime - bgTime + 10 > that.options.interval) {
                bgTime = fnTime;
                that.elemNext()
            }
        }, that.options.interval)
    };

    // Start initialization
    if (that.elemCount <= 1) { // Отключить навигацию
        that.options.auto = false;
        that.options.arrows = false;
        that.options.dots = false;
        that.leftArrow.style.display = 'none';
        that.rightArrow.style.display = 'none'
    };
    if (that.elemCount >= 1) { // показать первый элемент
        that.sldrElemFirst.style.opacity = '1';
    };

    if (!that.options.loop) {
        that.leftArrow.style.display = 'none'; // отключить левую стрелку
        that.options.auto = false; // отключить автопркрутку
    } else if (that.options.auto) { // инициализация автопрокруки
        setAutoScroll();
        // Остановка прокрутки при наведении мыши на элемент
        that.sldrList.addEventListener('mouseenter', function() { clearInterval(that.autoScroll) }, false);
        that.sldrList.addEventListener('mouseleave', setAutoScroll, false)
    };

    if (that.options.arrows) { // инициализация стрелок
        that.leftArrow.addEventListener('click', function() {
            let fnTime = getTime();
            if (fnTime - bgTime > 1000) {
                bgTime = fnTime;
                that.elemPrev()
            }
        }, false);
        that.rightArrow.addEventListener('click', function() {
            let fnTime = getTime();
            if (fnTime - bgTime > 1000) {
                bgTime = fnTime;
                that.elemNext()
            }
        }, false)
    } else {
        that.leftArrow.style.display = 'none';
        that.rightArrow.style.display = 'none'
    };

    if (that.options.dots) { // инициализация индикаторных точек
        let sum = '',
            diffNum;
        for (let i = 0; i < that.elemCount; i++) {
            sum += '<span class="sim-dot"></span>'
        };
        that.indicatorDots.innerHTML = sum;
        that.indicatorDotsAll = that.sldrRoot.querySelectorAll('span.sim-dot');
        // Назначаем точкам обработчик события 'click'
        for (let n = 0; n < that.elemCount; n++) {
            that.indicatorDotsAll[n].addEventListener('click', function() {
                diffNum = Math.abs(n - that.currentElement);
                if (n < that.currentElement) {
                    bgTime = getTime();
                    that.elemPrev(diffNum)
                } else if (n > that.currentElement) {
                    bgTime = getTime();
                    that.elemNext(diffNum)
                }
                // Если n == that.currentElement ничего не делаем
            }, false)
        };
        that.dotOff(0); // точка[0] выключена, остальные включены
        for (let i = 1; i < that.elemCount; i++) {
            that.dotOn(i)
        }
    }
};

new Sim();


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
    if (popup.querySelector('.menu__ru')) {
        popup.querySelector('.menu__ru').style.display = 'none';
    }
    popup.querySelector('.menu__ro').style.display = 'flex';
    //popup.removeChild(menu_ru);
}

function renderPopupRu() {
    popup.appendChild(menu_ru);
    if (popup.querySelector('.menu__ro')) {
        popup.querySelector('.menu__ro').style.display = 'none';
    }
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