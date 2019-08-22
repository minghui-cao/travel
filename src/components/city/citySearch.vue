<template>
  <div class="search">
    <div class="search-box">
      <input
        type="text"
        @focus.once="search1"
        @input="search"
        v-model="keyWord"
        placeholder="城市名或拼音（如北京/beijing）"
      />
    </div>
    <ul class="search-content" ref="list">
      <li @click="handleCity(item)" v-for="(item,index) in NewList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
import { clearTimeout, setTimeout } from "timers";
import { log } from "util";
export default {
  name: "CitySearch",
  props: ["citys"],
  data() {
    return {
      keyWord: "",
      lists: [],
      NewList: []
    };
  },

  methods: {
    search1(e) {
      this.citys.forEach(element => {
        this.lists.push(...element.lists);
      });
      // console.log(this.$refs.list);
      if (!this.keyWord.length) {
        this.$refs.list.style.display = "none";
      }
    },
    search(e) {
      if (!this.keyWord.length) {
        this.$refs.list.style.display = "none";
      } else {
        this.$refs.list.style.display = "block";
        this.$refs.list.style.backgroundColor = "#fff";
      }

      this.NewList = this.lists.filter(item => {
        return item.includes(e.target.value);
      });
    },
    handleCity(items) {
      this.$store.dispatch("changeCity", items);
      this.$router.push("/home");
    }
  }
};
</script>
<style lang="stylus" scoped>
.search {
  background-color: #00bcd4;
  height: 0.6rem;
  padding: 0rem 0.2rem;
  overflow: hidden;

  .search-box {
    height: 0.4rem;
    background-color: #28a1b0;
    border-radius: 0.2rem;
    margin-top: 0.05rem;

    input {
      width: 100%;
      text-align: center;
      line-height: 0.4rem;
      background-color: transparent;
      color: #43bfcd;
      font-size: 0.2rem;
    }
  }

  .search-content {
    position: absolute;
    top: 1.2rem;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    display: none;

    li {
      font-size: 0.2rem;
      line-height: 0.6rem;
      border-bottom: 0.01rem solid #ccc;
      margin: 0 0.2rem;
    }
  }
}
</style>
