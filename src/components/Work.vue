<template>
  <div class="works-box">
    <h3>我的作品</h3>
    <cards></cards>
    <h3>更多作品持续开发中...</h3>
  </div>
</template>


<script>
import cards from "./Card.vue";
export default {
  components: { cards }
};
</script>

<style lang="less" scoped>
.works-box {
  position: relative;
  text-align: center;
  padding: 80px 0 100px 0;
  z-index: 1;
  width: 100%;
  background: #95a5b6;
  user-select: none;
  h3 {
    font-weight: 400;
    font-size: 30px;
    color: #3c3c3c;
    margin: 30px 0;
  }
}
</style>