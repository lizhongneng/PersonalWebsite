<template>
  <div id="dowebok">
    <div class="section">
      <h3>第一屏</h3>
      <p>明天再搞</p>
    </div>
    <div class="section">
      <h3>第二屏</h3>
      <p>后天搞</p>
    </div>
    <div class="section">
      <h3>第三屏</h3>
      <p>大后天搞</p>
    </div>
    <div class="section">
      <h3>第四屏</h3>
      <p>慢慢搞</p>
    </div>
  </div>
</template>

<script>
require("../js/jquery.fullPage.min.js");
export default {
  name: "HelloWorld",
  data() {
    return {
    
    };
  },
  mounted() {
    $("#dowebok").fullpage({
      sectionsColor: ["#1bbc9b", "#4BBFC3", "#7BAABE", "#f90"],
      navigation: true
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scope>
@import "../css/jquery.fullPage.css";
.section {
  text-align: center;
  font: 50px "Microsoft Yahei";
  color: #fff;
}
</style>
