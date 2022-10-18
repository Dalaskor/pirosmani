<template lang="pug">
div.wrapper
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
html, body {
  height: 100%;
}

.scrollLock {
  overflow: hidden;
}

#app {
  height: 100%;
}

[class*="__container"] {
  max-width: 102.4rem;
  margin: 0px auto;
  padding: 0rem 1.5rem;
}

.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main {
  min-height: 100%;
  flex: 1 1 auto;
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

.pagination {
    margin-bottom: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &__page {
        border-radius: 0.5rem;
        width: 4.1rem;
        height: 4.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;

        &:hover {
            cursor: pointer;
        }

        &_selected {
            background: #00AC4E;
            
            .pagination__page-link {
              color: #FFFFFF;
            }
        }
    }

    &__page-link {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.5rem;
        color: #000000;
    }

    &__next {
      a {
        content: '';
        width: 4.1rem;
        height: 4.1rem;
        margin-left: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        background: url('assets/img/icons/arrow-pag.svg') no-repeat center;

        &:hover {
            cursor: pointer;
        }
      }
    }

    &__prev {
      a {
        content: '';
        width: 4.1rem;
        height: 4.1rem;
        margin-left: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        background: url('assets/img/icons/arrow-pag.svg') no-repeat center;
        transform: rotate(-180deg);

        &:hover {
            cursor: pointer;
        }
      }
    }
}
</style>
