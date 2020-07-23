<template>
  <div class="list-product">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Category ID</th>
          <th scope="col">Avatar</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in list_product" :key="product.id">
          <th scope="row">{{ product.categoryId }}</th>
          <td>{{ product.avatar }}</td>
          <td>{{ product.name }}</td>
        </tr>
      
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "list-product",
  data() {
    return {
      list_product: []
    }
  },
  created() {
    this.getListProduct()
  },
  methods: {
    getListProduct() {
      axios.get("https://5d2c2c4a8c900700149720a5.mockapi.io/categories/18/product").then(response => {
        this.list_product = response.data
      }).catch(error => {
        this.errors = error.response.data.errors.name
      })
    }
  }
};
</script>