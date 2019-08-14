<style lang="scss" scoped>
.button-wrapper {
  margin: 50px 320px 100px 272px;
  .button-title {
    font-size: 24px;
  }
  .button-desc {
    font-size: 12px;
    color: #807e7e;
  }
  h3 {
    font-size: 16px;
    color: #212430;
  }
  .xdd-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  .button-demo {
    display: flex;
    flex-direction: row;
  }
  .big {
    width: 65%;
  }
  .small {
    width: 45%;
  }
  .button-box .xdd-button {
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .button-box .xdd-button:last-child {
    margin-right: 0px;
  }
}
</style>
<template>
  <div class="button-wrapper">
    <h2 class="button-title">Button 按钮</h2>
    <p class="button-desc">常用的按钮尺寸操作以及交互等。</p>
    <div class="button-demo">
      <div class="xdd-row big">
        <h3>大按钮</h3>
        <div class="button-box">
          <button class="xdd-button">
            <span>常规按钮</span>
          </button>
          <button class="xdd-button">
            <span>默认按钮</span>
          </button>
          <button class="xdd-button">
            <span>主要按钮</span>
          </button>
          <button class="xdd-button">
            <span>成功按钮</span>
          </button>
          <button class="xdd-button">
            <span>警告按钮</span>
          </button>
          <button class="xdd-button">
            <span>危险按钮</span>
          </button>
          <button class="xdd-button">
            <span>信息按钮</span>
          </button>
        </div>
      </div>
      <div class="xdd-row small">
        <h3>小按钮</h3>
        <div class="button-box">
          <button class="xdd-button">
            <span>常规按钮</span>
          </button>
          <button class="xdd-button">
            <span>默认按钮</span>
          </button>
          <button class="xdd-button">
            <span>主要按钮</span>
          </button>
          <button class="xdd-button">
            <span>成功按钮</span>
          </button>
          <button class="xdd-button">
            <span>警告按钮</span>
          </button>
          <button class="xdd-button">
            <span>危险按钮</span>
          </button>
          <button class="xdd-button">
            <span>信息按钮</span>
          </button>
        </div>
      </div>
    </div>
    <div class="button-interactive">
      <div class="xdd-row big">
        <h3>大按钮交互</h3>
        <div class="button-box">
          <button class="xdd-button">
            <span>常规按钮</span>
          </button>
          <button class="xdd-button">
            <span>默认按钮</span>
          </button>
          <button class="xdd-button">
            <span>主要按钮</span>
          </button>
          <button class="xdd-button">
            <span>成功按钮</span>
          </button>
          <button class="xdd-button">
            <span>警告按钮</span>
          </button>
          <button class="xdd-button">
            <span>危险按钮</span>
          </button>
          <button class="xdd-button">
            <span>信息按钮</span>
          </button>
        </div>
      </div>
      <div class="xdd-row small">
        <h3>小按钮交互</h3>
        <div class="button-box">
          <button class="xdd-button">
            <span>常规按钮</span>
          </button>
          <button class="xdd-button">
            <span>默认按钮</span>
          </button>
          <button class="xdd-button">
            <span>主要按钮</span>
          </button>
          <button class="xdd-button">
            <span>成功按钮</span>
          </button>
          <button class="xdd-button">
            <span>警告按钮</span>
          </button>
          <button class="xdd-button">
            <span>危险按钮</span>
          </button>
          <button class="xdd-button">
            <span>信息按钮</span>
          </button>
        </div>
      </div>
    </div>
    <div class="button-forbidden">
      <div class="xdd-row big">
        <h3>大按钮禁用</h3>
        <div class="button-box">
          <button class="xdd-button">
            <span>常规按钮</span>
          </button>
          <button class="xdd-button">
            <span>默认按钮</span>
          </button>
          <button class="xdd-button">
            <span>主要按钮</span>
          </button>
          <button class="xdd-button">
            <span>成功按钮</span>
          </button>
          <button class="xdd-button">
            <span>警告按钮</span>
          </button>
          <button class="xdd-button">
            <span>危险按钮</span>
          </button>
          <button class="xdd-button">
            <span>信息按钮</span>
          </button>
        </div>
      </div>
      <div class="xdd-row small">
        <h3>小按钮禁用</h3>
        <div class="button-box">
          <button class="xdd-button">
            <span>常规按钮</span>
          </button>
          <button class="xdd-button">
            <span>默认按钮</span>
          </button>
          <button class="xdd-button">
            <span>主要按钮</span>
          </button>
          <button class="xdd-button">
            <span>成功按钮</span>
          </button>
          <button class="xdd-button">
            <span>警告按钮</span>
          </button>
          <button class="xdd-button">
            <span>危险按钮</span>
          </button>
          <button class="xdd-button">
            <span>信息按钮</span>
          </button>
        </div>
      </div>
    </div>
    <div class="button-size">
      <div class="xdd-row big">
        <h3>大按钮尺寸</h3>
        <div class="button-box">
          <button class="xdd-button"><span>文字</span></button>
          <button class="xdd-button"><span>五个文字呐</span></button>
          <button class="xdd-button"><span>三文字</span></button>
          <button class="xdd-button"><span>这是六个字呐</span></button>
          <button class="xdd-button"><span>四个字</span></button>
          <button class="xdd-button"><span>...</span></button>
        </div>
      </div>
      <div class="xdd-row small">
        <h3>小按钮尺寸</h3>
        <div class="button-box">
          <button class="xdd-button"><span>文字</span></button>
          <button class="xdd-button"><span>五个文字呐</span></button>
          <button class="xdd-button"><span>三文字</span></button>
          <button class="xdd-button"><span>这是六个字呐</span></button>
          <button class="xdd-button"><span>四个字</span></button>
          <button class="xdd-button"><span>...</span></button>
        </div>
      </div>
    </div>
    <div class="button-text">
      <div class="xdd-row big">
        <h3>大文字按钮</h3>
        <div class="button-box">
          <button class="xdd-button"><span>文字按钮</span></button>
          <button class="xdd-button"><span>文字按钮</span></button>
          <button class="xdd-button"><span>文字按钮</span></button>
          <button class="xdd-button"><span>文字按钮</span></button>
        </div>
      </div>
      <div class="xdd-row small">
        <h3>小文字按钮</h3>
        <div class="button">
          <button class="xdd-button"><span>文字按钮</span></button>
          <button class="xdd-button"><span>文字按钮</span></button>
          <button class="xdd-button"><span>文字按钮</span></button>
          <button class="xdd-button"><span>文字按钮</span></button>
        </div>
      </div>
    </div>
    <div class="button-group">
      <div class="xdd-row big">
        <h3>大组合按钮</h3>
        <div class="button-box">
          <button class="xdd-button"><span>文字按钮</span></button>
          <button class="xdd-button"><span>文字按钮</span></button>
          <button class="xdd-button"><span>文字按钮</span></button>
          <button class="xdd-button"><span>文字按钮</span></button>
        </div>
      </div>
      <div class="xdd-row small">
        <h3>小组合按钮</h3>
        <div class="button-box">
          <button class="xdd-button"><span>文字按钮</span></button>
          <button class="xdd-button"><span>文字按钮</span></button>
          <button class="xdd-button"><span>文字按钮</span></button>
          <button class="xdd-button"><span>文字按钮</span></button>
        </div>
      </div>
    </div>
    <div class="button-simple">
      <div class="xdd-row big">
        <h3>单独大按钮</h3>
        <div class="button-box">
          <button class="xdd-button"><span>查询</span></button>
        </div>
      </div>
      <div class="xdd-row small">
        <h3>单独小按钮</h3>
        <div class="button-box">
          <button class="xdd-button"><span>查询</span></button>
        </div>
      </div>
    </div>
    <div class="button-load">
      <div class="xdd-row big">
        <h3>大按钮加载</h3>
        <div class="button-box">
          <button class="xdd-button"><span>加载中</span></button>
        </div>
      </div>
      <div class="xdd-row small">
        <h3>小按钮加载</h3>
        <div class="button-box">
          <button class="xdd-button"><span>加载中</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>