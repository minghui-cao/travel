<template>
  <div class="header">
    <h2>城市选择</h2>
    <i class="iconfont" @click="handle">&#xe658;</i>
  </div>
</template>
<script>
export default {
  name: "CityHeader",
  methods:{
    handle(){
      this.$router.push('/home')
    }
  }
};
</script>
<style lang="stylus" scoped>
.header {
  text-align: center;
  height: 0.6rem;
  line-height: 0.6rem;
  color: #ffffff;
  background-color: #00bcd4;
  position relative
  .iconfont {
      position absolute
      top 0
      left 0.1rem
      font-size 0.5rem
  }
}
</style>
