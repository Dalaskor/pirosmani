<template lang="pug">
footer.footer
    .footer__container
        .footer__column
            .footer__phones
                .footer__phone
                    p Бесплатный звонок по РФ
                    p +7 (831) 282-60-00
                .footer__phone
                    p Для приема заказов
                    p +7 (904) 066-46-85
            .footer__graphic
                | График работы по будням с 9:00 до 18:00
            .footer__email
                | Email: info@.ru
            a.footer__support
                | Поддержка
            .footer__info
                .footer__copyright
                    | ©2020. Пиросмани
                a.footer__rules
                    | Условия и соглашения
                a.footer__politic
                    | Политика конфиденциальности
        .footer__column
            .footer__socials
                a.footer__social
                    | Мы в вконтакте &gt;
                a.footer__social
                    | Мы в instagram &gt;
        .footer__column
            .footer__auth-reg
                .footer__icon
                    <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.39762 4.82654C9.39762 3.69222 8.47515 2.76976 7.34084 2.76976C6.20652 2.76976 5.28405 3.69222 5.28405 4.82654C5.28405 5.96085 6.20652 6.88332 7.34084 6.88332C8.47515 6.88332 9.39762 5.96085 9.39762 4.82654ZM11.4543 4.82652C11.4543 7.09515 9.60937 8.94008 7.34074 8.94008C5.07211 8.94008 3.22718 7.09515 3.22718 4.82652C3.22718 2.55789 5.07211 0.712952 7.34074 0.712952C9.60937 0.712952 11.4543 2.55789 11.4543 4.82652ZM0.142029 18.1956C0.142029 14.226 3.37221 10.9969 7.34077 10.9969C11.3093 10.9969 14.5395 14.226 14.5395 18.1956C14.5395 18.7633 14.0798 19.224 13.5111 19.224C12.9424 19.224 12.4827 18.7633 12.4827 18.1956C12.4827 15.3604 10.176 13.0537 7.34077 13.0537C4.50549 13.0537 2.19881 15.3604 2.19881 18.1956C2.19881 18.7633 1.73912 19.224 1.17042 19.224C0.60172 19.224 0.142029 18.7633 0.142029 18.1956Z" fill="black"/>
                    </svg>
                .footer__auth-inner
                    a.footer__auth
                        | Войти
                    | /
                    a.footer__reg
                        | Регистрация
</template>

<script>
export default {
    name: 'FooterView',
}
</script>

<style scoped lang="scss">
.footer {
    background: #00AC4E;
    color: #FFFFFF;
    font-style: normal;

    &__container {
        padding-top: 3.4rem;
        padding-bottom: 3.4rem;
        display: flex;
        justify-content: space-between;
    }

    &__column {}

    &__phones {
        display: flex;
        align-items: center;
        gap: 6rem;
    }

    &__phone {
        display: flex;
        flex-direction: column;

        p {
            font-family: 'TT Norms Pro';

            &:nth-child(1) {
                font-weight: 400;
                font-size: 1.2rem;
                line-height: 3.2rem;
            }

            &:nth-child(2) {
                font-weight: 500;
                font-size: 1.8rem;
                line-height: 3.9rem;
            }
        }
    }

    &__graphic {
        font-family: 'TT Hoves';
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 3.2rem;
        margin-top: 1.5rem;
    }

    &__email {
        font-family: 'TT Hoves';
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 3.2rem;
        margin-top: 1rem;
    }

    &__support {
        font-family: 'TT Norms Pro';
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.2rem;
        text-decoration-line: underline;
        margin-top: 1rem;
        transition: all 0.3s ease 0s;

        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
    }

    &__info {
        font-family: 'TT Hoves';
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 3.2rem;
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: 3.3rem;
    }

    &__copyright {}

    &__rules {
        transition: all 0.3s ease 0s;

        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
    }

    &__politic {
        transition: all 0.3s ease 0s;

        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
    }

    &__socials {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
    }

    &__social {
        font-family: 'TT Norms Pro';
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 3.2rem;
        letter-spacing: 0.3rem;
        font-variant: small-caps;
        text-transform: uppercase;
        transition: all 0.3s ease 0s;

        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
    }

    &__auth-reg {
        display: flex;
        align-items: center;
        gap: 0.7rem;
    }

    &__icon {
        svg {
            path {
                fill: #FFFFFF;
            }
        }
    }

    &__auth-inner {
        font-family: 'TT Norms Pro';
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 3.2rem;
    }

    &__auth {
        transition: all 0.3s ease 0s;

        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
    }

    &__reg {
        transition: all 0.3s ease 0s;

        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
    }
}
</style>
