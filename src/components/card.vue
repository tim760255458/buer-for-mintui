<template>
  <div class="card">
    <h3 v-if="isTitle" class="singleLine">{{ title }}</h3>
    <P v-if="isContent" class="manyLine">{{ content }}</P>
    <div v-if="isImgs" class="img-box">
      <div v-if="isImgNum">
        <img v-bind:src="imgs[1]" alt="图片">
      </div>
      <div v-else>
        <img v-for="(item, index) in imgs" v-bind:key="index" v-bind:src="item" alt="图片">
      </div>
    </div>
    <div class="card-footer">
      <div v-if="isAutor" class="manyLine card-autor"><Icon type="person" style="padding-right: 5px;"></Icon>{{ autor }}</div>
      <span v-if="isTimes"><Icon type="ios-time" style="padding-right: 5px;"></Icon>{{ times }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {
      isImgNum: true
    }
  },
  props: {
    title: String,
    content: String,
    times: String,
    autor: String,
    imgs: Array
  },
  computed: {
    isImgs: function () {
      if (this.imgs === undefined) {
        return false
      } else {
        if (this.imgs.length >= 3) {
          this.isImgNum = false
        } else {
          this.isImgNum = true
        }
        return true
      }
    },
    isTitle: function () {
      if (this.title === undefined) {
        return false
      } else {
        return true
      }
    },
    isContent: function () {
      if (this.content === undefined) {
        return false
      } else {
        return true
      }
    },
    isTimes: function () {
      if (this.times === undefined) {
        return false
      } else {
        return true
      }
    },
    isAutor: function () {
      if (this.autor === undefined) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style scoped>
@import '../common/style/indent.css';
.card{
    width: 100%;
    padding: 0 10px;
    margin-bottom: 5px;
    background-color: #fff;
}
h3{
    font-size: 20px;
    color: #000;
    text-align: left;
}
p{
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
    text-align: left;
    width: 100%;
    padding-bottom: 5px;
}
.card-footer{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    border-top: 1px solid #ddd;
}
.card-autor{
    width: 100px;
    display: inline-block;
    text-align: left;
}
</style>



