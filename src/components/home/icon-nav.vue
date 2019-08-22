<template>
  <div class="icon-meun">
    <div class="icon-hot">
      <a href="javascript:;" v-for="item in hotlist" :key="item.id">
        <img :src="item.imgUrl" alt class="icon-img" />
      </a>
    </div>
    <div class="icon-nav">
      <a href="javascript:;" v-for="items in navlist" :key="items.id">
        <div class="icon-nav-img">
          <i class="iconfont" v-html="items.font"></i>
        </div>
        <p>{{items.navInfo}}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "IconNav",
  props:{
    hotlist:Array
  },
  data() {    
    return {      
      navlist: [
        {
          id: 1,
          font: "&#xe668;",
          navInfo: "周边游"
        },
        {
          id: 2,
          font: "&#xe602;",
          navInfo: "出境游"
        },
        {
          id: 3,
          font: "&#xe685;",
          navInfo: "国内游"
        },
        {
          id: 4,
          font: "&#xe60c;",
          navInfo: "一日游"
        },
        {
          id: 5,
          font: "&#xe600;",
          navInfo: "签证"
        },
        {
          id: 6,
          font: "&#xe67b;",
          navInfo: "Wi-Fi"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.icon-meun {
  width: 100%;
  
  display: flex;
  flex-direction: column;

  .icon-hot {
    display: flex;
    margin: 0.15rem;
    justify-content: space-between;

    a {
      flex: 1;
      margin: 0 0.05rem;

      .icon-img {
        width: 100%;
      }
    }
  }

  .icon-nav {
    display: flex;
    margin: 0 0.15rem 0.15rem 0.15rem;

    a {
      flex: 1;
      height: auto;
      text-align: center;

      .icon-nav-img {
        width: 0.35rem;
        height: 0.36rem;
        background-image: url('https://s.qunarzz.com/package_mobile/app/home/tag-bg.png');
        background-repeat: no-repeat;
        background-size: 0.35rem 3rem;
        margin: 0 auto;

        i {
          font-size: 0.2rem;
          line-height: 0.36rem;
        }
      }

      p {
        margin-top: 0.05rem;
        font-size: 0.14rem;
        color: #212121;
      }
    }

    & a:nth-child(2) .icon-nav-img {
      background-position-y: -1rem;
    }

    & a:nth-child(1) .icon-nav-img {
      background-position-y: 0;
    }

    & a:nth-child(3) .icon-nav-img {
      background-position-y: -2.5rem;
    }

    & a:nth-child(4) .icon-nav-img {
      background-position-y: -1.5rem;
    }

    & a:nth-child(5) .icon-nav-img {
      background-position-y: -1rem;
    }

    & a:nth-child(6) .icon-nav-img {
      background-position-y: -0.5rem;
    }
  }
}
</style>
