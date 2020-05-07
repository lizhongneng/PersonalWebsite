<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="$store.getters.isCollapse">
    <div class="user">
      <el-avatar :size="50" :src="avatarUrl"></el-avatar>
      <span class="name" >{{name}}</span>
    </div>
    <el-menu-item index="1">
      <i class="el-icon-monitor"></i>
      <span slot="title">客户端</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-coin"></i>
      <span slot="title">服务端</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-chat-line-square"></i>
      <span slot="title">评论</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      name: this.$store.state.userName,
      avatarUrl: this.$store.state.avatarUrl,
      navList: []
    };
  },
  methods: {
    Collapse: function() {
      this.$store.dispatch("collapse");
    }
  },
  mounted() {
    // console.log(this.$store);
  }
};
</script>
<style lang="less" scoped>
.user {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  .name {
    // padding-left: 5px;
    font-size: 14px;
    line-height: 40px;
    height: 40px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
  height: 100vh;
}
.el-menu--collapse {
  width: 65px;
  height: 100vh;
}
</style>