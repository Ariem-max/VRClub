import 'resetcss'
import './style/style.scss'
import 'boxicons'
import 'swiper/swiper-bundle.css'
import 'swiper/modules/navigation/navigation.scss'
import Swiper, { EffectCoverflow, Navigation, Pagination } from 'swiper';
const swiper = new Swiper('.first-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    // effect: 'cards',
    spaceBetween: 40,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
        modifier: 2,


    },

    modules: [EffectCoverflow, Navigation],
    navigation: {
        nextEl: ".right",
        prevEl: '.left'
    },

});

const newSwiper = new Swiper('.second-swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    }
})