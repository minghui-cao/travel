<template>
  <div>
    <ul class="alphabet">
      <li
        v-for="item in letters"
        :key="item"
        @click="handle"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="item"
      >{{item}}</li>
    </ul>
  </div>
</template>
<script>
import { log } from "util";
export default {
  name: "Alphabet",
  props: ["citys"],
  data() {
    return {
      flagStatus: false,
      startY: 0
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    letters() {
      let letters = [];
      this.citys.forEach(element => {
        letters.push(element.title);
      });
      return letters;
    }
  },
  methods: {
    handle(e) {
      // console.log(e.target.innerText);
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.flagStatus = true;
    },
    handleTouchMove(e) {
      if (this.flagStatus) {
        const endY = e.touches[0].clientY - 80;
        const index = Math.floor((endY - this.startY) / 20);
        if (index >= 0 && index < this.letters.length) {
          this.$emit("change", this.letters[index]);
        }
      }
    },
    handleTouchEnd() {
      this.flagStatus = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
.alphabet {
  position: absolute;
  top: 1.7rem;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  li {
    font-size: 0.2rem;
    color: #999;
    width: 0.4rem;
    line-height: 0.3rem;
    text-align: center;
  }
}
</style>
