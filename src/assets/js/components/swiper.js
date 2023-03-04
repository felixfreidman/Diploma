// Swiper Section

const swiperNews = new Swiper('#newsSwiper', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 2,
    effect: 'cards',
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination--news',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next--news',
        prevEl: '.swiper-button-prev--news',
    },
});

const swiperBooks = new Swiper('#booksSwiper', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 5,
    effect: 'cards',
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination--books',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next--books',
        prevEl: '.swiper-button-prev--books',
    },
});