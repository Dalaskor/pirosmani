<template lang="pug">
BannerView
FoodNavView
AllProductsView
VideoView
BannerDeliveryView
</template>

<script>
// @ is an alias to /src
import BannerView from '@/components/BannerView.vue'
import FoodNavView from '@/components/FoodNavView.vue'
import AllProductsView from '@/components/AllProductsView.vue'
import VideoView from '@/components/VideoView.vue'
import BannerDeliveryView from '@/components/BannerDeliveryView.vue'

export default {
  name: 'HomeView',
  components: {
    BannerView,
    FoodNavView,
    AllProductsView,
    VideoView,
    BannerDeliveryView,
  }
}
</script>
