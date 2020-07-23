<template>
  <div class="list-category">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Url Image</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cate in list_cateogry" :key="cate.id">
          <th scope="row">{{ cate.id }}</th>
          <td>{{ cate.image }}</td>
          <td>{{ cate.name }}</td>
        </tr>
      
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "list-category",
  data() {
    return {
      list_cateogry: []
    }
  },
  created() {
    this.getListCategory()
  },
  methods: {
    getListCategory() {
      axios.get('https://5d2c2c4a8c900700149720a5.mockapi.io/categories').then(response => {
        this.list_cateogry = response.data
      }).catch(error => {
        this.errors = error.response.data.errors.name
      })
    }
  }
};
</script>