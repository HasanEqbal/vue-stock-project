<template>
  <div class="card border-light mb-3" style="max-width: 18rem;">
    <div class="card-header">
      {{stock.name}}
      <small>(Price: {{stock.price}}) | (Quantity: {{stock.quantity}})</small>
    </div>
    <div class="card-body">
      <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
      <button
        class="btn btn-success"
        @click="sellStock"
        :disabled="inSufficentQuantity || quantity <= 0 || Number.isInteger(quantity)"
      >{{inSufficentQuantity ? 'No Stock': 'Sell Stock'}}</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    inSufficentQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStocks',
    }),
    sellStock() {
      const order = {
        stockID: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.placeSellOrder(order);
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
