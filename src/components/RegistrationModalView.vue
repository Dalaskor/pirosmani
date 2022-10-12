<template lang="pug">
.modal__mask
    .modal__wrapper
        .modal__container
            div(@click="$emit('close')").modal__close
                img(src="../assets/img/icons/close.svg")
            .modal__header
                .modal__icon
                    img(src="../assets/img/icons/profile-modal.svg")
                .modal__title
                    | Регистрация
            .modal__body
                form.modal__form
                    .modal__input.modal__input_phone
                        input(type="tel", name="phone", placeholder="Телефон")
                    .modal__input.modal__input_password
                        input(type="password", name="password", placeholder="Пароль")
                    .modal__input.modal__input_password
                        input(type="password", name="submit-password", placeholder="Подтвердите пароль")
                    .modal__inner
                        .modal__checkbox
                            input(type="checkbox", id="cbOffers", name="cbOffers", value="yes")
                            label(for="cbOffers") Хочу получать выгодные предложения от магазина
                        .modal__checkbox
                            input(type="checkbox", id="cbPolitics", name="cbPolitics", value="yes")
                            label(for="cbPolitics")
                                p Принимаю условия 
                                    a Пользовательского соглашения, Политики конфиденциальности
                    input(type="button", value="Зарегистрироваться", @click="$emit('signIn')").modal__submit
</template>

<script>
export default {
    name: 'RegistrationModalView',
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

    &__inner {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
    }

    &__checkbox {
        margin-top: 1.1rem;

        input {
            position: absolute;
            z-index: -1;
            opacity: 0;
        }

        label {
            font-family: 'TT Norms Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 0.9rem;
            line-height: 1.4rem;
            color: #C6C6C6;

            a {
                display: inline;
                color: #00AC4E;
            }
        }

        input+label {
            display: inline-flex;
            align-items: start;
            justify-content: start;
            user-select: none;

            &::before {
                content: '';
                display: inline-block;
                width: 1.4rem;
                height: 1.4rem;
                flex-shrink: 0;
                flex-grow: 0;
                background: #FCFCFC;
                border: 0.1rem solid #EBEBEB;
                border-radius: 50%;
                margin-right: 1.5rem;
            }
        }

        input:checked+label::before {
            border-color: #FFFFFF;
            background: #00AC4E;
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
        margin-top: 3.8rem;

        &:hover {
            cursor: pointer;
            background: #0b793c;
        }
    }
}
</style>