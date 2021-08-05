<template>
  <div class="product-list-container">
    <SearchBar />
    <ProductDetail />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import ProductDetail from '@/components/ProductDetail'
export default {
  components:{
    SearchBar,
    ProductDetail
  }
}
</script>

<style>

</style>