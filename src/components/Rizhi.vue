<template>
  <div class="rizhi-box">
    <h3>小站大事记</h3>
    <p>左右滑动来查看更多</p>
    <div class="log-box">
      <div class="logs" id="logs">
        <span class="content" v-for="(item,index) in logs" :key="index">
          <p class="text1">{{item.time}}</p>
          <p class="text2">{{item.info}}</p>
        </span>
        <span class="content">
          <p class="text3">TO BE</p>
          <p class="text3">CONTINUED...</p>
        </span>
      </div>
      <div class="maskL"></div>
      <div class="maskR"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logs: [
        { id: 0, time: "2017.10.31", info: '注册域名"qnets.cn"' },
        { id: 1, time: "2019.10.25", info: "域名完成ICP备案" },
        { id: 2, time: "2020.6.4", info: "哔哩哔哩(仿)移动端上线" },
        { id: 3, time: "2020.6.7", info: "轻.念起始页上线" },
        { id: 4, time: "2020.6.9", info: "网站上线" },
        { id: 5, time: "2020.6.9", info: "网站加入响应式界面适配移动设备" },
        { id: 6, time: "2020.6.13", info: "轻.念起始页适配移动端" },
        { id: 7, time: "2020.7.15", info: "bilibili会员购(仿)上线" },
        { id: 8, time: "2020.7.17", info: "全部域名升级为Https协议" },
        { id: 9, time: "2020.7.25", info: "中国色(仿)上线" },
        { id: 10, time: "2020.8.13", info: "哔哩哔哩(仿)PC端(Demo)上线,持续更新" },
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);  
  },
  methods: {
    handleScroll() {
      let outDiv = document.getElementById("logs");
      outDiv.onwheel = function(event) {
        event.preventDefault();
        let step = 75;
        if (event.deltaY < 0) {
          this.scrollLeft -= step;
        } else {
          this.scrollLeft += step;
        }
      };
    }
  }
};
</script>

<style lang="less" scoped>
.rizhi-box {
  position: relative;
  z-index: 1;
  padding: 80px 0 100px 0;
  width: 100%;
  user-select: none;
  background-color: #eee;
  text-align: center;
  h3 {
    font-weight: 400;
    font-size: 30px;
    color: #3c3c3c;
    margin: 30px 0;
  }
  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
  }
  .log-box {
    position: relative;
    margin-top: 30px;
    height: 100px;
    margin: 0 10%;
    overflow: hidden;
    margin-top: 20px;
    .logs {
      position: relative;
      max-width: 100%;
      height: 100%;
      white-space: nowrap;
      overflow-y: hidden;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      display: flex;
      align-items: center;
      .content {
        text-align: left;
        padding: 0 80px;
        .text1 {
          color: rgba(0, 0, 0, 0.85) !important;
          font-size: 18px;
          font-weight: 700;
        }
        .text2 {
          font-size: small;
          color: rgba(0, 0, 0, 0.6) !important;
        }
        .text3 {
          font-size: 18px;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.2) !important;
        }
      }
    }
    .maskL {
      left: -1px;
      background-image: linear-gradient(to left, rgba(255, 255, 255, 0), #eee);
    }
    .maskR {
      right: -1px;
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #eee);
    }
    .maskL,
    .maskR {
      position: absolute;
      top: 0;
      width: 10%;
      height: 100%;
    }
  }
}
@media screen and (max-width: 600px) {
  .content {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
}
</style>