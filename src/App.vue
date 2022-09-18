<template>
  <div>
    <router-link to="/home">Home</router-link> | 
    <router-link :to="{ name: 'product', params: {id: 27}, query: {page: 2} }">Product</router-link> | 
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>
  
  
</script>

<style scoped>
</style>
