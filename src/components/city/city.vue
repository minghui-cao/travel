<template>
  <div>
    <city-header></city-header>
    <city-search :citys="citys"></city-search>
    <city-info :citys="citys" :letter="letter"></city-info>
    <alphabet :citys="citys" @change="handles"></alphabet>
  </div>
</template>
<script>
//城市首页
import CityHeader from "./cityHeader";
//搜索
import CitySearch from "./citySearch";
//城市信息
import CityInfo from "./cityInfo";
import Alphabet from "./alphabet";
import { log } from "util";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityInfo,
    Alphabet
  },
  data() {
    return {
      citys: [],
      letter: ""
    };
  },
  methods: {
    async queryData() {
      let ret = await this.$http.get("/city");

      if (ret.status) {
        this.citys = ret.city;
      }
    },
    handles(val) {
      this.letter = val;
    }
  },
  created() {
    this.queryData();
  }
};
</script>
<style lang="stylus" scoped></style>
