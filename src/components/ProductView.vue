<template lang="pug">
.product
    .product__img
        img(src="../assets/img/products/plug.png")
    .product__title
        | {{ title }}
    .product__description
        | {{ description }}
    .product__price
        | 1 050 ₽/кг
    a(@click="routeProduct").product__btn
        | В корзину
</template>

<script>
export default {
    name: 'ProductView',
    data() {
        return {
            title: this.product_data.title.slice(0, 15),
            description: this.product_data.body.slice(0, 81),
        };
    },
    props: {
        product_data: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    methods: {
        routeProduct () {
            this.$router.push({
                name: 'product',
                params: {
                    id: this.product_data.id,
                },
            });      
        },
    },
}
</script>

<style scoped lang="scss">
.product {
    width: 20.6rem;

    &__img {
        width: 20.5rem;
        height: 12.5rem;
        border-radius: 0.4rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__title {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.2rem;
        color: #000000;
        margin-top: 0.9rem;
    }

    &__description {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.9rem;
        color: #000000;
        margin-top: 0.5rem;
    }

    &__price {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.3rem;
        color: #000000;
        margin-top: 0.9rem;
    }

    &__btn {
        display: inline-block;
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 1.4rem;
        color: #FFFFFF;
        background: #00AC4E;
        border-radius: 0.4rem;
        padding: 1rem 2.7rem;
        margin-top: 1.3rem;

        &:hover{
            cursor: pointer;
            background: #0b793c;
        }
    }
}
</style>
