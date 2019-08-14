<style lang="scss" scoped>
.color-wrapper {
  margin: 50px 320px 100px 272px;
  .color-title {
    font-size: 24px;
  }
  .color-desc {
    font-size: 12px;
    color: #807e7e;
  }
  h3 {
    font-size: 16px;
    color: #212430;
  }
  .color-box {
    display: flex;
    margin-bottom: 50px;
    .color-main {
      width: 400px;
      margin-right: 90px;
      .bg-blue-sub-item {
        line-height: 60px;
        color: #ffffff;
        padding-left: 20px;
        background-color: #1a92fd;
      }
      .bg-blue-sub-item:first-child {
        line-height: 160px;
      }
      .bg-blue-sub-item:nth-child(2) {
        opacity: 0.7;
      }
      .bg-blue-sub-item:nth-child(3) {
        opacity: 0.5;
      }
      .bg-blue-sub-item:nth-child(4) {
        opacity: 0.3;
      }
      .bg-blue-sub-item:nth-child(5) {
        opacity: 0.1;
      }
    }
    .color-subsidiary {
      .demo2-color-box {
        display: flex;
        .bg-red-sub,
        .bg-orange-sub,
        .bg-green-sub {
          width: 300px;
          margin-right: 20px;
        }
        .bg-red-sub-item,
        .bg-orange-sub-item,
        .bg-green-sub-item {
          background-color: #ed2525;
          padding-left: 20px;
          line-height: 60px;
          color: #ffffff;
        }
        .bg-red-sub-item:first-child,
        .bg-orange-sub-item:first-child,
        .bg-green-sub-item:first-child {
          line-height: 160px;
        }
        .bg-red-sub-item:nth-child(2),
        .bg-orange-sub-item:nth-child(2),
        .bg-green-sub-item:nth-child(2) {
          opacity: 0.7;
        }
        .bg-red-sub-item:nth-child(3),
        .bg-orange-sub-item:nth-child(3),
        .bg-green-sub-item:nth-child(3) {
          opacity: 0.5;
        }
        .bg-red-sub-item:nth-child(4),
        .bg-orange-sub-item:nth-child(4),
        .bg-green-sub-item:nth-child(4) {
          opacity: 0.3;
        }
        .bg-red-sub-item:nth-child(5),
        .bg-orange-sub-item:nth-child(5),
        .bg-green-sub-item:nth-child(5) {
          opacity: 0.1;
        }
        .bg-orange-sub-item {
          background-color: #f08300;
        }
        .bg-green-sub-item {
          background-color: #2fc25b;
        }
      }
    }
  }
  .demo3-color-box {
    display: flex;
    flex-wrap: wrap;
    .box-item {
      width: 200px;
      height: 120px;
      padding-left: 20px;
      margin-right: 20px;
      margin-top: 20px;
      color: #ffffff;
      p:first-child {
        font-size: 12px;
      }
      p:last-child {
        font-size: 16px;
      }
    }
    .box-item:first-child {
      background-color: #212430;
    }
    .box-item:nth-child(2) {
      background-color: #807e7e;
    }
    .box-item:nth-child(3) {
      background-color: #d5d5d5;
      color: #212430;
    }
    .box-item:nth-child(4) {
      background-color: #e8e8e8;
      color: #212430;
    }
    .box-item:nth-child(5) {
      background-color: #f6f6f6;
      color: #212430;
    }
    .box-item:nth-child(6) {
      background-color: #bbbbbb;
      color: #212430;
    }
    .box-item:nth-child(7) {
      background-color: #000000;
    }
    .box-item:nth-child(8) {
      background-color: #ffffff;
      color: #212430;
      border: 1px solid #d5d5d5;
    }
  }
}
</style>
<template>
  <div class="color-wrapper">
    <h2 class="color-title">Color 颜色</h2>
    <p class="color-desc">为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</p>
    <div class="color-box">
      <div class="color-main">
        <h3>主色</h3>
        <p class="color-desc">主要颜色是鲜艳、包容、科技、普惠的蓝色。</p>
        <div class="demo1-color-box">
          <div class="bg-blue-sub">
            <div class="bg-blue-sub-item">#1A92FD</div>
            <div class="bg-blue-sub-item">#5EB2FD</div>
            <div class="bg-blue-sub-item">#8CC8FE</div>
            <div class="bg-blue-sub-item">#BADEFE</div>
            <div class="bg-blue-sub-item">#ECF6FF</div>
          </div>
        </div>
      </div>
      <div class="color-subsidiary">
        <h3>辅助色</h3>
        <p class="color-desc">除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。
        </p>

        <div class="demo2-color-box">
          <div class="bg-red-sub">
            <div class="bg-red-sub-item">#ED2525</div>
            <div class="bg-red-sub-item">#ED2525</div>
            <div class="bg-red-sub-item">#ED2525</div>
            <div class="bg-red-sub-item">#ED2525</div>
            <div class="bg-red-sub-item">#ED2525</div>
          </div>
          <div class="bg-orange-sub">
            <div class="bg-orange-sub-item">#F08300</div>
            <div class="bg-orange-sub-item">#F08300</div>
            <div class="bg-orange-sub-item">#F08300</div>
            <div class="bg-orange-sub-item">#F08300</div>
            <div class="bg-orange-sub-item">#F08300</div>
          </div>
          <div class="bg-green-sub">
            <div class="bg-green-sub-item">#2FC25B</div>
            <div class="bg-green-sub-item">#2FC25B</div>
            <div class="bg-green-sub-item">#2FC25B</div>
            <div class="bg-green-sub-item">#2FC25B</div>
            <div class="bg-green-sub-item">#2FC25B</div>
          </div>
        </div>
      </div>
    </div>
    <h3>中性色</h3>
    <p class="color-desc">中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>

    <div class="demo3-color-box">
      <div class="box-item text01-box">
        <p>主要文字</p>
        <p>#212430</p>
      </div>
      <div class="box-item text02-box">
        <p>常规文字</p>
        <p>#807E7E</p>
      </div>
      <div class="box-item border01-box">
        <p>一级边框</p>
        <p>#D5D5D5</p>
      </div>
      <div class="box-item border02-box">
        <p>二级边框</p>
        <p>#E8E8E8</p>
      </div>
      <div class="box-item bg01-box">
        <p>大面积背景</p>
        <p>#F6F6F6</p>
      </div>
      <div class="box-item bg02-box">
        <p>禁用色</p>
        <p>#BBBBBB</p>
      </div>
      <div class="box-item bg03-box">
        <p>纯黑</p>
        <p>#000000</p>
      </div>
      <div class="box-item bg04-box">
        <p>纯白</p>
        <p>#FFFFFF</p>
      </div>
    </div>

  </div>
</template>
<script>
export default {

}
</script>