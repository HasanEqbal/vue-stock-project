<template>
  <div>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>
      <ul class="nav navbar-nav">
        <router-link to="/portfolio" activeClass="active" tag="li">
          <a>Portfolio</a>
        </router-link>
        <router-link to="/stocks" activeClass="active" tag="li">
          <a>Stocks</a>
        </router-link>
      </ul>
      <div>
          <a class="nav-link" @click="endDay" style="cursor: pointer" href="#">End Day</a>
      </div>
       <div class="nav-item dropdown" :class="{open: isDropdownOpen}"
       @click="isDropdownOpen != isDropdownOpen">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save & Load</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
          </div>
        </div>
      <strong>Funds : {{ funds | currency }}</strong>
    </nav>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions([
      'randomizeStock',
      'fetchData',
    ]),
    endDay() {
      this.randomizeStock();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };
      this.$http.put('data.json', data);
    },
    loadData() {
      this.fetchData();
    },
  },
};
</script>
<style>
.navbar-nav {
  flex-direction: row;
}

a {
  padding-right: 10px;
}

.nav-item {
  padding: 10px;
}
</style>
