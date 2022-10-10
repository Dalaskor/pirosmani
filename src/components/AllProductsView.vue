<template lang="pug">
section.allproducts
    .allproducts__container
        .allproducts__title
            | Все товары
        .allproducts__list
            ProductView(
                v-for="product in paginatedProducts",
                :key="product.id",
                :product_data="product"
            )
        Paginate(
            :pageCount="pages",
            :pageRange="4",
            :clickHandler="pageClick",
            :prev-text="'&nbsp;'"
            :next-text="'&nbsp;'"
            :containerClass="'pagination'",
            :pageClass="'pagination__page'",
            :pageLinkClass="'pagination__page-link'",
            :activeClass="'pagination__page_selected'",
            :prev-class="'pagination__prev'",
            :next-class="'pagination__next'"
        )
</template>

<script>
import ProductView from './ProductView.vue'
import Paginate from "vuejs-paginate-next";
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AllProductsView',
    components: {
        ProductView,
        Paginate,
    },
    data() {
        return {
            productsPerPage: 16,
            pageNumber: 1,
        };
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
        ]),
        pages() {
            const COUNT = 16;

            return Math.ceil(this.PRODUCTS.length / COUNT);
        },
        paginatedProducts() {
            const from = (this.pageNumber - 1) * this.productsPerPage;
            const to = from + this.productsPerPage;

            return this.PRODUCTS.slice(from, to);
        },
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
        ]),
        pageClick(pageNum) {
            this.pageNumber = pageNum;
        },
        nextPage() {
            if(this.pageNumber + 1 <= this.pages) {
                this.pageNumber += 1;
            } else {
                this.pageNumber = 1;
            }
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API();
    }
}
</script>

<style scoped lang="scss">
.allproducts {
    &__container {
    }

    &__title {
        font-family: 'TT Norms Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 2.7rem;
        line-height: 1.9rem;
        color: #000000;
    }

    &__list {
        margin-top: 3.9rem;
        margin-bottom: 4.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 5.6rem;
    }

    &__btn-pag {
        width: 4.1rem;
        height: 4.1rem;
        margin-left: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;

        &:hover {
            cursor: pointer;
        }

        img {
            width: 0.8rem;
            height: 1.3rem;
            object-fit: contain;
        }
    }
}
</style>
