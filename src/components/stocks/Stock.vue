<template>
  <div class=" stock col-md-6 col-lg-4">
    <div class="card border-success">
      <div class="card-header bg-success">
        <h6>{{ stock.name }}
        <small>(Price:{{ stock.price }})</small>
        </h6>
      </div>
      <div class="card-body ">
        <input type="number" placeholder="Quantity" v-model.number="quantity" />
        <button class="btn bg-success pull-right" @click="buyStock" :disabled="insufficientFunds || quantity <= 0 ">
          {{insufficientFunds ? 'No Funds' : 'Buy'}}
          </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds;
    },
    insufficientFunds () {
      return this.quantity * this.stock.price > this.funds
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
        this.$store.dispatch('buyStock', order)
        this.quantity = 0;  
    }
  }
};
</script>

<style scoped>
.stock {
  margin: 15px 0;
}
.container {
  padding: 30px;
}

.btn {
  float: right;
}
</style>