<template>
  <div>
    <div class="trail">
      <ul>
        <li v-for="item in Traullist" :key="item.id">
           <router-link to="/detail">
          <div>
            <img
              :src="item.URLimg"
              alt
            />
          </div>
          <div class="info">
            <h3>{{item.title}}</h3>
            <p>
              <span>¥</span>
              <span>{{item.price}}</span>
              <span>起/人</span>
            </p>
          </div>
          </router-link>
        </li>
        
       
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "overbalance",
  data() {
    return {
      Traullist: [
        {
          id: 1,
          URLimg:
            "https://imgs.qunarzz.com/vs_ceph_vs_tts/8a19ed34-09c0-4b4a-88de-173158423b2d.jpg_r_240x160x90_38a79e07.jpg",
          title:
            "北京5日游🔥1日包车畅玩5环内景点（门票全含）随走随停ღ赠八达岭长城一日游",
          price: 2280
        },
        {
          id: 2,
          URLimg:
            "https://imgs.qunarzz.com/vc/f6/eb/9d/e6aeafc9fd502ffec6b5e09d88.jpg_92.jpg",
          title:
            "浪漫小资+网红打卡【厦门那海客栈3天游】+VIP接送机+赠送植物园门票",
          price: 2018
        },
        {
          id: 3,
          URLimg:
            "https://imgs.qunarzz.com/p/tts9/1804/85/0c4a69eb30fe2502.jpg_r_240x160x90_623206c2.jpg",
          title:
            "暑期精选！三亚亚特兰蒂斯酒店+三亚湾红树林度假世界+畅玩水世界水族馆+接送机",
          price: 880
        },
        {
          id: 4,
          URLimg:
            "https://imgs.qunarzz.com/vs_ceph_vs_tts/b60cd73e-eb71-415f-88b9-11909276bbde.jpg_r_240x160x90_42f9c8e8.jpg",
          title:
            "暑期专享+纯玩五星巴厘5/6日游+双岛出海+海边国五酒店+水上项目免费玩",
          price: 1119
        },
        {
          id: 5,
          URLimg:
            "https://imgs.qunarzz.com/vs_ceph_vs_tts/e03f1a62-8bc7-4b1c-bf02-1d9bc06cb369.jpg_r_240x160x90_f1130680.jpg",
          title:
            "行摄新疆✔0购物0自费✔南北疆大环线一网打尽✔一价全含✔深度纯玩双飞12日游",
          price: 6720
        },
        {
          id: 6,
          URLimg:
            "https://imgs.qunarzz.com/p/tts1/1803/ca/56b43ed50b651702.jpg_r_240x160x90_0d76ff47.jpg",
          title:
            "暑期钜惠🔥深度大环线8日☞魅力青海+天镜茶卡+仙境翡翠湖丨莫高窟+七彩丹霞",
          price: 4600
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.trail {
  padding: 0.1rem 0.15rem;

  li {
    width: 48%;
    float: left;
    border-bottom: 0.2rem;
    margin-bottom: 0.1rem;
    border: 0.01rem solid #eee;

    img {
      width: 100%;
      height: 1.14rem;
    }

    .info {
      padding: 0.05rem 0.1rem 0.11rem;

      h3 {
        font-size: 0.14rem;
        line-height: 0.2rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }

      p {
        color: #ff8300;
        font-size: 0.17rem;
        font-weight: 700;
        line-height: 0.25rem;
      }
    }
  }

  ul li:nth-child(2n+1) {
    margin-right: 0.14rem;
  }
}
</style>
