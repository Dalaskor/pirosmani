<template lang="pug">
section.product-info
    .product-info__container
        .product-info__title
            | О товаре
        .product-info__main
            .product-info__left
                .product-info__subtitle
                    | Описание
                .product-info__body
                    .product-info__description
                        | {{ getDescription }}
            .product-info__right
                .product-info__subtitle
                    | Параметры
                .product-info__body
                    .product-info__inner
                        .product-info__prop
                            | Калории:
                        .product-info__value
                            | 420
                    .product-info__inner
                        .product-info__prop
                            | Жиры:
                        .product-info__value
                            | 54 
                    .product-info__inner
                        .product-info__prop
                            | Белки:
                        .product-info__value
                            | 27 
                    .product-info__inner
                        .product-info__prop
                            | Углеводы:
                        .product-info__value
                            | 18 
                    .product-info__inner
                        .product-info__prop
                            | Масса:
                        .product-info__value
                            | 500 грамм 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'ProductInfoView',
    props: {
        productId: Number,
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
        ]),
        getProduct() {
            const filteredProducts = this.PRODUCTS.filter(elem => elem.id === Number(this.productId));

            if(filteredProducts.length > 0) {
                return filteredProducts[0];
            } else {
                return {
                    body: 'none',
                }
            }
        },
        getDescription() {
            return String(this.getProduct.body);
        },
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
        ]),
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API();
    },
}
</script>

<style scoped lang="scss">
.product-info {
    padding-top: 6rem;
    padding-bottom: 6rem;
    
    &__container {}

    &__main {
        display: flex;
        gap: 4rem;

        @media (max-width: 48rem) {
            flex-direction: column;
        }
    }

    &__title {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 2.8rem;
        line-height: 1.9rem;
        color: #00AC4E;
        margin-bottom: 4rem;
    }

    &__left {
        max-width: 61rem;
    }

    &__right {}

    &__subtitle {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 2.1rem;
        line-height: 1.9rem;
        color: #000000;
    }

    &__body {
        margin-top: 2.2rem;
    }

    &__description {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 1.9rem;
        color: #828282;
    }

    &__inner {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.2rem;
        color: #828282;
    }

    &__prop {
        font-weight: 500;
    }

    &__value {
    }
}
</style>