<template>
  <div class="slideWarp">
    <swiper :options="swiperOption" v-if="showList">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList " :key="item.id">
        <img :src="item.UrlImg" alt class="slideImg" />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSilde",
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: ".swiper-pagination",
        loop: true,
        observer: true,
       
      }
    };
  },
  computed: {
    showList() {
      return this.swiperList.length;
    }
  }
};
</script>
<style lang="stylus" scoped>
.slideWarp >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}

.slideWarp {
  overflow: hidden;
  height: 0;
  padding-bottom: 25%;

  .slideImg {
    width: 100%;
  }
}
</style>
