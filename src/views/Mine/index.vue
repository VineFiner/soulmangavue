<!-- 组件说明 -->
<template>
  <div id="main">
    <!-- Header 组件 -->
    <Header title="我的喵喵" />
    <div id="content">
      <!-- 登录组件 -->
      <!-- <Login /> -->
      <router-view />
    </div>
    <!-- Tab 组件 -->
    <TabBar />
  </div>
</template>

<!-- 这里是 JavaScript 代码 -->
<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Login from "@/components/Login";

export default {
  name: "Mine",
  components: {
    Header,
    TabBar,
    Login
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<!-- 这里是样式 -->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
</style>