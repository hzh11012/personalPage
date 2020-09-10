<template>
  <main class="main-box">
    <h3>关于我</h3>
    <div class="tag-box">
      <div class="tag">
        <span>90后</span>
      </div>
      <div class="tag">
        <span>ZZU</span>
      </div>
      <div class="tag">
        <span>ACG</span>
      </div>
      <div class="tag">
        <span>理科生</span>
      </div>
    </div>
    <div class="content">
      <p>我是贺之杭。</p>
      <p>一名现役熬夜选手、ACG爱好者</p>
      <p>某知名视频站的不知名up主</p>
      <p>强迫症、拖延症、懒癌晚期</p>
      <p>经历了魔鬼的高中三年</p>
      <p>现就读于郑州大学软件工程系</p>
      <p>热衷钻研计算机</p>
      <p>对FPS、ACG、MOBA深感兴趣</p>
      <p>白日梦想：</p>
      <p>和喜欢的人环游世界</p>
      <p>请多指教！</p>
    </div>
    <!-- <div class="bg-img" :style="{backgroundImage:'url('+ url +')'}" /> -->
  </main>
</template>

<script>
export default {
  // data() {
  //   return {
  //     url: require("@/assets/1.jpg")
  //   };
  // }
};
</script>

<style lang="less" scoped>
.main-box {
  position: relative;
  text-align: center;
  padding: 110px 0;
  z-index: 1;
  width: 100%;
  background: #eee;
  user-select: none;
  h3 {
    font-weight: 400;
    font-size: 30px;
    color: #3c3c3c;
  }
  .tag-box {
    position: relative;
    margin-top: 60px;
    width: 100%;
    font-size: small;
    display: flex;
    justify-content: center;
    .tag {
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.06);
      height: 30px;
      width: 60px;
      border-radius: 10px;
      background: linear-gradient(
        135deg,
        rgba(230, 230, 230, 1) 0%,
        rgba(246, 246, 246, 1) 100%
      );
      box-shadow: -4px -4px 10px -18px rgba(255, 255, 255, 1),
        4px 4px 10px -8px rgba(0, 0, 0, 0.3);
      margin-left: 10px;
      margin-right: 10px;
      color: #646464;
      transition: box-shadow 0.3s;
      -webkit-transition: box-shadow 0.3s;
    }
    .tag:hover {
      box-shadow: -4px -4px 10px -18px rgba(255, 255, 255, 1) inset,
        4px 4px 10px -8px rgba(0, 0, 0, 0.3) inset;
    }
  }
  .content {
    position: relative;
    margin-top: 35px;
    width: 100%;
    font-size: 14px;
    color: #5a5a5a;
    p {
      margin: 14px 0;
    }
  }
  // .bg-img {
  //   position: absolute;
  //   display: block;
  //   top: 0;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  //   z-index: -1;
  //   background-repeat: no-repeat;
  //   background-position: center center;
  //   background-size: cover;
  //   background-attachment: fixed;
  //   // opacity: 0;
  //   // transition: opacity 1s ease-out;
  // }
}
</style>