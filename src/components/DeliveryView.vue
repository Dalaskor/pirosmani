<template lang="pug">
section.delivery
    .delivery__container
        .delivery__title
            | Доставка
        .delivery__body
            p
                | Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eius quasi
                | mollitia aliquid quaerat doloribus sint cum error nam quidem? Nulla nesciunt
                | non maxime voluptatibus accusantium illo enim, provident error porro dolores
                | corrupti aliquid? Repellat, dicta omnis debitis libero perspiciatis tenetur
                | vitae, earum aliquid quis possimus minus fugit quia culpa asperiores ipsum
                | quae recusandae. Cupiditate voluptas mollitia laboriosam maiores placeat.
                | Ratione voluptatibus, cumque soluta est qui voluptatem ex exercitationem?
                | Voluptate ipsam neque non, magnam quidem nulla doloremque esse sed recusandae
            p
                | Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eius quasi
                | mollitia aliquid quaerat doloribus sint cum error nam quidem? Nulla nesciunt
                | non maxime voluptatibus accusantium illo enim, provident error porro dolores
                | corrupti aliquid? Repellat, dicta omnis debitis libero perspiciatis tenetur
                | vitae, earum aliquid quis possimus minus fugit quia culpa asperiores ipsum
                | quae recusandae. Cupiditate voluptas mollitia laboriosam maiores placeat.
                | Ratione voluptatibus, cumque soluta est qui voluptatem ex exercitationem?
                | Voluptate ipsam neque non, magnam quidem nulla doloremque esse sed recusandae
        .delivery__bottom
            router-link(to='/').delivery__catalog
                | В каталог
            router-link(to='/payment').delivery__payment
                p Об оплате
                .icon
                    img(src="../assets/img/icons/arrow-link.svg")

</template>

<script>
export default {
    name: 'DeliverySectionView',
}
</script>

<style scoped lang="scss">
.delivery {
    padding-top: 4.5rem;
    padding-bottom: 6rem;

    &__container {}

    &__title {
        font-family: 'TT Hoves';
        font-style: normal;
        font-weight: 500;
        font-size: 2.8rem;
        line-height: 3.3rem;
        color: #000000;
    }

    &__body {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 2.2rem;
        line-height: 2.6rem;
        color: #828282;
        margin-top: 2.5rem;

        p {
            margin-top: 3.1rem;

            &:first-child {
                margin-top: 0;
            }
        }
    }

    &__bottom {
        margin-top: 4.5rem;
        display: flex;
        align-items: center;
        gap: 6rem;
    }

    &__catalog {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.1rem;
        text-align: center;
        color: #FFFFFF;
        background: #00AC4E;
        border-radius: 0.6rem;
        padding: 1.4rem 3.8rem;

        &:hover {
            cursor: pointer;
            background: #0b793c;
        }

        @media (max-width: 48rem) {
            font-size: 1.5rem;
        }
    }

    &__payment {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 2.2rem;
        line-height: 2.9rem;
        color: #00AC4E;
        display: flex;
        align-items: center;
        gap: 0.9rem;

        &:hover {
            cursor: pointer;
        }

        @media (max-width: 48rem) {
            font-size: 1.7rem;   
        }

        .icon {
            width: 2rem;
            height: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
}
</style>
