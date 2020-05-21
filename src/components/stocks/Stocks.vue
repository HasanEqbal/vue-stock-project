<template>
  <div class="row row-cols-1 row-cols-md-2">
    <app-stock v-for="(stock, index) in stocks" v-bind:key="index" :stock="stock"></app-stock>
  </div>
</template>
<script>
import Stock from './Stock.vue';

export default {
  components: {
    'app-stock': Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>
