<template lang="pug">
ProductMainView(:productId="id")
ProductInfoView(:productId="id")
BannerDeliveryView
</template>

<script>
import ProductMainView from '@/components/ProductMainView.vue'
import ProductInfoView from '@/components/ProductInfoView.vue'
import BannerDeliveryView from '@/components/BannerDeliveryView.vue'

export default {
    name: 'ProductDetailView.vue',
    components: {
    ProductMainView,
    ProductInfoView,
    BannerDeliveryView,
},
    props: {
        id: Number,
    },
}
</script>