<template>
  <div class="gallary" @click="handleSilde">
    <div class="gallary-slide">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <img
            src="https://img1.qunarzz.com/vs_ceph_vs_tts/af99aed1-50cd-4e57-a15f-51ccb8aa42c8.jpg_r_1280x840x90_998fc08e.jpg"
            alt
            class="slideImg"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://img1.qunarzz.com/p/tts2/1811/46/b76ee135a4696102.jpg_r_1280x840x90_cfd592ee.jpg"
            alt
            class="slideImg"
          />
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gallary",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observer: true,
        observeParents: true
        // loop: true
        // autoplay:true
      }
    };
  },
  methods:{
      handleSilde(){
          this.$emit('handle-change')
      }
  }
};
</script>
<style lang="stylus" scoped>
.gallary >>> .swiper-container {
  overflow: inherit;
}

.gallary {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .gallary-slide {
    width: 100%;

    .slideImg {
      width: 100%;
    }

    .swiper-pagination {
      color: #ffffff;
      font-size: 0.25rem;
      bottom: 4.5rem;
      z-index: 99;
    }
  }
}
</style>
