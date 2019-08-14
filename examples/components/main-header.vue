<style lang="scss" scoped>
.header-wrapper {
  height: 80px;
}

.header {
  height: 80px;
  background-color: #fff;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 100;
  position: relative;

  .container {
    height: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #dcdfe6;
    .nav-item {
      margin: 0;
      float: left;
      list-style: none;
      position: relative;
      cursor: pointer;

      &.nav-algolia-search {
        cursor: default;
      }

      &.lang-item,
      &:last-child {
        cursor: default;
        margin-left: 34px;

        span {
          opacity: 0.8;
        }

        .nav-lang {
          cursor: pointer;
          display: inline-block;
          height: 100%;
          color: #888;

          &:hover {
            color: #409eff;
          }
          &.active {
            font-weight: bold;
            color: #409eff;
          }
        }
      }

      a {
        text-decoration: none;
        color: #1989fa;
        opacity: 0.5;
        display: block;
        padding: 0 22px;

        &.active,
        &:hover {
          opacity: 1;
        }

        &.active::after {
          content: "";
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: calc(50% - 15px);
          width: 30px;
          height: 2px;
          background: #409eff;
        }
      }
    }
  }
}
</style>

<template>
  <div class="header-wrapper">
    <header
      class="header"
      ref="header"
    >
      <div class="container">
        <h1></h1>
        <ul class="nav">
          <li class="nav-item"><a href="">首页</a></li>
          <li class="nav-item"><a href="">组件</a></li>
          <li class="nav-item"><a href="">主题</a></li>
          <li class="nav-item"><a href="">资源</a></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {

}
</script>
