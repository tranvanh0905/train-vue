<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar-nav">
        <router-link class="nav-item nav-link" active-class="active" :to="{name: 'Dashboard'}">Dashboard</router-link>
        <router-link class="nav-item nav-link" active-class="active" :to="{name: 'ListCategory'}">List Category</router-link>
        <router-link class="nav-item nav-link" active-class="active" :to="{name: 'ListProduct'}">List Product</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
</style>