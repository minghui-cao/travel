<template>
  <div>
    <div class="header">
      <div class="header-let">
        <a href="javascript:;" title="去哪儿旅游搜索引擎 Qunar.com">
          <img src="../../assets/images/logo_camel.png" alt />
        </a>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe6a2;</span>
        <input type="text" placeholder="搜索目的地、主题、景点" />
      </div>
      <div class="header-right">
        <router-link to="/city">
          <span>{{this.$store.state.city}}</span>
          <span class="iconfont">&#xe6a4;</span>
       </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home"
};
</script>
<style lang="stylus" scoped>
.header {
  height: 0.4rem;
  display: flex;
  margin: 0.1rem;
  line-height: 0.4rem;

  .header-let {
    width: 0.5rem;
    height: 100%;
    padding: 0 0.1rem;

    img {
      width: 0.4rem;
      height: 0.3rem;
    }
  }

  .header-input {
    flex: 1;
    font-size: 0.18rem;
    border: 0.01rem solid #9e9e9e;
    border-radius: 0.4rem;

    input {
      float: left;
      font-size: 0.1rem;
      margin: 0.08rem;
    }

    span {
      float: left;
      font-size: 0.25rem;
      padding: 0;
      line-height: 0.2rem;
      padding: 0.1rem 0.08rem;
    }
  }

  .header-right {
    width: 1rem;
    height: 100%;
    text-align: center;
    position: relative;

    .iconfont {
      position: absolute;
      top:0.02rem;
      right   -0.1rem
      font-size: 0.4rem;
      color: #212121;
      
    }

    a {
      span {
        font-size: 0.2rem;
        color #212121
      }
    }
  }
}
</style>
