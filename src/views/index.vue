<template>
  <div class="index">
    <card
      :title="msg"
      :content="msg"
      :times="times"
      :autor="autor"
      :imgs="imgs"></card>
    <card
      :title="msg"
      :content="msg"
      :times="times"
      :autor="autor"
      :imgs="imgs"></card>
  </div>
</template>

<script>
import card from '../components/card'
export default {
  name: 'HelloWorld',
  components: {
    card
  },
  data () {
    return {
      msg: '111111111111111111111111111111111111111111111111111111111111111111111111111111111',
      times: '2017-10-10',
      autor: '朴不二',
      imgs: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
    background-color: #d9d9d9;
}
</style>
