<template>
  <div class="card-box">
    <div class="card" v-for="item in cardList" :key="item.id">
      <div class="img" :style="{backgroundImage:'url('+ item.url + ')'}">
        <svg class="icon" :style="item.style" aria-hidden="true">
          <use :xlink:href="item.icon" />
        </svg>
      </div>
      <div class="content">
        <h2 @click="goto(item.href)">{{item.title}}</h2>
        <p>{{item.p1}}</p>
        <p>{{item.p2}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardList: [
        {
          id: 0,
          url:
            "//ftp.qnets.cn/img/1.jpg",
          href: "//www.search.qnets.cn",
          icon: "#icon-search",
          title: "轻.念起始页(仿)",
          p1: "简洁美观的浏览器起始页",
          p2: "全平台适配",
          style: "color:white"
        },
        {
          id: 1,
          url:
            "//ftp.qnets.cn/img/2.jpg",
          href: "//www.mbilibili.qnets.cn",
          icon: "#icon-bilibili",
          title: "哔哩哔哩(仿)移动端",
          p1: "国内知名的视频弹幕网站",
          p2: "仅适配移动端",
          style: "color:#FB7299"
        },
        {
          id: 2,
          url: '//ftp.qnets.cn/img/3.jpg',
          href: "//www.music.qnets.cn",
          icon: "#icon-music",
          title: "网易云音乐(仿)",
          p1: "专注于发现与分享的音乐产品",
          p2: "仅适配移动端",
          style: "color:#E60026"
        },
        {
          id: 3,
          url: '//ftp.qnets.cn/img/4.jpg',
          href: "//www.show.qnets.cn/",
          icon: "#icon-huiyuangou",
          title: "bilibili会员购(仿)",
          p1: "二次元同好的漫展购票平台",
          p2: "仅适配PC",
          style: "color:#73c9e5"
        },
        {
          id: 4,
          url: '//ftp.qnets.cn/img/5.png',
          href: "//www.color.qnets.cn/",
          icon: "#icon-color",
          title: "中国色(仿)",
          p1: "中国传统色, 色名, 色谱大全",
          p2: "全平台适配",
          style: "color:#12a182"
        },
        {
          id: 5,
          url: '//ftp.qnets.cn/img/2.jpg',
          href: "//www.bilibili.qnets.cn",
          icon: "#icon-bilibili",
          title: "哔哩哔哩(仿)PC端",
          p1: "国内知名的视频弹幕网站",
          p2: "仅适配PC端",
          style: "color:#00a1d6"
        },
      ]
    };
  },
  methods: {
    goto(href) {
      window.location.href = href;
    }
  }
};
</script>

<style lang="less" scoped>
.card-box {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
  .card {
    position: relative;
    width: 300px;
    height: 260px;
    background: white;
    padding: 20px 15px;
    margin: 60px 10px;
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    transition: all 0.3s ease-out;
    box-shadow: -8px -8px 16px -10px rgba(149, 165, 182, 1),
      8px 8px 16px -10px rgba(0, 0, 0, 0.15);
    .img {
      position: relative;
      width: 270px;
      height: 270px;
      top: -50px;
      border-radius: 8px;
      background-position: center;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        font-size: 60px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    .content {
      position: relative;
      margin-top: -180px;
      padding: 10px 15px;
      color: #111;
      visibility: hidden;
      opacity: 0;
      transition: all 0.3s ease-out;
      color: rgba(0, 0, 0, 0.65);
      h2 {
        cursor: pointer;
        margin: 10px 0;
      }
      p {
        margin: 5px 0;
      }
    }
  }
  .card:hover {
    height: 420px;
    .content {
      visibility: visible;
      opacity: 1;
      margin-top: -30px;
      transition-delay: 0.3s;
    }
  }
}
</style>