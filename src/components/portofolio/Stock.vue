<template>
  <div class=" stock col-md-6 col-lg-4">
    <div class="card border-info">
      <div class="card-header bg-info">
        <h6>{{ stock.name }} 
        <small>(Price:{{ stock.price }} Quantity:{{stock.quantity}})</small>
            
        </h6>
      </div>
      <div class="card-body ">
        <input type="number" placeholder="Quantity" v-model="quantity" />
        <button class="btn bg-danger" @click="sellStock" :disabled="insufficientStock || quantity <= 0 ">
          {{insufficientStock ? 'No stock' : 'Sell'}}
          </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  
  props: ["stock"],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientStock() {
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
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