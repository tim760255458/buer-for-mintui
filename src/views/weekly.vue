<template>
  <div class="weekly" ref="wrapper">
    <div class="wcards">
      <wcard class="weekly-card"
      :title="msg"
      :list="list"></wcard>
      <wcard class="weekly-card"
      :title="msg"
      :list="list"></wcard>
      <wcard class="weekly-card"
      :title="msg"
      :list="list"></wcard>
      <wcard class="weekly-card"
      :title="msg"
      :list="list"></wcard>
      <wcard class="weekly-card"
      :title="msg"
      :list="list"></wcard>
      <wcard class="weekly-card"
      :title="msg"
      :list="list"></wcard>
    </div>
  </div>
</template>

<script>
import wcard from '../components/wcard'
import BScroll from 'better-scroll'
export default {
  name: 'weekly',
  components: {
    wcard
  },
  data () {
    return {
      msg: '第一周',
      list: ['1111', '2222', '3333', '4444']
    }
  },
  mounted () {
    let height = window.innerHeight - 84
    document.getElementsByClassName('weekly')[0].style.height = height + 'px'
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  methods: {
    initScroll () {
      let options = {
        pullDownRefresh: true,
        pullUpLoad: true
      }
      this.scroll = new BScroll(this.$refs.wrapper, options)
    }
  }
}
</script>

<style scoped>
.weekly{
  width: 100%;
}
.wcards{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}
.weekly-card{
  margin-top: 20px;
}
</style>


