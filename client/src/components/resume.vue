<template>
  <div id="resume">
    <full-page ref="fullpage" :options="options" id="fullpage" :skip-init="true">
      <div class="section">
        <h1>前端工程师</h1>
        <p>黎仲能 / 4年工作经验 / 大专 / 男 / 28岁</p>
        <div>
          <p>珠海 / 在职</p>
          <span class="iconfont icon-shouji">15626966643</span>
          <span class="iconfont icon-youxiang">
            <el-link href="mailto:125186908@qq.com">125186908@qq.com</el-link>
          </span>
        </div>
        <p>主要技术栈：JavaScript、Vue全家桶、NodeJs、微信小程序</p>
      </div>
      <div class="section">第二页</div>
      <div class="section">第三页</div>
    </full-page>
  </div>
</template>

<script>
export default {
  name: "resume",
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HERE",
        navigation: true,
        navigationPosition: "right",
        // navigationTooltips:['page1','page2','page3'],
        // navigationColor: '#FFF',
        verticalCentered: true,
        resize: true,
        lockAnchors: true,
        anchors: ["page1", "page2", "page3"],
        sectionsColor: ["rgb(27, 188, 155)", "#ff5f45", "#0798ec"]
      }
    };
  },
  mounted() {
    this.componentsReady();
  },
  methods: {
    componentsReady() {
      this.$refs.fullpage.init();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scope>
@import "https://unpkg.com/fullpage.js/dist/fullpage.min.css";
@import "../css/iconfont/iconfont.css";
.section {
  align-items: center;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: #fff;
}
</style>
