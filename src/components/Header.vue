<template>
  <header class="header-box bg-img">
    <div class="center-content positionSame" @contextmenu.prevent="copy">
      <h1 id="htkt" :class="content.hitokoto!=''?'op':''">{{content.hitokoto}}</h1>
      <p id="from">--- {{content.from_who}}</p>
    </div>
    <div class="personal-content positionSame">
      <p :class="content.hitokoto!=''?'op':''">轻.念</p>
    </div>
    <div class="shuoming positionSame">
      <p :class="content.hitokoto!=''?'op':''">/* 这里是贺之杭的个人主页 */</p>
    </div>
    <div class="bottom-icon positionSame">
      <svg class="icon" @click="xiala" :class="content.hitokoto!=''?'op':''" aria-hidden="true">
        <use xlink:href="#icon-xiala" />
      </svg>
    </div>
    <div
      class="bg-img"
      :class="bgImgInfo.url!=''?'op':''"
      :style="{backgroundImage:'url('+ bgImgInfo.url +')'}"
    />
  </header>
</template>

<script>
export default {
  props: ["content", "bgImgInfo"],
  methods: {
    //右键复制句子
    copy() {
      let hitokoto = document.getElementById("htkt").innerText;
      let from = document.getElementById("from").innerText;
      let oInput = document.createElement("input");
      oInput.value = hitokoto + from;
      document.body.appendChild(oInput);
      oInput.select();
      document.execCommand("Copy");
      alert("复制成功!\n" + oInput.value);
      document.body.removeChild(oInput);
    },
    //点击下拉图标 下拉到指定位置
    xiala() {
      this.$emit("xiala");
    }
  }
};
</script>

<style lang="less" scoped>
.header-box {
  position: relative;
  z-index: 1;
  height: 100vh;
  .positionSame {
    position: absolute;
    width: 100%;
    color: rgba(255, 255, 255, 0.65);
    text-align: center;
    user-select: none;
    padding: 0 100px;
  }
  .shuoming {
    bottom: 60px;
    padding: 0;
    p {
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }
  }
  .personal-content {
    top: 50%;
    transform: translateY(-170px);
    p {
      opacity: 0;
      transition: opacity 0.3s ease-out;
      font-size: 75px;
    }
  }
  .center-content {
    top: 50%;
    transform: translateY(-50%);
    h1 {
      padding: 20px 0 10px 0;
      font-size: 25px;
      opacity: 0;
      transition: opacity 1s ease-out;
    }
    p {
      padding: 10px 10px 20px 10px;
      font-size: 18px;
      text-align: right;
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }
  }
  .center-content::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    transition: opacity 0.3s ease-out;
    backdrop-filter: blur(30px);
    opacity: 0;
  }
  .center-content:hover::before {
    opacity: 1;
  }
  .center-content:hover {
    p {
      opacity: 1;
    }
  }
  .bg-img {
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0;
    transition: opacity 1s ease-out;
  }
  .bottom-icon {
    bottom: 20px;
    .icon {
      font-size: 26px;
      color: rgba(255, 255, 255, 0.65);
      opacity: 0;
      transition: opacity 0.3s ease-out, color 0.3s ease-out;
      cursor: pointer;
    }
    .icon:hover {
      color: rgba(255, 255, 255, 0.95);
    }
  }
  .op {
    opacity: 1 !important;
  }
}

@media screen and (max-width: 600px) {
  .header-box {
    .center-content {
      padding: 0 20px;
      h1 {
        font-size: 16px;
      }
    }
    .personal-content {
      padding: 0 20px;
      p {
        font-size: 65px;
      }
    }
    .bottom-icon {
      .icon {
        cursor: default;
      }
    }
  }
}
</style>