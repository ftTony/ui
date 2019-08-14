<style lang="scss" scoped>
.typography-wrapper {
  margin: 50px 320px 100px 272px;
  .typography-title {
    font-size: 24px;
  }
  .typography-desc {
    font-size: 12px;
    color: #807e7e;
  }
  h3 {
    margin: 55px 0 20px;
    font-size: 16px;
    color: #212430;
  }
  .demo-typo-size {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }
  .sub-desc {
    font-size: 12px;
    color: #807e7e;
    margin-bottom: 20px;
  }
  table tr:first-child {
    background: #f6f6f6;
  }
  table td,
  table th {
    border-bottom: 1px solid #dcdfe6;
    padding: 20px;
    max-width: 250px;
  }
  table td {
    color: #606266;
  }
  table td:first-child {
    padding-left: 10px;
  }
  .mac-typo,
  .win-typo {
    display: flex;
    .mac-item,
    .win-item {
      width: 280px;
      height: 140px;
      line-height: 140px;
      text-align: center;
      margin-right: 50px;
      font-size: 48px;
      color: #212430;
      border: 1px solid #d5d5d5;
    }
    .mac-item:first-child,
    .win-item:first-child {
      border: 1px solid #1a92fd;
      color: #1a92fd;
    }
  }
}
</style>

<template>
  <div class="typography-wrapper">
    <h2 class="typography-title">Typeface 字体</h2>
    <p class="typography-desc">我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。</p>
    <h3>Macos苹果系统_平方</h3>
    <p class="sub-desc">
      英文：Pingfang SC 规格：常规 粗体
    </p>
    <div class="mac-typo">
      <div class="mac-item">科脉有数</div>
      <div class="mac-item">AaBbCc</div>
      <div class="mac-item">123456</div>
    </div>
    <h3>Windows微软系统_微软雅黑</h3>
    <p class="sub-desc">英文：Microsoft YaHei 规格：常规 粗体</p>
    <div class="win-typo">
      <div class="win-item">科脉有数</div>
      <div class="win-item">AaBbCc</div>
      <div class="win-item">123456</div>
    </div>
    <h3>行高</h3>
    <img src="@/assets/img/xdd_line_height.png">
    <h3>字号</h3>
    <table class="demo-typo-size">
      <tbody>
        <tr>
          <td>层级</td>
          <td>字体大小</td>
          <td class="color-dark-light">举例</td>
        </tr>
        <tr style="font-size: 32px;">
          <td>大数字</td>
          <td class="color-dark-light">Regular 32px</td>
          <td>我是字体 ABCDEFGH 0123456789</td>
        </tr>
        <tr style="font-size: 24px;">
          <td>数字</td>
          <td class="color-dark-light">Regular 24px</td>
          <td>我是字体 ABCDEFGH 0123456789</td>
        </tr>
        <tr style="font-size: 20px;">
          <td>主标题</td>
          <td class="color-dark-light">Regular 20px</td>
          <td>我是字体 ABCDEFGH 0123456789</td>
        </tr>
        <tr style="font-size: 16px;">
          <td>标题</td>
          <td class="color-dark-light">Regular 16px</td>
          <td>我是字体 ABCDEFGH 0123456789</td>
        </tr>
        <tr style="font-size: 14px;">
          <td>正文</td>
          <td class="color-dark-light">Regular 14px</td>
          <td>我是字体 ABCDEFGH 0123456789</td>
        </tr>
        <tr style="font-size: 12px;">
          <td>辅助文字</td>
          <td class="color-dark-light">Regular 12px</td>
          <td>我是字体 ABCDEFGH 0123456789</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

}
</script>