<template lang="pug">
ProductMainView(:productId="id")
</template>

<script>
import ProductMainView from '@/components/ProductMainView.vue'

export default {
    name: 'ProductDetailView.vue',
    components: {
        ProductMainView,
    },
    props: {
        id: Number,
    },
}
</script>