<template lang="pug">
BannerView
FoodNavView
AllProductsView
</template>

<script>
// @ is an alias to /src
import BannerView from '@/components/BannerView.vue'
import FoodNavView from '@/components/FoodNavView.vue'
import AllProductsView from '@/components/AllProductsView.vue'

export default {
  name: 'HomeView',
  components: {
    BannerView,
    FoodNavView,
    AllProductsView,
  }
}
</script>
