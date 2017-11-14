<template>
  <div id="app">
    <router-view class="app-header" name="header"></router-view>
    <transition class="fade">
      <router-view class="app-content"/>
    </transition>
    <router-view class="app-footer" name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    let height = window.innerHeight - 84
    document.getElementsByClassName('app-content')[0].style.height = height + 'px'
  }
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.app-content{
  margin-top: 32px;
  background-color: #fff;
}
.app-footer{
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
}
</style>
