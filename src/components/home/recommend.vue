<template>
  <div class="recmmend">
    <div>
      <ul class="remTitle">
        <li
          @click="handle(item.id)"
          :class="currentIndex==item.id?'current':''"
          v-for="item in Titlelist"
          :key="item.id"
          v-text="item.title"
        ></li>
      </ul>
      <div>
        <trail :style="Trailstyle" ></trail>
        <low-price :style="Lowstyle" :Traullist="Traullist"></low-price>
        <overbalance :style="BlanceStyle"></overbalance>
      </div>
    </div>
  </div>
</template>
<script>
import Trail from "./product/trail";
import LowPrice from "./product/lowPrice";
import overbalance from "./product/overbalance";
export default {
  name: "Recommend",
  props: ['Titlelist','Traullist'],
  data() {
    return {
      currentIndex: 1,
      Trailstyle: {
        display: "block"
      },
      Lowstyle: {
        display: "none"
      },
      BlanceStyle: {
        display: "none"
      }
    };
  },
  methods: {
    handle(id) {
      this.currentIndex = id;
      if (id == 2) {
        this.Trailstyle.display = "none";
        this.Lowstyle.display = "block";
      } else if (id == 3) {
        this.Trailstyle.display = "none";
        this.Lowstyle.display = "none";
        this.BlanceStyle.display = "block";
      } else if (id == 1) {
        this.Trailstyle.display = "block";
        this.Lowstyle.display = "none";
        this.BlanceStyle.display = "none";
      }
    }
  },
  components: {
    Trail,
    LowPrice,
    overbalance
  }
};
</script>
<style lang="stylus" scoped>
.remTitle {
  height: 0.44rem;
  padding: 0 0.18rem;
  display: flex;
  line-height: 0.44rem;
  border-bottom: 0.01rem solid #eee;

  li {
    float: left;
    font-size: 0.16rem;
    flex: 1;
    text-align: center;
  }

  .current {
    color: #00afc7;
    border-bottom: 0.02rem solid #00afc7;
  }
}
</style>

