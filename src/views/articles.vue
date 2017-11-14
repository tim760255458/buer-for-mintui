<template>
  <div class="articles" ref="wrapper">
    <div class="card-box">
      <card
        v-for="(item, index) in items"
        v-bind:key="index"
        :title="item"
        :content="item"
        :autor="item"
        :times="item"></card>
    </div>
  </div>
</template>

<script>
import card from '../components/card'
import BScroll from 'better-scroll'
export default {
  name: 'articles',
  components: {
    card
  },
  data () {
    return {
      items: ['111', '211', '311', '411', '511', '611', '711', '811', '911', '100']
    }
  },
  mounted () {
    let height = window.innerHeight - 84
    document.getElementsByClassName('articles')[0].style.height = height + 'px'
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
.articles{
    width: 100%;
    overflow: hidden;
    background-color: #ddd;
}
</style>


