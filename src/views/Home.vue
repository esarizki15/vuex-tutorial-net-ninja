<template>
  <div class="home">
  <ProductListOne></ProductListOne>
  <ProductListTwo></ProductListTwo>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductListOne from '@/components/ProductListOne.vue'
import ProductListTwo from '@/components/ProductListTwo.vue'

export default {
  name: 'Home',
  components: {
    ProductListOne,
    ProductListTwo
  },
  data:()=>({
  
  })
}
</script>
