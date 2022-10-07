<template lang="pug">
BannerView
FoodNavView
</template>

<script>
// @ is an alias to /src
import BannerView from '@/components/BannerView.vue'
import FoodNavView from '@/components/FoodNavView.vue'

export default {
  name: 'HomeView',
  components: {
    BannerView,
    FoodNavView,
  }
}
</script>
