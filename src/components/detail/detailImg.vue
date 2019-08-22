<template>
  <div class="product">
    <div class="product-img" @click="handleClickSlide">
      <div class="out-icon" @click="handleHome">
        <i class="iconfont">&#xe658;</i>
      </div>
      <img
        src="https://img1.qunarzz.com/vs_ceph_vs_tts/af99aed1-50cd-4e57-a15f-51ccb8aa42c8.jpg_r_640x420x90_cbcc3654.jpg"
        alt
      />
      <div class="product-info">
        <p>
          产品编号
          <span>888888888</span>
        </p>
        <p>
          1/11
          <i class="iconfont">&#xe73b;</i>
        </p>
      </div>
    </div>
    <gallary v-show="showFlag" @handle-change="handleChange"></gallary>
  </div>
</template>
<script>
import Gallary from "./gallary";
export default {
  name: "DetailImg",
  data() {
    return {
      showFlag: false
    };
  },
  methods: {
    handleClickSlide() {
      this.showFlag = true;
    },
    handleChange() {
      this.showFlag = false;
    },
    handleHome() {
      this.$router.push("/home");
    }
  },
  components: {
    Gallary
  }
};
</script>
<style lang="stylus" scoped>
.product {
  .product-img {
    position: relative;
    width: 100%;
    padding-bottom: 65%;
    height: 0;

    img {
      width: 100%;
      overflow: hidden;
    }

    .out-icon {
      width: 0.5rem;
      height: 0.5rem;
      position: absolute;
      top: 0.1rem;
      left: 0.1rem;
      background-color: #000;
      opacity: 0.4;
      border-radius: 0.25rem;

      i {
        font-size: 0.5rem;
        color: #ffffff;
      }
    }

    .product-info {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0.5rem;

      p {
        float: left;
        font-size: 0.2rem;
        color: #ffffff;
      }

      & p:nth-child(2) {
        float: right;
        font-size: 0.2rem;
        color: #ffffff;
      }
    }
  }
}
</style>

