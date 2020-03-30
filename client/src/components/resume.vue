<template>
  <div id="resume">
    <full-page ref="fullpage" :options="options" id="fullpage" :skip-init="true">
      <div class="section">
        <h1 class="page-title">前端工程师</h1>
        <template v-for="(item, index) in list">
          <div :key="index" :class="'margin project'+(index+1)">
            <slot v-for="(item1 , index1) in item">
              <span
                :key="index1"
                :class="{iconfont: item1===list[1][0]||item1===list[1][1], 'icon-shouji': item1===list[1][0] , 'icon-youxiang': item1 === list[1][1]}"
              >
                {{item1!==list[1][0] ? item1!==list[1][1]? item1: '' : list[1][0]}}
                <el-link
                  class="link"
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
      <div class="section">
        <h1 class="page-title">工作经历</h1>
        <div :class="'project project'+(index+1)" v-for="(item,index) in companylist" :key="index">
          <p v-for="(item1,index1) in item" :key="index1">{{item1}}</p>
        </div>
      </div>
      <div class="section">
        <h1 class="page-title">主要项目</h1>
        <el-carousel :interval="6000" type="card" height="300px" class="carousel project1">
          <el-carousel-item v-for="(item,index) in carousellist" :key="index" class="item">
            <div class="item">
              <el-row v-for="(item1, index1) in item" :key="index1">
                <el-col :span="4">
                  <div>{{item1.name}}</div>
                </el-col>
                <el-col :span="20">
                  <div>{{item1.des}}</div>
                </el-col>
              </el-row>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
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
        sectionsColor: [
          "rgb(27, 188, 155)",
          "rgb(123, 170, 190)",
          "rgb(75, 191, 195)"
        ]
      },
      list: [
        ["珠海", "在职"],
        ["15626966643", "125186908@qq.com"],
        ["黎仲能", "大专", "男", "28岁", "4年工作经验"],
        [
          "主要技术栈：",
          "JavaScript、",
          "Vue全家桶、",
          "Node.js、",
          "微信小程序"
        ]
      ],
      companylist: [
        [
          "公司名称：珠海市魅族科技有限公司",
          "职位名称：测试工程师",
          "工作时间：2014年2月-2018年12月",
          "工作描述：负责测试及自动化脚本编写"
        ],
        [
          "公司名称：北京汉克时代有限公司（工行外包）",
          "职位名称：前端开发工程师",
          "工作时间：2019年1月-至今",
          "工作描述：负责前后端开发"
        ]
      ],
      carousellist: [
        [
          { name: "项 目：", des: "用印平台" },
          {
            name: "项目描述：",
            des:
              "该项目主要是银行柜员使用的用印业务；主要负责项目重构，将现有JSP写的前端页面换成vue开发；根据项目实际需求，二次封装Element-UI组件，使用 Vue+Webpack 构建项目，实现模块化，组件化开发方式"
          },
          { name: "技 术 栈：", des: "Vue全家桶，Element-UI，JavaScript" }
        ],
        [
          { name: "项 目：", des: "跨境支付系统" },
          {
            name: "项目描述：",
            des:
              "该项目主要是银行柜员使用的，操作外币交易等；主要负责项目中新功能开发，Element-UI二次封装、旧代码的优化以及单元测试"
          },
          {
            name: "技 术 栈：",
            des: "Vue全家桶，Element-UI，JavaScript，Vue-Test-Utils+Mocha+Sinon"
          }
        ],
        [
          { name: "项 目：", des: "GTP接口管理平台" },
          {
            name: "项目描述：",
            des:
              "该项目类似于postman接口调用的工具，在平台中设置接口和参数进行批量化调用以及统计数据；主要负责带领一名实习生开发该平台的后端接口"
          },
          { name: "技 术 栈：", des: "Node.js, Mysql, Express" }
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
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: #fff;
  h1 {
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    top: 150px;
    position: relative;
    opacity: 0;
  }
  .margin {
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    top: 150px;
    position: relative;
    opacity: 0;
    margin: 21.44px 40px;
    .link {
      color: #fff;
      font-weight: normal;
      font-size: 16px;
      vertical-align: top;
      :hover {
        color: #606266;
      }
    }
  }
}
.carousel {
  width: 80%;
  margin: 50px auto;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  opacity: 0;
  top: 150px;
  .el-carousel__item {
    background-color: #4682b4;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    // align-items: center;
    margin: auto 20px;
  }
  /deep/ .el-row {
    text-align: left;
    margin: 10px 5px;
    div {
      line-height: 40px;
    }
  }
}

// @keyframes title-ani {
//   0% {
//     transform: scale(1); /*开始为原始大小*/
//   }
//   50% {
//     transform: scale(1.5);
//   }
//   100% {
//     transform: scale(1);
//   }
// }

.project {
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  top: 150px;
  position: relative;
  opacity: 0;
  width: 30%;
  // height: 20%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 10px 0;
  padding: 10px 20px;
  text-align: left;
  border-radius: 10px;
  margin: 50px auto;
}
.project:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px #ddd;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    top: 150px;
  } /*初始状态 透明度为0*/
  100% {
    opacity: 1;
    top: 0;
  } /*结束状态 透明度为1*/
}
.active .page-title {
  // animation: title-ani 2s;
  // animation-direction: alternate; /*轮流反向播放动画。*/
  // animation-timing-function: ease-in-out; /*动画的速度曲线*/
  // /* Safari 和 Chrome */
  // -webkit-animation: title-ani 2s;
  // -webkit-animation-direction: alternate; /*轮流反向播放动画。*/
  // -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
  animation: fade-in ease 1.3s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  /* Safari */
  -webkit-animation: fade-in ease 1.3s;
  -webkit-animation-delay: 0.5s;
  -webkit-animation-fill-mode: forwards;
}
.active .project1 {
  animation: fade-in ease 1.3s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
    /* Safari */
  -webkit-animation: fade-in ease 1.3s;
  -webkit-animation-delay: 1s;
  -webkit-animation-fill-mode: forwards;
}
.active .project2 {
  animation: fade-in ease 1.3s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
    /* Safari */
  -webkit-animation: fade-in ease 1.3s;
  -webkit-animation-delay: 1.5s;
  -webkit-animation-fill-mode: forwards;
}
.active .project3 {
  animation: fade-in ease 1.3s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
    /* Safari */
  -webkit-animation: fade-in ease 1.3s;
  -webkit-animation-delay: 2s;
  -webkit-animation-fill-mode: forwards;
}
.active .project4 {
  animation: fade-in ease 1.3s;
  animation-delay: 2.5s;
  animation-fill-mode: forwards;
    /* Safari */
  -webkit-animation: fade-in ease 1.3s;
  -webkit-animation-delay: 2.5s;
  -webkit-animation-fill-mode: forwards;
}
</style>
