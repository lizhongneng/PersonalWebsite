<template>
  <div class="home">
    <div class="container">
      <!-- 个人简历 -->
      <div class="card">
        <router-link to="/resume">
          <div class="in">
            <div>
              <h2>热爱前端</h2>
              <p>自学前端技术</p>
              <p>技术栈：Vue、JavaSrcipt、H5、CSS3、Node.js、微信小程序等</p>
            </div>
          </div>
        </router-link>
        <div class="face out">
          <h2>个人简历</h2>
        </div>
      </div>
      <!-- 学习笔记 -->
      <div class="card">
        <router-link to="/knowledge">
          <div class="in">
            <div>
              <h2>学习笔记</h2>
              <p>工作日常总结的代码笔记</p>
            </div>
          </div>
        </router-link>
        <div class="face out">
          <h2>学习笔记</h2>
        </div>
      </div>
      <!-- 生活趣事 -->
      <div class="card">
        <router-link to>
          <div class="in">
            <div>
              <h2>旅游日志</h2>
              <p>记录每年旅游的点滴</p>
            </div>
          </div>
        </router-link>
        <div class="face out">
          <h2>旅游日志</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {}
};
</script>
<style lang="less" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #24006b, #f42f8c);
  background-image: linear-gradient(45deg, rgb(36, 0, 107), rgb(244, 47, 140));
}
.container {
  display: grid;
  width: 100%;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  // grid-row: repeat(3, 50px);
  grid-gap: 100px;
  .card {
    position: relative;
    width: 300px;
    height: 400px;
    margin: 20px auto;
    background: #fff;
    -webkit-box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
    a {
      text-decoration: none;
    }
    a:active {
      color: #551a8b;
      text-decoration: underline;
    }
    .face {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      color: #000;
    }
    .in {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    .out {
      transition: 0.5s;
      h2 {
        margin: 0;
        padding: 0;
        font-size: 4em;
        color: #fff;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }
    }

    .out::before {
      content: "";
      height: 100%;
      width: 50%;
      position: absolute;
      left: 0;
      bottom: 0;
      background: hsla(0, 0%, 100%, 0.1);
    }
  }
  .card:first-child {
    .out {
      background: linear-gradient(45deg, #3503ad, #f7308c);
    }
  }
  .card:nth-child(2) {
    .out {
      background: linear-gradient(45deg, #cf0, #09afff);
    }
  }
  .card:nth-child(3) {
    .out {
      background: linear-gradient(45deg, #e91e63, #ffeb3b);
    }
  }
  .card:hover {
    .out {
      height: 60px;
      h2 {
        font-size: 2em;
      }
    }
  }
}
</style>