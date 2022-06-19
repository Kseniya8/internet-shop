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
                mark: 5,
                img: 'egg',
                product: 'Набор Трафареты Формы Фигурные 72г',
                about: 'Ура пасха, красим яйца',
                price: '100 ₽',
                oldPrice: '10 700 ₽'
            }

        ]
    }
})