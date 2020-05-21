<template>
  <div class="card border-light mb-3" style="max-width: 18rem;">
    <div class="card-header">
      {{stock.name}}
      <small>(Price: {{stock.price}})</small>
    </div>
    <div class="card-body">
      <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
      <button
        class="btn btn-success"
        @click="buyStock"
        :disabled="inSufficentFunds || quantity <= 0 || Number.isInteger(quantity)"
      >{{ inSufficentFunds ? 'No Funds' : 'Buy Stock' }}</button>
    </div>
  </div>
</template>
<script>

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    inSufficentFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockID: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.quantity,
      };
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    },
  },
};
</script>
<style>
.form-control {
  width: 42%;
  margin-right: 10px;
  display: inline;
}

.btn-suceess {
  display: inline;
  margin-top: 10px;
}

.card {
  margin: 10px 30px;
}
</style>
