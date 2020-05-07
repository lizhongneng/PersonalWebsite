<template>
  <el-container class="flex">
    <v-aside></v-aside>
    <el-container class="middle">
      <v-header></v-header>
      <el-main>Main</el-main>
      <v-footer>Footer</v-footer>
    </el-container>
  </el-container>
</template>
<script>
import vHeader from "@/layout/header/header.vue";
import vAside from "@/layout/aside/aside.vue";
import vFooter from "@/layout/footer/footer.vue";
export default {
  components: { vHeader, vAside, vFooter },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.div {
  height: 100%;
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
  border-top: solid 1px #e6e6e6;
  border-bottom: solid 1px #e6e6e6;
}
.flex {
  display: flex;
  height: 100%;
  // flex-direction: column;
}
.middle {
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>