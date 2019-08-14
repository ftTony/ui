<style lang="scss" scoped>
.border-wrapper {
  margin: 50px 320px 100px 272px;
  .border-title {
    font-size: 24px;
  }
  .border-desc {
    font-size: 12px;
    color: #807e7e;
  }
  h3 {
    margin: 55px 0 20px;
    font-size: 16px;
    color: #212430;
  }
  .sub-desc {
    font-size: 12px;
    color: #807e7e;
    margin-bottom: 20px;
  }
  .demo-border {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
    .line {
      width: 60%;
      div {
        width: 100%;
        height: 0;
      }
    }
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
  .border-demo-box,
  .border-radius-demo,
  .box-shadow-demo {
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
    .demo-box-item,
    .radius-demo-item,
    .shadow-demo-item {
      width: 280px;
      margin-right: 50px;
      margin-bottom: 50px;
      height: 140px;
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      p {
        line-height: 0px;
      }
      p:first-child {
        font-size: 20px;
        color: #212430;
      }
      p:last-child {
        font-size: 12px;
        color: #807e7e;
      }
    }
    .demo-box-item:nth-child(1) {
      border: 1px solid #d5d5d5;
    }
    .demo-box-item:nth-child(2) {
      border: 1px solid #e8e8e8;
    }
    .demo-box-item:nth-child(3) {
      border: 1px solid #1a92fd;
    }
    .demo-box-item:nth-child(4) {
      border: 1px dashed #d5d5d5;
    }
    .demo-box-item:nth-child(5) {
      border: 1px dashed #e8e8e8;
    }
    .demo-box-item:nth-child(6) {
      border: 1px dashed #1a92fd;
    }
    .radius-demo-item,
    .shadow-demo-item {
      border: 1px solid #d5d5d5;
      height: 120px;
    }
    .radius-demo-item:nth-child(2) {
      border-radius: 2px;
    }
    .radius-demo-item:nth-child(3) {
      border-radius: 2px;
    }
    .radius-demo-item:nth-child(4) {
      border-radius: 60px;
    }
    .shadow-demo-item {
      border-radius: 4px;
    }
    .radius-demo-item:last-child,
    .shadow-demo-item:last-child {
      margin-right: 0;
    }
    .shadow-demo-item:first-child {
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
    }
    .shadow-demo-item:nth-child(2) {
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    }
    .shadow-demo-item:nth-child(3) {
      box-shadow: 0 0 6px 0 rgba(26, 146, 253, 0.2);
    }
    .shadow-demo-item:nth-child(4) {
      box-shadow: 0 0 6px 0 rgba(26, 146, 253, 0.1);
    }
  }
}
</style>
<template>
  <div class="border-wrapper">
    <h2 class="border-title">Border 边框</h2>
    <p class="border-desc">我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。</p>
    <h3>分割线</h3>
    <p class="sub-desc">我们设计了一下几种边框以及分割线样式，以供选择。</p>
    <table class="demo-border">
      <tbody>
        <tr>
          <td class="text">名称</td>
          <td class="text">粗细大小</td>
          <td class="text">颜色</td>
          <td class="line">举例</td>
        </tr>
        <tr>
          <td class="text">实线</td>
          <td class="text">1px</td>
          <td class="text">#d5d5d5</td>
          <td class="line">
            <div style="border-top: 1px solid #d5d5d5;"></div>
          </td>
        </tr>
        <tr>
          <td class="text">实线</td>
          <td class="text">2px</td>
          <td class="text">#e8e8e8</td>
          <td class="line">
            <div style="border-top: 2px solid #e8e8e8;"></div>
          </td>
        </tr>
        <tr>
          <td class="text">虚线</td>
          <td class="text">1px</td>
          <td class="text">#d5d5d5</td>
          <td class="line">
            <div style="border-top: 1px dashed #d5d5d5;"></div>
          </td>
        </tr>
        <tr>
          <td class="text">虚线</td>
          <td class="text">2px</td>
          <td class="text">#e8e8e8</td>
          <td class="line">
            <div style="border-top: 1px dashed #d5d5d5;"></div>
          </td>
        </tr>
      </tbody>
    </table>
    <h3>边框</h3>
    <p class="sub-desc">我们设计了一下几种边框以及分割线样式，以供选择。</p>
    <div class="border-demo-box">
      <div class="demo-box-item">
        <p>实线</p>
        <p>颜色值：#D5D5D5</p>
      </div>
      <div class="demo-box-item">
        <p>实线</p>
        <p>颜色值：#E8E8E8</p>
      </div>
      <div class="demo-box-item">
        <p>实线</p>
        <p>颜色值：#1A92FD</p>
      </div>
      <div class="demo-box-item">
        <p>虚线</p>
        <p>颜色值：#D5D5D5</p>
      </div>
      <div class="demo-box-item">
        <p>虚线</p>
        <p>颜色值：#E8E8E8</p>
      </div>
      <div class="demo-box-item">
        <p>实线</p>
        <p>颜色值：#1A92FD</p>
      </div>
    </div>
    <h3>圆角</h3>
    <p class="sub-desc">我们设计了一下几种圆角样式，以供选择。</p>
    <div class="border-radius-demo">
      <div class="radius-demo-item">
        <p>无圆角</p>
        <p>圆角值：0px</p>
      </div>
      <div class="radius-demo-item">
        <p>小圆角</p>
        <p>圆角值：2px</p>
      </div>
      <div class="radius-demo-item">
        <p>大圆角</p>
        <p>圆角值：4px</p>
      </div>
      <div class="radius-demo-item">
        <p>无圆角</p>
        <p>圆角值：高度/2=px</p>
      </div>
    </div>
    <h3>投影</h3>
    <p class="sub-desc">我们提供了一下几种投影样式，以供选择。</p>
    <div class="box-shadow-demo">
      <div class="shadow-demo-item">
        <p>常规投影</p>
        <p>投影值：6px 颜色值：#ffffff 20%透明</p>
      </div>
      <div class="shadow-demo-item">
        <p>常规投影</p>
        <p>投影值：6px 颜色值：#ffffff 10%透明</p>
      </div>
      <div class="shadow-demo-item">
        <p>常规投影</p>
        <p>投影值：6px 颜色值：#1A92FD 20%透明</p>
      </div>
      <div class="shadow-demo-item">
        <p>常规投影</p>
        <p>投影值：6px 颜色值：#1A92FD 10%透明</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>