<template lang="pug">
section.video
    .video__content
        img(src="../assets/img/banner/video-prev.png")
    a.video__btn
        .video__circle-1
        .video__circle-2
        .video__circle-3
        .video__btn-img
            img(src="../assets/img/icons/play.svg")
</template>

<script>
export default {
    name: 'VideoView',
}
</script>

<style scoped lang="scss">
.video {
    position: relative;
    margin-bottom: 6rem;

    &__content {
        width: 100vw;
        min-height: 64.8rem;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100vw;
            height: 100%;
            object-fit: cover;
        }

        @media (max-width: 48rem) {
            min-height: 0;
        }
    }

    &__btn {
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    &__circle-1 {
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 12.6rem;
        height: 12.6rem;
        background: #00AC4E;
        opacity: 0.1;
        border-radius: 50%;
    }

    &__circle-2 {
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 10.6rem;
        height: 10.6rem;
        background: #00AC4E;
        opacity: 0.2;
        border-radius: 50%;
    }

    &__circle-3 {
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 6.8rem;
        height: 6.8rem;
        background: #00AC4E;
        opacity: 0.5;
        border-radius: 50%;
    }

    &__btn-img {
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>