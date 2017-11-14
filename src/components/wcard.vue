<template>
  <div class="wcard">
    <div class="wcard-title" v-if="isTitle">{{ title }}</div>
    <div class="wcard-list-box">
      <ul class="wcard-list" v-if="isList">
        <li v-for="(item, index) in list" v-bind:key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wcard',
  props: {
    title: String,
    list: Array,
    img: String
  },
  computed: {
    isTitle: function () {
      if (this.title === undefined) {
        return false
      } else {
        return true
      }
    },
    isList: function () {
      if (this.list === undefined || this.list.length <= 0) {
        return false
      } else {
        return true
      }
    },
    isImg: function () {
      if (this.img === undefined) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style scoped>
.wcard{
    width: 4rem;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #ddd;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0 4px 4px #d9d9d9;
}
.wcard-title{
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.5);
    padding: 10px 0;
}
.wcard-list-box{
    width: 100%;
    height: 150px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.2);
}
.wcard-list{
    list-style-type: disc;
    list-style-position: inside;
    width: 100%;
    text-align: left;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
}
</style>


