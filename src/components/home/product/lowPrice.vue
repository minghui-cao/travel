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
  name: "LowPrice",
  props: ["Traullist"]
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
