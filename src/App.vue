<template>
  <div id="app">
    <headerview></headerview>
    <router-view></router-view>
    <footerview></footerview>
  </div>
</template>

<script>
import headerview from './components/header.vue'
import footerview from './components/footer.vue'
export default {
  components:{
    headerview,
    footerview
  }
}
</script>

