<template lang="pug">
.fail
    p СТРАНИЦА НЕ НАЙДЕНА
</template>

<script>
export default {
    name: 'NotFoundView',
}
</script>

<style scoped lang="scss">
.fail {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);

    p {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 3.1rem;
        line-height: 3.8rem;
        color: #333333;
    }
}
</style>