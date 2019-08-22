<template>
  <div id="app">
    <div>
      <home></home>
    </div>
    <div>
      <home-silde :swiperList='swiperList'></home-silde>
    </div>
    <div>
      <icon-nav :hotlist="hotlist"></icon-nav>
    </div>
    <div>
      <recommend :Titlelist='Titlelist' :Traullist='Traullist'></recommend>
    </div>
  </div>
</template>
<script>
//主页
import Home from "./home";
//轮播图
import HomeSilde from "./silde";
//图标导航
import IconNav from "./icon-nav";
//展示模块
import Recommend from "./recommend";
export default {
  components: {
    Home,
    HomeSilde,
    IconNav,
    Recommend
  },
  data() {
    return {
      hotlist: [],
      swiperList:[],
      Titlelist:[],
      Traullist:[]
    };
  },
  methods: {
    async queryData() {
      let ret = await this.$http.get("/home");

      if (ret.status == 200) {
        let res = ret.data;
//        console.log(ret.data);
        
        this.hotlist = res.hotlist
        this.swiperList = res.swiperList
        this.Titlelist=res.Titlelist
        this.Traullist=res.Traullist
          // console.log(this.Traullist)
      }
    }
  },
  mounted() {
    this.queryData();
  }
};
</script>

<style>
</style>