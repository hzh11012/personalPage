<template>
  <div class="home" @contextmenu.prevent>
    <navs :class="navsFixed?'nvasfixed':''" @toPage="toPage" :content="content"></navs>
    <headers :content="content" :bgImgInfo="bgImgInfo" @xiala="xiala"></headers>
    <mains></mains>
    <works></works>
    <rizhi :bgImgInfo="bgImgInfo"></rizhi>
    <footers></footers>
  </div>
</template>

<script>
import navs from "@/components/Nav.vue";
import headers from "@/components/Header.vue";
import mains from "@/components/About.vue";
import works from "@/components/Work.vue";
import rizhi from "@/components/Rizhi.vue";
import footers from "@/components/Footer.vue";
export default {
  data() {
    return {
      content: {
        hitokoto: "",
        from: "",
        from_who: ""
      },
      bgImgInfo: {
        url: "",
        copyRight: ""
      },
      navsFixed: false
    };
  },
  methods: {
    //获取一言
    async getOne() {
      const { data: data } = await this.$http.get(
        "//v1.hitokoto.cn/?c=i"
      );
      if (data.from_who == null) {
        this.content.from_who = data.from;
        this.content.hitokoto = data.hitokoto;
      } else {
        this.content.hitokoto = data.hitokoto;
        this.content.from_who = data.from_who;
      }
    },
    //获取必应每日壁纸
    async getBgImg() {
      const { data: data } = await this.$http.get(
        "/bingpic/bing?format=js&idx=0&n=1"
      );
      this.bgImgInfo.url = "//cn.bing.com/" + data.images[0].url;
      this.bgImgInfo.copyRight = data.images[0].copyright;
    },
    //点击下拉图标 下拉到指定位置
    xiala() {
      let el = document.getElementsByClassName("main-box")[0];
      this.$nextTick(function() {
        window.scrollTo({ behavior: "smooth", top: el.offsetTop });
      });
    },
    //头部导航点击 下滑到指定位置
    toPage(index) {
      if (index == 0) {
        let el = document.getElementsByClassName("header-box")[0];
        this.$nextTick(function() {
          window.scrollTo({ behavior: "smooth", top: el.offsetTop });
        });
      } else if (index == 1) {
        this.xiala();
      } else if (index == 2) {
        let el = document.getElementsByClassName("works-box")[0];
        this.$nextTick(function() {
          window.scrollTo({ behavior: "smooth", top: el.offsetTop });
        });
      } else {
        let el = document.getElementsByClassName("rizhi-box")[0];
        this.$nextTick(function() {
          window.scrollTo({ behavior: "smooth", top: el.offsetTop });
        });
      }
    },
    //滚动监听
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let heightHeader = document.getElementsByClassName("header-box")[0]
        .offsetHeight;
      if (scrollTop >= heightHeader) {
        this.navsFixed = true;
      } else {
        this.navsFixed = false;
      }
    }
  },
  created() {
    this.getOne();
    this.getBgImg();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {
    headers,
    mains,
    navs,
    works,
    rizhi,
    footers
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="less" scoped>
.nvasfixed {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-out;
}
</style>
