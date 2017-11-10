<template>
  <div class="footer">
      <router-link class="btn" :to="{ path: '/' }"><Icon type="ios-home-outline"></Icon> 首页</router-link>
      <router-link class="btn" :to="{ path: '/' }"><Icon type="ios-browsers-outline"></Icon> 文章</router-link>
      <router-link class="btn" :to="{ path: '/' }"><Icon type="ios-bookmarks-outline"></Icon> 周刊</router-link>
      <router-link class="btn" :to="{ path: '/' }"><Icon type="ios-star-outline"></Icon> 推荐</router-link>
  </div>
</template>

<script>
    export default {
      name: 'footer',
      data () {
        return {}
      }
    }
</script>

<style scoped>
	.footer{
		width: 100%;
		display: flex;
		justify-content: space-between;
		border-top: 1px solid #42b983;
	}
	.btn{
		width: 25%;
		box-sizing: border-box;
		text-align: center;
		color: #dddddd;
		font-size: 16px;
		height: 32px;
		line-height: 32px;
	}
	.router-link-active{
		color: #42b983;
	}
</style>