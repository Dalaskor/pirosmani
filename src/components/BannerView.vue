<template lang="pug">
section.banner
    MailingModalView(
        v-if="isShowMailingModal",
        @close="isShowMailingModal=false",
    )
    .banner__container
        .banner__body
            .banner__left
                .banner__title
                    | Подарок на первый заказ.
                .banner__description
                    | Получите 500 рублей за подписку на рассылку
                a(@click="isShowMailingModal=true").banner__btn.btn
                    | Подписаться
            .banner__right
                .banner__img
                    img(src="../assets/img/banner/banner-1.png")
</template>

<script>
import MailingModalView from './MailingModalView.vue'

export default {
    name: 'BannerView',
    data() {
        return {
            isShowMailingModal: false,
        }
    },
    components: {
        MailingModalView,
    }
}
</script>

<style scoped lang="scss">
.banner {
    margin-top: 6rem;

    &__container {}

    &__body {
        width: 100%;
        display: flex;
        background: linear-gradient(180deg, #F1F1FB 0%, #EBEBF5 100%);
        box-shadow: 0rem 0rem 1.8rem rgba(0, 0, 0, 0.03);
        border-radius: 1.8rem;
    }

    &__left {
        padding-top: 4rem;
        padding-left: 4rem;
    }

    &__right {
        margin-left: auto;
    }

    &__title {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 3.1rem;
        line-height: 3.8rem;
        color: #333333;
    }

    &__description {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 1.9rem;
        line-height: 2.4rem;
        color: #828282;
        margin-top: 0.9rem;
    }

    &__btn {
        margin-top: 3.1rem;
    }

    &__img {
        max-width: 41rem;
        max-height: 25.3rem;
        border-radius: 1.8rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
