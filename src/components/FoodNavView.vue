<template lang="pug">
section.food-nav
    .food-nav__container
        swiper(
            :slides-per-view="1",
            :space-between="40",
            :loop="true",
            :navigation="{nextEl: '.food-nav__next'}",
            :breakpoints="swiperOptions.breakpoints",
            @swiper="onSwiper",
            @slideChange="onSlideChange"
        ).food-nav__slider
            swiper-slide.food-nav__slide 
                router-link(to='/soups').food-nav__link Супы
            swiper-slide.food-nav__slide
                router-link(to='/hachapur').food-nav__link Хачапуры
            swiper-slide.food-nav__slide
                router-link(to='/snacks').food-nav__link Закуски
            swiper-slide.food-nav__slide
                router-link(to='/khinkali').food-nav__link Хинкали
            swiper-slide.food-nav__slide
                router-link(to='/barbecue').food-nav__link Шашлык
            swiper-slide.food-nav__slide
                router-link(to='/sauces').food-nav__link Соусы
            swiper-slide.food-nav__slide
                router-link(to='/salads').food-nav__link Салаты
            swiper-slide.food-nav__slide
                router-link(to='/dishes').food-nav__link Блюда
            swiper-slide.food-nav__slide
                router-link(to='/garnish').food-nav__link Гарнир
            swiper-slide.food-nav__slide
                router-link(to='/desserts').food-nav__link Десерты
            swiper-slide.food-nav__slide
                router-link(to='/drinks').food-nav__link Напитки
        div(@click="mySlideNext").food-nav__next
            img(src="../assets/img/icons/arrow.svg")
</template>

<script>
// import { Navigation } from 'swiper';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/scss';
import 'swiper/scss/navigation';

SwiperCore.use([Navigation]);

export default {
    name: "FoodNavView",
    data: () => ({
        swiperOptions: {
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                480: {
                    slidesPerView: 3,
                },
                640: {
                    slidesPerView: 4,
                },
            },
        },
    }),
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        const mySlideNext = () => {
            const swiper = document.querySelector('.food-nav__slider').swiper;
            swiper.slideNext();
        }
        return {
            onSwiper,
            onSlideChange,
            mySlideNext,
            modules: [Navigation],
        };
    },
    methods: {
    },
};
</script>

<style scoped lang="scss">
.food-nav {
    &__container {
        padding-top: 2.4em;
        padding-bottom: 3rem;
        display: flex;
        align-items: center;
        gap: 4.7rem;
        user-select: none;
    }

    &__slider {
        user-select: none;
    }

    &__slide {
        user-select: none;
    }

    &__link {
        font-family: 'TT Hoves';
        font-style: normal;
        font-weight: 400;
        font-size: 2.3rem;
        line-height: 2.7rem;
        color: #4F4F4F;
        padding: 0.8rem 1.6rem;
        border-radius: 0.5rem;
        transition: all 0.3s ease 0s;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        user-select: none;

        &:hover {
            cursor: pointer;
            color: #FFFFFF;
            background-color: #fff;
            background: #00AC4E;
        }

        &.router-link-active {
            color: #FFFFFF;
            background-color: #fff;
            background: #00AC4E;
        }
    }

    &__next {
        width: 1.3rem;
        height: 2.2rem;

        img {
            object-fit: contain;
        }

        &:hover {
            cursor: pointer;
        }
    }
}
</style>