<template>
  <div class="info" ref="warper">
    <div>
      <div class="city-location">
        <div class="location">您的位置</div>
        <div class="location-info">定位失败!</div>
      </div>
      <div class="city-info">
        <div v-for="item in citys" :key="item['title']" :ref="item['title']">
          <div class="city-initial">{{item.title}}</div>
          <div class="list">
            <ul>
              <li
                @click="handleCity(items)"
                v-for="(items,i) in item.lists"
                :key="i"
              >{{items}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import { log } from "util";
export default {
  name: "CityInfo",
  props: ["citys", "letter"],

  methods: {
    handleCity(items) {
      this.$store.dispatch("changeCity", items);
      this.$router.push("/home");
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.warper);
  },
  watch: {
    letter() {
      const element = this.$refs[this.letter][0];
      this.scroll.scrollToElement(element);
    }
  }
};
</script>
<style lang="stylus" scoped>
.info {
  font-size: 0.18rem;
  width: 100%;
  position: absolute;
  top: 1.2rem;
  left: 0;
  bottom: 0;
  overflow: hidden;

  .city-location {
    .location {
      height: 0.5rem;
      line-height: 0.5rem;
      padding-left: 0.2rem;
      background-color: #edf5f9;
    }

    .location-info {
      height: 0.6rem;
      line-height: 0.6rem;
      padding-left: 0.2rem;
      font-size: 0.2rem;
    }
  }

  .city-info {
    .city-initial {
      height: 0.3rem;
      line-height: 0.3rem;
      padding-left: 0.2rem;
      background-color: #edf5f9;
    }

    .list {
      padding-left: 0.2rem;
      font-size: 0.2rem;

      li {
        padding: 0.25rem 0;
      }
    }
  }
}
</style>
