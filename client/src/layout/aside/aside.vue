<template>
  <div class="aside">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        :collapse="$store.getters.isCollapse"
        :collapse-transition="true"
      >
        <div class="user">
          <el-avatar
            :size="50"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>
          <span>小黎</span>
        </div>
        <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
        </el-submenu>-->
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    Collapse: function() {
      this.$store.dispatch("collapse");
    }
  }
};
</script>
<style lang="less" scoped>
.user {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  span {
    font-size: 14px;
    line-height: 40px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}
.el-menu--collapse {
  width: 65px;
  height: 100vh;
}
</style>