<template>
  <div class="recommend">
    <card
      :title="msg"></card>
  </div>
</template>

<script>
import card from '../components/card'
export default {
  name: 'recommend',
  components: {
    card
  },
  data () {
    return {
      msg: '还没想好推荐内容形式，此页日后开发'
    }
  }
}
</script>

<style scoped>

</style>


