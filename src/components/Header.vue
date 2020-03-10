<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">
      <a>Home</a>
    </router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/stocks" class="navbar-brand">
            <a>Stocks</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/portofolio" class="navbar-brand">
            <a>Portofolio</a>
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown" @click="toggledropDown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save & Load</a>
          <div class="dropdown-menu" :class="{show:dropDown}" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" >Save</a>
            <a class="dropdown-item" href="#">Load</a>
          </div>
        </li>
        <li class="nav-item">
          <button
            class="btn btn-outline-secondary my-2 my-sm-0"
            type="submit"
            @click="endDay"
          >End Day</button>
        </li>
        <li class="nav-item">
          <div class="funds">Funds:{{funds | currency}}</div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      dropDown: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(["rndStocks"]),
    endDay() {
      this.rndStocks();
    },
    toggledropDown(dropDown) {
        this.dropDown = !this.dropDown
    },
    // saveData() {
    //   const data = {
    //     funds: this.$store.getters.funds,
    //     stockPortofolio: this.$store.getters.stockPortofolio,
    //     stocks: this.$store.getters.stocks
    //   };
    //   this.$http.put('data.json', data)
    // }
  }
};
</script>

<style scoped>
.funds {
  padding-top: 10%;
  padding-left: 5%;
}
</style>