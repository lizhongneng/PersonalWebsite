<template>
  <div class="header">
    <el-menu :default-active="activeIndex" mode="horizontal">
      <el-menu-item index="1" @click="Collapse()">
        <i class="el-icon-right" v-if="$store.getters.isCollapse"></i>
        <i class="el-icon-back" v-else></i>
      </el-menu-item>
    </el-menu>

    <el-menu :default-active="activeIndex" mode="horizontal">
      <!-- 中英文切换 -->
      <el-submenu index="2" class="border">
        <template slot="title">
          <i class="iconfont icon-zhongyingwen"></i>
          <span>中文</span>
        </template>
        <el-menu-item index="2-1">中文</el-menu-item>
        <el-menu-item index="2-2">English</el-menu-item>
      </el-submenu>
      <!-- 用户信息 -->
      <el-submenu index="3" class="border">
        <template slot="title" >
          <i class="iconfont icon-denglu1"></i>
        </template>
        <el-menu-item index="3-1">
          <i class="iconfont icon-denglu1"></i>
          个人信息
        </el-menu-item>
        <el-menu-item index="3-2">
          <i class="iconfont icon-mingpian"></i>
          联系我
        </el-menu-item>
        <el-menu-item index="3-3">
          <i class="iconfont icon-tuichu"></i>
          退出
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    Collapse: function() {
      this.$store.commit("collapse");
    }
  }
};
</script>
<style lang="less" scoped>
.el-menu {
  border: none;
  .is-active {
    border: none;
    .el-submenu__title {
      border: none;
    }
  }
}

.border /deep/ .el-submenu__title{
  border: none !important;
}

.header {
  display: flex;
  justify-content: space-between;
}
</style>