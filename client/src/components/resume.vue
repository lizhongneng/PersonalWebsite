<template>
  <div id="resume">
    <full-page ref="fullpage" :options="options" id="fullpage" :skip-init="true">
      <div class="section">
        <h1>前端工程师</h1>
        <template v-for="(item, index) in list">
          <div :key="index" class="margin">
            <slot v-for="(item1 , index1) in item">
              <span
                :key="index1"
                :class="{iconfont: item1===list[1][0]||item1===list[1][1], 'icon-shouji': item1===list[1][0] , 'icon-youxiang': item1 === list[1][1]}"
              >
                {{item1!==list[1][0] ? item1!==list[1][1]? item1: '' : list[1][0]}}
                <el-link
                  :key="index1"
                  :underline="false"
                  v-if="item1===list[1][1]"
                  :href="'mailto:'+list[1][1]"
                >{{list[1][1]}}</el-link>
              </span>
              <el-divider
                :key="index1"
                direction="vertical"
                v-if="index1!=item.length-1 && index!=list.length-1"
              ></el-divider>
            </slot>
          </div>
        </template>
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
      },
      list: [
        ["珠海", "在职"],
        ["15626966643", "125186908@qq.com"],
        ["黎仲能", "大专", "男", "28岁", "4年工作经验"],
        [
          "主要技术栈：",
          "JavaScript、",
          "Vue全家桶、",
          "NodeJs、",
          "微信小程序"
        ]
      ]
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
@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
.section {
  align-items: center;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: #fff;
  .margin {
    margin: 21.44px 40px;
    /deep/ .el-link--default {
      color: #fff !important;
      font-weight: normal !important;
      font-size: 16px !important;
      vertical-align: top !important;
      :hover {
        color: #606266 !important;
      }
    }
  }
}
</style>
