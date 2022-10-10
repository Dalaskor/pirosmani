<template lang="pug">
section.banner-delivery
    .banner-delivery__container
        .banner-delivery__body
            .banner-delivery__left
                .banner-delivery__title
                    | Бесплатная доставка по Москве и Области от 2999 RUB!
                a.banner-delivery__btn
                    | Оформить
            .banner-delivery__right
                .banner-delivery__image
                    img(src="../assets/img/banner/delivery.png")
</template>

<script>
export default {
    name: 'BannerDeliveryView.vue',
}
</script>

<style scoped lang="scss">
.banner-delivery {
    margin-bottom: 6rem;
    
    &__container {}

    &__body {
        background: #F2F2F2;
        box-shadow: 0px 0px 18.0727px rgba(0, 0, 0, 0.03);
        border-radius: 1.8rem;
        display: flex;
        gap: 4rem;
    }

    &__left {
        padding-top: 3.1rem;
        padding-left: 4rem;
    }

    &__right {}

    &__title {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 3.1rem;
        line-height: 3.8rem;
        color: #333333;
    }

    &__btn {
        display: inline-block;
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 2.5rem;
        line-height: 3rem;
        color: #FFFFFF;
        padding: 0.9rem 2.2rem;
        background: #00AC4E;
        border-radius: 0.4rem;
        margin-top: 3.4rem;

        &:hover{
            cursor: pointer;
            background: #0b793c;
        }
    }

    &__image {
        width: 43.4rem;
        height: 24rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
