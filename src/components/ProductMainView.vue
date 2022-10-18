<template lang="pug">
section.product-main
    .product-main__container
        .product-main__left
            .product-main__image
                img(src="../assets/img/products/plug-big.png")
        .product-main__right
            .product-main__sidebar.sidebar
                .sidebar__name
                    | {{ getName }}
                .sidebar__body
                    .sidebar__inner
                        .sidebar__prop
                            | Цена за уп.
                        .sidebar__value
                            | 1050 ₽
                    .sidebar__inner
                        .sidebar__prop
                            | Кол-во шт в упаковке
                        .sidebar__value
                            | 4 шт.
                    .sidebar__inner
                        .sidebar__prop
                            | Количество, шт
                        .sidebar__value.sidebar__value_count
                            input(type="number", name="count", :value="count")
                            div(@click="minusCount").minus -
                            div(@click="plusCount").plus +
                .sidebar__total
                    p Итого к оплате
                    p.sidebar__total-price 1050 ₽
                .sidebar__buttons
                    .sidebar__buy
                        | Купить
                    router-link(to="/cart").sidebar__cart
                        img(src="../assets/img/icons/cart-product.svg")
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ProductMainView',
    props: {
        productId: Number,
    },
    data: () => ({
        count: 1,
    }),
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
                    name: 'none',
                }
            }
        },
        getName() {
            return String(this.getProduct.title).slice(0, 15);
        },
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
        ]),
        plusCount() {
            this.count += 1;
        },
        minusCount() {
            if(this.count > 1) {
                this.count -= 1;
            }
        },
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API();
    },
}
</script>

<style scoped lang="scss">
.product-main {
    padding-top: 6rem;

    &__container {
        display: flex;
        justify-content: space-between;

        @media (max-width: 48rem) {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            min-width: 100%;
        }
    }

    &__left {}

    &__right {}

    &__image {
        width: 64.6rem;
        height: 42.6rem;
        border-radius: 15px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media (max-width: 48rem) {
            width: 100%;
            height: 20.9rem;
        }
    }

    &__sidebar {}
}

.sidebar {
    width: 31.1rem;
    background: #FFFFFF;
    box-shadow: 0rem 0rem 2.7rem rgba(0, 0, 0, 0.06);
    border-radius: 1.5rem;
    padding: 3.1rem 2.9rem;

    @media (max-width: 48rem) {
        min-width: 100%;
    }

    &__name {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.3rem;
        color: #000000;
    }

    &__body {
        display: flex;
        flex-direction: column;
        margin-top: 2.7rem;
        gap: 2.2rem;
    }

    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__prop {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.2rem;
        color: #C6C6C6;
    }

    &__value {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.3rem;
        color: #000000;

        &_count {
            position: relative;

            input {
                font-family: 'TT Norms Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 1.2rem;
                line-height: 1.9rem;
                width: 11.6rem;
                height: 4.2rem;
                background: #FCFCFC;
                border: 0.1rem solid #EBEBEB;
                text-align: center;
                border-radius: 0.9rem;
                padding: 0 2.6rem;
            }

            .minus {
                position: absolute;
                left: 1.6rem;
                top: 50%;
                transform: translate(0, -50%);
                user-select: none;

                &:hover {
                    cursor: pointer;
                }
            }

            .plus {
                position: absolute;
                right: 1.6rem;
                top: 50%;
                transform: translate(0, -50%);
                user-select: none;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

    &__total {
        display: flex;
        justify-content: space-between;
        margin-top: 2.7rem;
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.2rem;
        color: #000000;
    }

    &__total-price {
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.3rem;
        color: #00AC4E;
    }

    &__buttons {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        margin-top: 1.8rem;
    }

    &__buy {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.3rem;
        color: #FFFFFF;
        width: 100%;
        background: #00AC4E;
        border-radius: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.6rem;
        
        &:hover {
            cursor: pointer;
            background: #0b793c;
        }
    }

    &__cart {
        background: #00AC4E;
        border-radius: 0.4rem;
        padding: 0.7rem 1.1rem;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            cursor: pointer;
            background: #0b793c;
        }
    }
}
</style>