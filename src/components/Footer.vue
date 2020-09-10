<template>
  <div class="footer-box">
    <div class="footerCol">
      <span>友情链接</span>
      <a target="_blank" href="https://cn.bing.com/">必应</a>
      <a target="_blank" href="https://hitokoto.cn/">一言</a>
      <a target="_blank" href="http://xg.okxiaogua.cn/">淘小呱</a>
    </div>
    <div class="footerCol">
      <span>与我联系</span>
      <a
        target="_blank"
        href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=uMvQz9HMwd34ycmW29fV"
      >我的邮箱</a>
      <a target="_blank" href="https://weibo.com/u/5177506712/">我的微博</a>
      <a target="_blank" href="https://space.bilibili.com/172738743/">我的哔哩哔哩</a>
    </div>
    <div class="footerCol">
      <span>© 2020 轻念</span>
      <a target="_blank" href="http://www.beian.miit.gov.cn/">豫ICP备18036201号</a>
      <a target="_blank" href="https://www.maorx.cn/">仿自maorx.cn</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer-box {
  position: relative;
  text-align: center;
  padding: 50px 0 50px 0;
  z-index: 1;
  width: 100%;
  user-select: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .footerCol {
    padding: 0 50px;
    display: flex;
    margin: 25px 0;
    flex-direction: column;
    span {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.9);
      margin: 8px 0;
    }
    a {
      color: rgba(255, 255, 255, 0.5);
      font-size: 12px;
      margin: 3px 0;
    }
    a:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>