<template lang="pug">
transition(name="modal")
    .modal__mask
        .modal__wrapper
            .modal__container
                div(@click="$emit('close')").modal__close
                    img(src="../assets/img/icons/close.svg")
                .modal__header
                    .modal__icon
                        img(src="../assets/img/icons/profile-modal.svg")
                    .modal__title
                        | Войти в личный кабинет
                .modal__body
                    form.modal__form
                        .modal__input.modal__input_phone
                            input(type="tel", name="phone", placeholder="Телефон")
                        .modal__input.modal__input_password
                            input(type="password", name="password", placeholder="Пароль")
                        a.modal__lost Забыли пароль?
                        input(type="button", value="Войти", @click="$emit('logIn')").modal__submit
                    .modal__register
                        span Впервые у нас? 
                        a(@click="$emit('showRegister')") Зарегистрироваться
</template>

<script>
export default {
    name: 'AuthorizationModalView',
}
</script>

<style scoped lang="scss">
.modal {
    &__mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }

    &__wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    &__container {
        width: 35.8rem;
        margin: 0rem auto;
        padding: 2.8rem 4.2rem 3.4rem;
        background-color: #fff;
        border-radius: 1.7rem;
        box-shadow: 0rem 0rem 1.7rem rgba(0, 0, 0, 0.12);
        transition: all 0.3s ease;
        position: relative;
    }

    &__close {
        position: absolute;
        right: 1.5rem;
        top: 1.4rem;
        width: 3.3rem;
        height: 3.5rem;

        &:hover {
            cursor: pointer;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__body {}

    &__icon {}

    &__title {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 1.7rem;
        line-height: 2.2rem;
        text-align: center;
        color: #000000;
        margin-top: 1.3rem;
    }

    &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2.8rem;
    }

    &__input{
        width: 100%;
        position: relative;

        input {
            font-family: 'TT Norms Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 1.8rem;
            color: #000000;
            display: block;
            width: 100%;
            height: 5rem;
            background: #FCFCFC;
            border: 0.1rem solid #EBEBEB;
            border-radius: 0.5rem;
            padding-left: 4.9rem;

            &::placeholder {
                color: #C6C6C6;
            }
        }

        &_phone {
            &::before {
                position: absolute;
                left: 1.8rem;
                top: 1.9rem;
                display: block;
                content: '';
                width: 1.1rem;
                height: 1.1rem;
                background: url('../assets/img/icons/phone-input.svg') no-repeat center;
            }
        }

        &_password {
            margin-top: 2.5rem;

            &::before {
                position: absolute;
                left: 1.8rem;
                top: 1.9rem;
                display: block;
                content: '';
                width: 1.1rem;
                height: 1.1rem;
                background: url('../assets/img/icons/password-input.svg') no-repeat center;
            }
        }
    }

    &__lost {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.7rem;
        text-decoration-line: underline;
        color: #00AC4E;
        margin-top: 1.4rem;

        &:hover {
            cursor: pointer;
        }
    }

    &__submit {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.8rem;
        text-align: center;
        color: #FFFFFF;
        background: #00AC4E;
        border-radius: 0.5rem;
        border: none;
        padding: 1.2rem 5rem;
        margin-top: 1.2rem;

        &:hover {
            cursor: pointer;
            background: #0b793c;
        }
    }

    &__register {
        text-align: center;
        margin-top: 2.4rem;
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.8rem;
        text-align: center;
        color: #000000;

        span {}

        a {
            font-weight: 500;
            color: #00AC4E;

            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>