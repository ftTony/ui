<style lang="scss" scoped>
.ui-component-aside {
  width: 220px;
  position: fixed;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
.ui-component-aside-wrapper {
  height: 100%;
  border-right: 1px solid #e8e8e8;
}
.ui-component-aside .logo {
  width: 120px;
  margin-top: 30px;
  margin-left: 40px;
  margin-bottom: 10px;
}
.ui-component-aside h2 {
  font-size: 24px;
  padding-left: 40px;
}
.ui-component-aside li {
  font-size: 14px;
  list-style: none;
  a {
    height: 50px;
    line-height: 50px;
    color: #212430;
    display: inline-block;
    width: 100%;
  }
  a.active {
    color: #1a92fd;
    border-right: 1px solid #1a92fd;
  }
}
</style>
<template>
  <aside class="ui-component-aside">
    <div class="ui-component-aside-wrapper">
      <a href="/home"><img
          class="logo"
          src="@/assets/img/xdd_logo.png"
          alt=""
        >
      </a>
      <h2>基础组件</h2>
      <ul>
        <li>
          <router-link
            active-class="active"
            :to="{ path: '/component/layout' }"
          >Frame 布局框架</router-link>
        </li>
        <li>
          <router-link
            active-class="active"
            :to="{path:'/component/color'}"
          >
            Color 颜色
          </router-link>
        </li>
        <li>
          <router-link
            active-class="active"
            :to="{path:'/component/typography'}"
          >Typeface 字体</router-link>
        </li>
        <li>
          <router-link
            active-class="active"
            :to="{path:'/component/border'}"
          >
            Border 边框
          </router-link>
        </li>
        <li>
          <router-link
            active-class="active"
            :to="{path:'/component/icon'}"
          >Icon 图标</router-link>
        </li>
        <li>
          <router-link
            active-class="active"
            :to="{path:'/component/button'}"
          >Button 按钮</router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
export default {

}
</script>