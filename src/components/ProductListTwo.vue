<template>
  <div class="product-list-two">
  <h2>Product List Two</h2>
	<ul>
	<li v-for="(product, index) in product" :key="index">
		<span class="nama">{{product.nama}}</span>
		<span class="harga"> {{product.harga}}</span>
	</li>
	</ul>
  </div>
</template>

<script>
export default {
  name: 'ProductListTwo',
  computed:{
  product(){
  return this.$store.state.products;
  }
}
}
</script>
<style scoped>
.product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
.product-list-two ul{
    padding: 0;
    list-style-type: none;
}
.product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.harga{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>