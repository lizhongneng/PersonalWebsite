<template>
  <div id="resume">
    <full-page ref="fullpage" :options="options" id="fullpage" :skip-init="true">
      <div class="section">第一页</div>
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
        anchors: ["page1", "page2", "page3"],
        sectionsColor: ["#41b883", "#ff5f45", "#0798ec"]
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
@import 'https://unpkg.com/fullpage.js/dist/fullpage.min.css';
.section {
  align-items: center;
  font: 50px "Microsoft Yahei";
  color: #fff;
}
</style>
