<style lang="scss" scoped>
.icon-wrapper {
  margin: 50px 320px 100px 272px;
  .icon-title {
    font-size: 24px;
  }
  .icon-desc {
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
  .icon-name-guide,
  .icon-direction,
  .icon-suggest,
  .icon-common,
  .icon-face {
    .icon-list {
      list-style: none;
      overflow: hidden;
      padding-left: 0;
      li {
        float: left;
        text-align: center;
        margin-right: 20px;
        i {
          display: inline-block;
          color: #807e7e;
          font-size: 12px;
        }
        .icon-name {
          font-size: 12px;
          color: #807e7e;
        }
      }
    }
  }

  .icon-name-guide {
    .icon-list {
      li {
        i {
          height: 80px;
          line-height: 80px;
          width: 120px;
          font-size: 32px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="icon-wrapper">
    <h2 class="icon-title">Icon 图标</h2>
    <p class="icon-desc">我们提供了一套通用的图标集合。</p>
    <h3>图标命名规则</h3>
    <p class="sub-desc">直接通过设置类名为 xdd-common-iconname 来使用即可。</p>
    <div class="icon-name-guide">
      <ul class="icon-list">
        <li>
          <i class="iconfont icon-xdd_close_circle_fill"></i>
          <div class="icon-name">icon-xdd_close_circle_fill</div>
        </li>
        <li>
          <i class="iconfont icon-xdd_edit"></i>
          <div class="icon-name">icon-xdd_close_circle_fill</div>
        </li>
        <li>
          <i class="iconfont icon-xdd_down"></i>
          <div class="icon-name">icon-xdd_close_circle_fill</div>
        </li>
        <li>
          <i class="iconfont icon-xdd_up"></i>
          <div class="icon-name">icon-xdd_close_circle_fill</div>
        </li>
        <li>
          <i class="iconfont icon-xdd_right"></i>
          <div class="icon-name">icon-xdd_close_circle_fill</div>
        </li>
        <li>
          <i class="iconfont icon-xdd_left"></i>
          <div class="icon-name">icon-xdd_close_circle_fill</div>
        </li>
      </ul>
    </div>
    <h3>图标集合</h3>
    <p class="sub-desc">icon通过统一上传至阿里巴巴图表库www.iconfont.cn使用。</p>
    <h3>方向性图标</h3>
    <div class="icon-direction">
      <ul class="icon-list">
        <li><i class="iconfont icon-xdd_left"></i></li>
        <li><i class="iconfont icon-xdd_right"></i></li>
        <li><i class="iconfont icon-xdd_up"></i></li>
        <li><i class="iconfont icon-xdd_down"></i></li>
        <li><i class="iconfont icon-xdd_left_circle"></i></li>
        <li><i class="iconfont icon-xdd_right_circle"></i></li>
        <li><i class="iconfont icon-xdd_up_circle"></i></li>
        <li><i class="iconfont icon-xdd_down_circle"></i></li>
        <li><i class="iconfont icon-xdd_swap"></i></li>
        <li><i class="iconfont icon-xdd_swap1"></i></li>
        <li><i class="iconfont icon-xdd_indent"></i></li>
        <li><i class="iconfont icon-xdd_outdent"></i></li>
      </ul>
    </div>
    <h3>提示建议性图标</h3>
    <div class="icon-suggest">
      <ul class="icon-list">
        <li><i class="iconfont icon-xdd_rightok"></i></li>
        <li><i class="iconfont icon-xdd_close"></i></li>
        <li><i class="iconfont icon-xdd_subtract"></i></li>
        <li><i class="iconfont icon-xdd_reduce_circle"></i></li>
        <li><i class="iconfont icon-xdd_plus_circle"></i></li>
        <li><i class="iconfont icon-xdd_warning_circle"></i></li>
        <li><i class="iconfont icon-xdd_question_circle"></i></li>
        <li><i class="iconfont icon-xdd_plus_circle"></i></li>
        <li><i class="iconfont icon-xdd_reduce_circle"></i></li>
        <li><i class="iconfont icon-xdd_info_circle"></i></li>
        <li><i class="iconfont icon-xdd_time_circle"></i></li>
      </ul>
    </div>
    <h3>网站通用图标</h3>
    <div class="icon-common">
      <ul class="icon-list">
        <li><i class="iconfont icon-xdd_home"></i></li>
        <li><i class="iconfont icon-xdd_email"></i></li>
        <li><i class="iconfont icon-xdd_date"></i></li>
        <li><i class="iconfont icon-xdd_file_copy"></i></li>
        <li><i class="iconfont icon-xdd_file"></i></li>
        <li><i class="iconfont icon-xdd_file_text"></i></li>
        <li><i class="iconfont icon-xdd_desktop"></i></li>
        <li><i class="iconfont icon-xdd_folder_add"></i></li>
        <li><i class="iconfont icon-xdd_lock"></i></li>
        <li><i class="iconfont icon-xdd_picture"></i></li>
        <li><i class="iconfont icon-xdd_delete"></i></li>
        <li><i class="iconfont icon-xdd_horn"></i></li>
        <li><i class="iconfont icon-xdd_address"></i></li>
        <li><i class="iconfont icon-xdd_close1"></i></li>
        <li><i class="iconfont icon-xdd_star"></i></li>
        <li><i class="iconfont icon-xdd_piechart"></i></li>
        <li><i class="iconfont icon-xdd_message"></i></li>
        <li><i class="iconfont icon-xdd_setting"></i></li>
        <li><i class="iconfont icon-xdd_pc"></i></li>
      </ul>
    </div>
    <h3>面性图标</h3>
    <div class="icon-face">
      <ul class="icon-list">
        <li><i class="iconfont icon-xdd_close_circle_fill"></i></li>
        <li><i class="iconfont icon-xdd_info_circle_fill"></i></li>
        <li><i class="iconfont icon-xdd_time_circle_fill"></i></li>
        <li><i class="iconfont icon-xdd_plus_circle_fill"></i></li>
        <li><i class="iconfont icon-xdd_check_circle_fill"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>