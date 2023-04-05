// Swiper Section

const swiperNews = new Swiper('#newsSwiper', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 3.5,
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
    breakpoints: {
        1499: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1220: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },

    }
});

const swiperBooks = new Swiper('#booksSwiper', {
    speed: 400,
    effect: 'cards',
    slidesPerView: 5,
    spaceBetween: 20,
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination--books',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next--books',
        prevEl: '.swiper-button-prev--books',
    },
    breakpoints: {
        1499: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1260: {
            slidesPerView: 3.5,
            spaceBetween: 20
        },
        1180: {
            slidesPerView: 6,
            spaceBetween: 20
        },

    }
});

const swiperLink = new Swiper('#linksSwiper', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 2,
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
    breakpoints: {
        1180: {
            slidesPerView: 6,
            spaceBetween: 20
        },

    }
});