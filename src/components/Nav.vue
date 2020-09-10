<template>
  <div class="nav-box" :class="showNavItems?'show':''">
    <div class="icon-box" :class="content.hitokoto!=''?'op':''">
      <i class="logofont icon-Q"></i>
    </div>
    <div class="btn-box" :class="content.hitokoto!=''?'op':''">
      <span @click="toPage(0)">首页</span>
      <span @click="toPage(1)">关于</span>
      <span @click="toPage(2)">作品</span>
      <span @click="toPage(3)">日志</span>
    </div>
    <div class="btn-menu" :class="content.hitokoto!=''?'op':''" @click="menu">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu" />
      </svg>
    </div>
    <div class="nav-items" :class="content.hitokoto!=''?'op':''">
      <span @click="toPage(0)">首页</span>
      <span @click="toPage(1)">关于</span>
      <span @click="toPage(2)">作品</span>
      <span @click="toPage(3)">日志</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {
      showNavItems: false
    };
  },
  methods: {
    toPage(index) {
      this.$emit("toPage", index);
    },
    menu() {
      this.showNavItems = !this.showNavItems;
    }
  }
};
</script>

<style lang="less" scoped>
.nav-box {
  position: absolute;
  width: 100%;
  height: 100px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.5);
  user-select: none;
  transition: all 0.3s ease-out;
  .icon-box {
    height: 60px;
    margin-left: 200px;
    opacity: 0;
    transition: all 0.3s ease-out;
    .logofont {
      font-family: Lovers Quarrel !important;
      font-size: 100px;
      line-height: 55px;
      margin-bottom: 10px;
      transition: all 0.3s ease-out;
    }
  }
  .btn-box {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 180px;
    opacity: 0;
    transition: all 0.3s ease-out;
    span {
      cursor: pointer;
      transition: color 0.3s ease-out;
    }
    span:hover {
      color: rgba(255, 255, 255, 0.95);
    }
  }
  .btn-menu {
    display: none;
  }
  .nav-items {
    display: none;
  }
}
.op {
  opacity: 1 !important;
}
@media screen and (max-width: 1200px) {
  .nav-box {
    .icon-box {
      margin-left: 100px;
    }
    .btn-box {
      margin-right: 80px;
    }
  }
}
@media screen and (max-width: 768px) {
  .nav-box {
    height: 70px;
    display: flex;
    align-items: initial;
    overflow: hidden;
    .icon-box {
      display: flex;
      position: absolute;
      top: 3px;
      margin-left: 20px;
      .logofont {
        font-size: 70px;
      }
    }
    .btn-box {
      display: none;
    }
    .btn-menu {
      position: absolute;
      right: 20px;
      font-size: 26px;
      opacity: 0;
      display: block;
      top: 17.5px;
      transition: all 0.3s ease-out;
    }
    .btn-menu:active {
      color: rgba(255, 255, 255, 0.95);
    }
    .nav-items {
      position: relative;
      bottom: -70px;
      display: flex;
      width: 100%;
      height: 60px;
      opacity: 0;
      align-items: center;
      justify-content: space-around;
      transition: all 0.3s ease-out;
    }
  }
  .show {
    height: 130px;
  }
}
</style>