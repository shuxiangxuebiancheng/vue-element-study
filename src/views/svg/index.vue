<template>
  <div class="app-components">
    <!--gutter	栅格间隔-->
    <el-row :gutter="40" class="panel-group">
      <!--xs	<768px 响应式栅格数或者栅格属性对象,sm	≥768px 响应式栅格数或者栅格属性对象, lg	≥1200px 响应式栅格数或者栅格属性对象-->
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-baidu">
            <svg-icon icon-class="baidu" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              百度一下
            </div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-python">
            <svg-icon icon-class="python" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              Python语言
            </div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-skypeicon">
            <svg-icon icon-class="skypeicon" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              Skype
            </div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-alipay-fill-square">
            <svg-icon icon-class="alipay-fill-square" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              支付宝
            </div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-twitter">
            <svg-icon icon-class="twitter" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              twitter
            </div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import CountTo from 'vue-count-to'
export default {
  name: 'SvgDemo',
  components: { CountTo }
}
</script>
<style lang="scss" scoped>
// !important 相当于使用:style进行修改样式:style="{marginLeft:0+'px',marginRight:0+'px'}"
.panel-group{
  margin-bottom: 32px;
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.app-components{
  position: absolute;
  // min-height: 100%;
  height: 100%;
  width: 100%;
  background-color: #f0f2f5;
}
.panel-group {
  margin-top: 18px;
  .card-panel-col {
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-baidu {
        background: #2882ff;
      }

      .icon-python {
        background: #acf306 ;
      }

      .icon-skypeicon {
        background: #04b2f1;
      }

      .icon-alipay-fill-square {
        background: #36a3f7
      }
    }

    .icon-baidu {
      color: #2882ff;
    }

    .icon-python {
      color: #acf306;
    }

    .icon-skypeicon {
      color: #04b2f1;
    }

    .icon-alipay-fill-square {
      color:  #36a3f7
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
