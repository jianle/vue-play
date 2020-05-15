<template>
  <el-container class='footer-push'>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" text-color='#FFF' background-color="rgb(64, 158, 255)" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <slot></slot>
    </el-main>
    <el-footer>
      <div class="footer">
        <div class="wrapper no-pad">
          <ul class="footer-left">
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="https://help.github.com/articles/github-privacy-policy/">Privacy</a></li>
            <li><a href="https://github.com/atom/atom/blob/master/CODE_OF_CONDUCT.md">Code of Conduct</a></li>
            <li><a href="/releases">Releases</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <div class="footer-right">
            <a href="https://github.com"><span class="octicon octicon-code"></span> with <span class="octicon octicon-heart"></span> by <span class="octicon octicon-logo-github"></span></a>
          </div>
        </div>
      </div>
    </el-footer>
  </el-container>
</template>

<style>
  .el-header, .el-footer{
    background-color: rgb(64, 158, 255);
  }

  body {
    margin: 0px;
  }

  body > .el-container {
    margin-bottom: 0px;
  }

  html, body {
    height: 100%;
  }

  .footer-push {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .footer {
    line-height: 60px;
    text-align: center;
  }
  .footer .footer-left {
    float: left;
    margin: 0;
    padding: 0;
  }
  .footer .footer-left li {
    display: inline-block;
    list-style-type: none;
    margin-right: 15px;
  }
  .footer a {
    color: #574c4f;
    text-decoration: none;
  }
</style>

<script>
  import routes from '../routes'
  export default {
    props: {
      href: {
        type:String,
        required: true
      }
    },
    computed: {
      isActive () {
        return this.href === this.$root.currentRoute
      }
    },
    methods: {
      go (event) {
        event.preventDefault()
        this.$root.currentRoute = this.href
        window.history.pushState(
          null,
          routes[this.href],
          this.href
        )
      }
    }
  }
</script>
