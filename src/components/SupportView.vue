<template lang="pug">
section.support
    .support__container
        .support__title
            | Поддержка
        form.support__form
            .support__box
                textarea(placeholder="Напишите сообщение...")
            input(type="submit", value="Отправить").support__submit
</template>

<script>
export default {
    name: 'SupportSectionView',
}
</script>

<style scoped lang="scss">
.support {
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

    &__form {
        margin-top: 4.5rem;
    }

    &__box {
        textarea {
            font-family: 'TT Hoves';
            font-style: normal;
            font-weight: 400;
            font-size: 2rem;
            line-height: 2.1rem;
            color: #000000;
            width: 67.2rem;
            height: 17.4rem;
            background: #F9F9F9;
            border-radius: 0.5rem;
            resize: none;
            padding: 1.9rem 2rem;

            &::placeholder {
                color: #BDBDBD;
            }
        }
    }

    &__submit {
        margin-top: 4.5rem;
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.4rem;
        text-align: center;
        color: #FFFFFF;
        padding: 1.8rem 4.5rem;
        background: #00AC4E;
        border-radius: 7.8169px;
        border: none;

        &:hover {
            cursor: pointer;
            background: #0b793c;
        }
    }
}
</style>