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
    border: 1px solid #807e7e;
    color: #807e7e;
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
    padding: 8px 19px;
    font-size: 14px;
    border-radius: 4px;
    &:hover {
      background: #f6f6f6;
    }
    &.is-loading {
      position: relative;
      pointer-events: none;
      opacity: 0.7;
    }
    &.is-disabled {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
  }
  .xdd-button--small {
    padding: 4px 10px;
    font-size: 12px;
  }
  .xdd-button--default {
    border: 1px solid #1a92fd;
    color: #1a92fd;
    &:hover {
      background: #ecf6ff;
      border: 1px solid #1a92fd;
    }
    &.is-disabled {
      color: #1a92fd;
      background-color: #ecf6ff;
      border-color: #1a92fd;
    }
  }
  .xdd-button--primary {
    border-color: #1a92fd;
    background: #1a92fd;
    color: #fff;
    &:hover {
      background: #75beff;
      border: 1px solid #75beff;
    }
    &.is-disabled {
      color: #fff;
      background-color: #75beff;
      border-color: #75beff;
    }
  }
  .xdd-button--success {
    border-color: #67c23a;
    background: #67c23a;
    color: #fff;
    &:hover {
      background: #2fc25b;
      border: 1px solid #2fc25b;
    }
    &.is-disabled {
      color: #fff;
      background-color: #b3e19d;
      border-color: #b3e19d;
    }
  }
  .xdd-button--warning {
    border-color: #f4a84c;
    background: #f4a84c;
    color: #fff;
    &:hover {
      background: #f7c17f;
      border-color: #f7c17f;
    }
    &.is-disabled {
      color: #fff;
      background-color: #f3d19e;
      border-color: #f3d19e;
    }
  }
  .xdd-button--danger {
    border-color: #f26666;
    background: #f26666;
    color: #fff;
    &:hover {
      background: #f69292;
      border-color: #f69292;
    }
    &.is-disabled {
      color: #fff;
      background-color: #fab6b6;
      border-color: #fab6b6;
    }
  }
  .xdd-button--info {
    border-color: #807e7e;
    background: #807e7e;
    color: #fff;
    &:hover {
      background: #929292;
      border-color: #929292;
    }
    &.is-disabled {
      color: #fff;
      background-color: #c8c9cc;
      border-color: #c8c9cc;
    }
  }
  .xdd-button--text {
    border-color: transparent;
    color: #409eff;
    background: transparent;
    padding-left: 0;
    padding-right: 0;

    &.xdd-button--text-info {
      color: #807e7e;
    }
    &.is-underline {
      text-decoration: underline;
    }
    &:hover {
      color: #66b1ff;
      border-color: transparent;
      background-color: transparent;
    }
    &.xdd-button--text-info {
      color: #807e7e;
    }
  }
  .button-demo,
  .button-interactive,
  .button-forbidden,
  .button-size,
  .button-text,
  .button-group,
  .button-simple,
  .button-load {
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
          <button class="xdd-button xdd-button--default">
            <span>默认按钮</span>
          </button>
          <button class="xdd-button xdd-button--primary">
            <span>主要按钮</span>
          </button>
          <button class="xdd-button xdd-button--success">
            <span>成功按钮</span>
          </button>
          <button class="xdd-button xdd-button--warning">
            <span>警告按钮</span>
          </button>
          <button class="xdd-button xdd-button--danger">
            <span>危险按钮</span>
          </button>
          <button class="xdd-button xdd-button--info">
            <span>信息按钮</span>
          </button>
        </div>
      </div>
      <div class="xdd-row small">
        <h3>小按钮</h3>
        <div class="button-box">
          <button class="xdd-button xdd-button--small">
            <span>常规按钮</span>
          </button>
          <button class="xdd-button xdd-button--default xdd-button--small">
            <span>默认按钮</span>
          </button>
          <button class="xdd-button xdd-button--primary xdd-button--small">
            <span>主要按钮</span>
          </button>
          <button class="xdd-button xdd-button--success xdd-button--small">
            <span>成功按钮</span>
          </button>
          <button class="xdd-button xdd-button--warning xdd-button--small">
            <span>警告按钮</span>
          </button>
          <button class="xdd-button xdd-button--danger xdd-button--small">
            <span>危险按钮</span>
          </button>
          <button class="xdd-button xdd-button--info xdd-button--small">
            <span>信息按钮</span>
          </button>
        </div>
      </div>
    </div>
    <div class="button-forbidden">
      <div class="xdd-row big">
        <h3>大按钮禁用</h3>
        <div class="button-box">
          <button class="xdd-button is-disabled">
            <span>常规按钮</span>
          </button>
          <button class="xdd-button is-disabled xdd-button--default">
            <span>默认按钮</span>
          </button>
          <button class="xdd-button is-disabled xdd-button--primary">
            <span>主要按钮</span>
          </button>
          <button class="xdd-button is-disabled xdd-button--success">
            <span>成功按钮</span>
          </button>
          <button class="xdd-button is-disabled xdd-button--warning">
            <span>警告按钮</span>
          </button>
          <button class="xdd-button is-disabled xdd-button--danger">
            <span>危险按钮</span>
          </button>
          <button class="xdd-button is-disabled xdd-button--info">
            <span>信息按钮</span>
          </button>
        </div>
      </div>
      <div class="xdd-row small">
        <h3>小按钮禁用</h3>
        <div class="button-box">
          <button class="xdd-button is-disabled xdd-button--small">
            <span>常规按钮</span>
          </button>
          <button class="xdd-button is-disabled xdd-button--default xdd-button--small">
            <span>默认按钮</span>
          </button>
          <button class="xdd-button is-disabled xdd-button--primary xdd-button--small">
            <span>主要按钮</span>
          </button>
          <button class="xdd-button is-disabled xdd-button--success xdd-button--small">
            <span>成功按钮</span>
          </button>
          <button class="xdd-button is-disabled xdd-button--warning xdd-button--small">
            <span>警告按钮</span>
          </button>
          <button class="xdd-button is-disabled xdd-button--danger xdd-button--small">
            <span>危险按钮</span>
          </button>
          <button class="xdd-button is-disabled xdd-button--info xdd-button--small">
            <span>信息按钮</span>
          </button>
        </div>
      </div>
    </div>
    <div class="button-size">
      <div class="xdd-row big">
        <h3>大按钮尺寸</h3>
        <div class="button-box">
          <button class="xdd-button xdd-button--default"><span>文字</span></button>
          <button class="xdd-button xdd-button--default"><span>五个文字呐</span></button>
          <button class="xdd-button xdd-button--default"><span>三文字</span></button>
          <button class="xdd-button xdd-button--default"><span>这是六个字呐</span></button>
          <button class="xdd-button xdd-button--default"><span>四个字</span></button>
          <button class="xdd-button xdd-button--default"><span>...</span></button>
        </div>
      </div>
      <div class="xdd-row small">
        <h3>小按钮尺寸</h3>
        <div class="button-box">
          <button class="xdd-button xdd-button--default xdd-button--small"><span>文字</span></button>
          <button class="xdd-button xdd-button--default xdd-button--small"><span>五个文字呐</span></button>
          <button class="xdd-button xdd-button--default xdd-button--small"><span>三文字</span></button>
          <button class="xdd-button xdd-button--default xdd-button--small"><span>这是六个字呐</span></button>
          <button class="xdd-button xdd-button--default xdd-button--small"><span>四个字</span></button>
          <button class="xdd-button xdd-button--default xdd-button--small"><span>...</span></button>
        </div>
      </div>
    </div>
    <div class="button-text">
      <div class="xdd-row big">
        <h3>大文字按钮</h3>
        <div class="button-box">
          <button class="xdd-button xdd-button--text"><span>文字按钮</span></button>
          <button class="xdd-button xdd-button--text xdd-button--text-info"><span>文字按钮</span></button>
          <button class="xdd-button xdd-button--text is-underline"><span>文字按钮</span></button>
          <button class="xdd-button xdd-button--text xdd-button--text-info is-underline"><span>文字按钮</span></button>
        </div>
      </div>
      <div class="xdd-row small">
        <h3>小文字按钮</h3>
        <div class="button-box">
          <button class="xdd-button xdd-button--text xdd-button--small"><span>文字按钮</span></button>
          <button class="xdd-button xdd-button--text xdd-button--text-info xdd-button--small"><span>文字按钮</span></button>
          <button class="xdd-button xdd-button--text is-underline xdd-button--small"><span>文字按钮</span></button>
          <button class="xdd-button xdd-button--text is-underline xdd-button--text-info xdd-button--small"><span>文字按钮</span></button>
        </div>
      </div>
    </div>
    <div class="button-group">
      <div class="xdd-row big">
        <h3>大组合按钮</h3>
        <div class="button-box">
          <button class="xdd-button"><span>取消</span></button>
          <button class="xdd-button xdd-button--primary"><span>确定</span></button>
          <button class="xdd-button xdd-button--primary"><span>查询</span></button>
          <button class="xdd-button"><span>导出</span></button>
        </div>
      </div>
      <div class="xdd-row small">
        <h3>小组合按钮</h3>
        <div class="button-box">
          <button class="xdd-button xdd-button--small"><span>取消</span></button>
          <button class="xdd-button xdd-button--primary xdd-button--small"><span>确定</span></button>
          <button class="xdd-button xdd-button--primary xdd-button--small"><span>查询</span></button>
          <button class="xdd-button xdd-button--small"><span>导出</span></button>
        </div>
      </div>
    </div>
    <div class="button-simple">
      <div class="xdd-row big">
        <h3>单独大按钮</h3>
        <div class="button-box">
          <button class="xdd-button xdd-button--primary"><span>查询</span></button>
        </div>
      </div>
      <div class="xdd-row small">
        <h3>单独小按钮</h3>
        <div class="button-box">
          <button class="xdd-button xdd-button--primary xdd-button--small"><span>查询</span></button>
        </div>
      </div>
    </div>
    <div class="button-load">
      <div class="xdd-row big">
        <h3>大按钮加载</h3>
        <div class="button-box">
          <button class="xdd-button is-loading xdd-button--primary"><span>加载中</span></button>
        </div>
      </div>
      <div class="xdd-row small">
        <h3>小按钮加载</h3>
        <div class="button-box">
          <button class="xdd-button is-loading xdd-button--primary xdd-button--small"><span>加载中</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>