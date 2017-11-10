<template>
  <div id="app">
    <router-view class="app-header" name="header"></router-view>
    <router-view class="app-content"/>
    <router-view class="app-footer" name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.app-header{
  position: absolute;
  top: 0;
  left: 0;
}
.app-content{
  margin-top: 32px;
  background-color: #fff;
}
.app-footer{
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
