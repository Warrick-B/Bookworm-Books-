<template>
<Product-Card> 
  <template v-slot:image>
    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2Fhpsorcstone.jpg"> 
     </template >
  <template v-slot:title> <!-- naming the slot -->
  Harry Potter and the Philosopher's Stone  <!--Title of the book -->
  </template>
   <template v-slot:price> 
  $19.99 <!--Price of the book -->
  </template>
  <template v-slot:author> 
   J.K Rowling <!--author of the book -->
  </template>
</Product-Card>
</template>
<!-- Reference: meredith(N/A), 'Harry potter harry potter and the philosopher's stone',  meredith, accessed 9 Septemeber 2021-->
<script>
import ProductCard from './components/ProductCard.vue'

export default {
  components:{
    ProductCard,
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
