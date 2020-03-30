<template>
  <el-container class="flex">
    <el-header>Header</el-header>
    <el-container class="middle">
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  align-items: center;
  justify-content: center;
}

.el-main {
  display: flex;
  flex: 1;
  background-color: #e9eef3;
  color: #333;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.flex {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.middle {
  display: flex;
  flex: 1;
}
</style>