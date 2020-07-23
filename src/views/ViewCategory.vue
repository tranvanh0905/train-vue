<template>
  <div class="view-category text-center">
      <h3>Details</h3>
      <img :src="category.image" alt="">
      <p>{{category.name}}</p>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: "ViewCategory",
  data() {
      return {
        category: {},
      }
  },
  created() {
      this.getCategory()
  },
  methods: {
      getCategory() {
          Axios.get('https://5d2c2c4a8c900700149720a5.mockapi.io/categories/' + this.$route.params.id).then(response => {
              this.category = response.data
          }).catch(error => {
              this.errors = error.response.data.errors.name
          })
      }
  }
};
</script>