<template lang="pug">
#app
  .wrapper
    HeaderView
    main.main
      router-view
    FooterView
</template>

<script>
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';

export default {
    name: "App",
    components: { 
      HeaderView,
      FooterView,
    }
}
</script>

<style lang="scss">
[class*="__container"] {
  max-width: 102.4rem;
  margin: 0px auto;
  padding: 0rem 1.5rem;
}

.wrapper {
    display: flex;
    min-height: 100%;
    overflow: hidden;
    flex-direction: column;
}

.main {
    flex: 1 1 auto;
}

#app {
  min-height: 100%;
}

.btn {
  display: inline-block;
  font-family: 'TT Norms Pro';
  font-style: normal;
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 3rem;
  color: #FFFFFF;
  background: #00AC4E;
  border-radius: 0.4rem;
  padding: 1rem 3rem;
  transition: all 0.3s ease 0s;

  &:hover {
    cursor: pointer;
    background: #0b793c;
  }
}
</style>
