<template>
  <div>
    <div class="trail">
      <ul>
        <li v-for="item in Traullist" :key="item.id">
          <router-link to="/detail">
            <div>
              <img :src="item.URLimg" alt />
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
  name: "Trail",
  data() {
    return {
      Traullist: [
        {
          id: 1,
          URLimg:
            "https://imgs.qunarzz.com/p/tts9/1809/c3/3a617af102474702.jpg_r_240x160x90_2d26a6e7.jpg",
          title:
            "店长推荐🔥0自费🔥普吉岛6日/泳池别墅酒店+畅玩五岛+大堡礁赠浮潜+按摩",
          price: 2280
        },
        {
          id: 2,
          URLimg:
            "https://imgs.qunarzz.com/p/tts6/1803/a6/5f63b0bc2bccba02.jpg_r_240x160x90_0058be3b.jpg",
          title:
            "一价全含0自费享海景房|5A蜈支洲岛+南山文化苑|赠千古情表演 海南三亚6天",
          price: 2018
        },
        {
          id: 3,
          URLimg:
            "https://imgs.qunarzz.com/vc/40/e3/5d/59927e2debddd8706d7848867e.jpg_92.jpg",
          title:
            "武汉100%纯玩👍豪华游船🔥三峡人家+两坝一峡+清江画廊三日游！动车往返",
          price: 880
        },
        {
          id: 4,
          URLimg:
            "https://imgs.qunarzz.com/vs_ceph_vs_tts/b60cd73e-eb71-415f-88b9-11909276bbde.jpg_r_240x160x90_42f9c8e8.jpg",
          title:
            "限时钜惠一价全含【张家界天门山国家森林公园+玻璃栈道+凤凰古城纯玩3日游】",
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
        color: #000;
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
