let app = new Vue({
    el: '.intro',
    data: {
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
        initSwipers() {
            const swiperMain = new Swiper('.main', {
                spaceBetween: 26,
                loop: true,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    1025: {
                        slidesPerView: 'auto',
                    },
                    1551: {
                        slidesPerView: 1,
                    },
                }
                // freeMode: true,
                // autoplay: {
                //    delay: 2000,
                //     disableOnInteraction: false,
                // }
            });

            const swiperHint = new Swiper('.slider-hint', {
                loop: true,
                slidesPerView: 'auto',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: {
                        spaceBetween: 15,
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
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 23,
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'bullets',
                            clickable: true,
                        }
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 23,
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'bullets',
                            clickable: true,
                        }
                    },
                    1551: {
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

            const swiperAdd = new Swiper('.additional-slider', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: {
                        spaceBetween: 15,
                    },
                    1025: {
                        spaceBetween: 24,
                    },
                    1551: {
                        spaceBetween: 17,
                    },
                }

            });

            const swiperFooter = new Swiper('.footer', {
                loop: true,
                slidesPerView: 'auto',
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
                }
                // freeMode: true,
                // autoplay: {
                //    delay: 2000,
                //     disableOnInteraction: false,
                // }
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
