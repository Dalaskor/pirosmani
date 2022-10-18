<template lang="pug">
section.cart
    .cart__container
        .cart__left
            .cart__title
                | Корзина
            .cart__list
                .cart__item.item
                    .item__close
                        img(src="../assets/img/icons/cross.svg")
                    .item__image
                    .item__name
                        | Хачапури
                    .item__count
                        .minus
                            img(src="../assets/img/icons/minus.svg")
                        input(type="number", value="1")
                        .plus
                            img(src="../assets/img/icons/plus.svg")
                    .item__price
                        | 350 ₽
                .cart__item.item
                    .item__close
                        img(src="../assets/img/icons/cross.svg")
                    .item__image
                    .item__name
                        | Хачапури
                    .item__count
                        .minus
                            img(src="../assets/img/icons/minus.svg")
                        input(type="number", value="1")
                        .plus
                            img(src="../assets/img/icons/plus.svg")
                    .item__price
                        | 350 ₽
        .cart__right
            .cart__sidebar.sidebar
                .sidebar__title
                    | Заказ №47593
                .sidebar__body
                    .sidebar__line
                        p Товаров в корзине
                        p 700 ₽
                    .sidebar__line
                        p Промокод
                        p.promo - 100 ₽
                .sidebar__total
                    p Итого к оплате
                    p.total-price 600 ₽
                a.sidebar__button
                    | Оформить заказ
            .cart__promocode.promocode
                .promocode__title
                    | Промокод
                .promocode__body
                    input(placeholder="Введите промокод").promocode__input
                    a.promocode__button Подтвердить
</template>

<script>
export default {
    name: 'CartSectionView',
}
</script>

<style scoped lang="scss">
.cart {
    padding-top: 4rem;
    padding-bottom: 6rem;

    &__container {
        display: flex;
        justify-content: space-between;
        gap: 5rem;

        @media (max-width: 48rem) {
            flex-direction: column;
        }
    }

    &__left {
        width: 100%;
    }

    &__right {}

    &__title {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 2.8rem;
        line-height: 5rem;
        color: #333333;
    }

    &__list {
        display: flex;
        flex-direction: column;
        margin-top: 1.3rem;
        width: 100%;
    }

    &__item {}

    &__sidebar {}

    &__promocode {
        margin-top: 4.5rem;
    }
}

.item {
    padding: 2rem 0;
    border-top: 0.1rem solid #EBEBEB;
    width: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 48rem) {
        justify-content: space-between;
        gap: 0.5rem;
    }

    &:last-child {
        border-bottom: 0.1rem solid #EBEBEB;
    }

    &__close {
        &:hover {
            cursor: pointer;
        }
    }

    &__image {
        width: 11.1rem;
        height: 8.2rem;
        background: #00AC4E;
        border-radius: 0.5rem;
        margin-left: 1.5rem;

        @media (max-width: 48rem) {
            width: 3.9rem;
            height: 2.8rem;
            margin-left: 0rem;
        }
    }

    &__name {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.1rem;
        color: #000000;
        margin-left: 3.8rem;

        @media (max-width: 48rem) {
            margin-left: 0rem;
            // font-size: 0.8rem;
        }
    }

    &__count {
        position: relative;
        margin-left: auto;

        .minus {
            position: absolute;
            left: 2.5rem;
            top: 1.7rem;
            user-select: none;

            &:hover {
                cursor: pointer;
            }
        }

        .plus {
            position: absolute;
            right: 2.5rem;
            top: 1.7rem;
            user-select: none;

            &:hover {
                cursor: pointer;
            }
        }

        input {
            font-family: 'TT Norms Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2.1rem;
            color: #000000;
            padding: 0 4.2rem;
            width: 12.8rem;
            height: 4.7rem;
            background: #FCFCFC;
            border: 0.1rem solid #EBEBEB;
            border-radius: 0.5rem;
            text-align: center;
        }

        @media (max-width: 48rem) {
            // margin-left: 0;
        }
    }

    &__price {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.4rem;
        color: #000000;
        margin-left: 6.3rem;

        @media (max-width: 48rem) {
            margin-left: 0rem;
        }
    }
}

.sidebar {
    width: 34.5rem;
    background: #FFFFFF;
    box-shadow: 0rem 0rem 3rem rgba(0, 0, 0, 0.06);
    border-radius: 2rem;
    padding: 5rem 3.2rem 4rem;

    @media (max-width: 48rem) {
        width: 100%;
    }

    &__title {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.5rem;
        color: #000000;
    }

    &__body {
        margin-top: 3.9rem;
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
    }

    &__line {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: #000000;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .promo {
            color: #00AC4E;
        }
    }

    &__total {
        margin-top: 4.5rem;
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: #000000;

        .total-price {
            font-size: 2rem;
            line-height: 2.5rem;
            margin-top: 0.6rem;
        }
    }

    &__button {
        display: inline-block;
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.1rem;
        text-align: center;
        color: #FFFFFF;
        background: #00AC4E;
        border-radius: 0.5rem;
        padding: 1.5rem 2.1rem;
        margin-top: 3rem;

        &:hover {
            cursor: pointer;
            background: #0b793c;
        }
    }
}

.promocode {
    &__title {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.5rem;
        color: #000000;
    }

    &__body {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        gap: 1.8rem;
    }

    &__input {
        background: #FCFCFC;
        border: 0.1rem solid #EBEBEB;
        border-radius: 0.5rem;
        width: 18.7rem;
        height: 4.7rem;
        padding: 0 1.7rem;
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.1rem;
        color: #000000;

        &::placeholder {
            color: #C6C6C6;
        }
    }

    &__button {
        display: inline-block;
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.1rem;
        text-align: center;
        color: #FFFFFF;
        background: #00AC4E;
        border-radius: 0.5rem;
        padding: 1.3rem 2.7rem;

        &:hover {
            cursor: pointer;
            background: #0b793c;
        }
    }
}
</style>
