let app = new Vue({
    el: '#app',
    data: {
        isShowGrid: false,
        arrOffers: [
            {
                img: 'sale',
                text: '25% на весь раздел'
            },
            {
                img: 'box',
                text: 'Доставим за 1 день'
            },
            {
                img: 'letter',
                text: 'Акция для подписчиков'
            },
            {
                img: 'kenzo',
                text: 'Новый бренд KENZO'
            },
            {
                img: 'gift',
                text: 'Подарки к заказам'
            },
            {
                img: 'girls',
                text: 'Акция к Пасхе'
            },
            {
                img: 'sale',
                text: '25% на весь раздел'
            },
            {
                img: 'box',
                text: 'Доставим за 1 день'
            },
        ],
        arrProductsOfDay: [
            {
                sale: '25%',
                mark: 5,
                img: 'school',
                product: 'Цветные карандаши Лео "Учись. Набор металлик, 12 цветов" LSMCP-12',
                about: 'Набор для вышивания, Овен / 1256 / 20x20 см',
                price: '2 700 ₽',
                oldPrice: '3 700 ₽'
            },
            {
                sale: '3%',
                mark: 5,
                img: 'paints',
                product: 'Краски акварельные',
                about: 'Все для рисунков',
                price: '1 700 ₽',
                oldPrice: '6 000 ₽'
            },
            {
                sale: '25%',
                mark: 4,
                img: 'egg',
                product: 'Набор Трафареты Формы Фигурные 72г',
                about: 'Ура пасха, красим яйца',
                price: '100 ₽',
                oldPrice: '10 700 ₽'
            },
            {
                sale: '1%',
                mark: 4,
                img: 'picture',
                product: 'Картина 72г',
                about: 'Картина',
                price: '1000 ₽',
                oldPrice: '100 ₽'
            },
            {
                sale: '25%',
                mark: 4,
                img: 'egg',
                product: 'Набор Трафареты Формы Фигурные 72г',
                about: 'Ура пасха, красим яйца',
                price: '100 ₽',
                oldPrice: '10 700 ₽'
            },

        ]
    },
    methods: {
        ShowGrid() {
            if (this.isShowGrid)
                document.querySelector('.grid').style.gridAutoRows = '0';
            else
                document.querySelector('.grid').style.gridAutoRows = 'unset';
            this.isShowGrid = !this.isShowGrid;
        },

        initSwipers() {
            const swiperMain = new Swiper('.main', {
                breakpoints: {
                    0: {
                        initialSlide: 0,
                        spaceBetween: 10,
                        loop: false,
                        slidesPerView: 'auto',
                        pagination: {
                            el: '.swiper-pagination-main',
                            type: 'bullets',
                            clickable: true,
                        }
                    },
                    1025: {
                        spaceBetween: 26,
                        loop: true,
                        slidesPerView: 'auto',
                    },
                    1551: {
                        spaceBetween: 26,
                        loop: true,
                        slidesPerView: 1,
                    },
                },
                speed: 2500,
                grabCursor: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                }
            });

            const swiperHint = new Swiper('.slider-hint', {
                loop: true,
                speed: 4000,
                slidesPerView: 'auto',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                freeMode: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    0: {
                        spaceBetween: 11,
                    },
                    1025: {
                        spaceBetween: 38,
                    },
                    1551: {
                        spaceBetween: 44,
                    },
                }
            });

            const swiper = new Swiper('.product-of-day', {
                grabCursor: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 23,
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'bullets',
                            clickable: true,
                        }
                    },
                    1350: {
                        slidesPerView: 'auto',
                        spaceBetween: 23,
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'bullets',
                            clickable: true,
                        }
                    },
                    1551: {
                        slidesPerView: 1,
                        spaceBetween: 45,
                        pagination: {
                            el: '.product-of-day__slider',
                            type: 'fraction',
                            renderFraction: function (currentClass, totalClass) {
                                return '<span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
                            }
                        }
                    },
                }
            });

            const swiperMobile = new Swiper('.product-of-day__mobile', {
                initialSlide: 0,
                loop: false,
                speed: 1500,
                spaceBetween: 24,
                slidesPerView: 'auto',
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                }
            });

            const swiperAdd = new Swiper('.additional-slider', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: {
                        spaceBetween: 20,
                        slidesPerView: 'auto',
                    },
                    1025: {
                        spaceBetween: 24,
                    },
                    1551: {
                        spaceBetween: 17,
                    },
                },
                loop: true,
                slidesPerView: 'auto',
                grabCursor: true,
            });

            const swiperFooter = new Swiper('.footer', {
                grabCursor: true,
                slidesPerView: 'auto',
                speed: 2000,
                breakpoints: {
                    0: {
                        spaceBetween: 40,
                    },
                    1025: {
                        spaceBetween: 40,
                    },
                    1551: {
                        spaceBetween: 86,
                    },
                },
                freeMode: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                }
            });
        }
    },
    mounted() {
        this.initSwipers();
    }
});

document.addEventListener("DOMContentLoaded", function (event) {
    window.onresize = function () {
        app.initSwipers();
    };
});

let headerFix = document.querySelector('.header-fixed__inner__mobile');
let bottomMenu = document.querySelector('.bottom-menu');
let scrollPrev = 0;

document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll > 127) {
        headerFix.style.transform = 'translateY(127px)';
    } else {
        headerFix.style.transform = 'translateY(-127px)';
    }

    if (scroll > scrollPrev) {
        bottomMenu.style.transform = 'translateY(-64px)';
    } else {
        bottomMenu.style.transform = 'translateY(64px)';
    }
    scrollPrev = scroll;
}