<template>
<div id="intro" class="intro">
    <p class="large-text">Hi,</p>
    <br />
    <div class="banner-wrapper">
        <p class="large-text">{{ $str('my name is') }}&nbsp;</p>
        <div class="ascii-wrapper">
            <p>&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>&nbsp;|&nbsp;&nbsp;_&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;/&nbsp;____|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>&nbsp;|&nbsp;|_)&nbsp;|&nbsp;___&nbsp;|&nbsp;|__|&nbsp;(___&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;_&nbsp;_&nbsp;__&nbsp;&nbsp;</p>
            <p>&nbsp;|&nbsp;&nbsp;_&nbsp;&lt;&nbsp;/&nbsp;_&nbsp;\|&nbsp;'_&nbsp;\\___&nbsp;\|&nbsp;|&nbsp;|&nbsp;|&nbsp;'_&nbsp;\&nbsp;</p>
            <p>&nbsp;|&nbsp;|_)&nbsp;|&nbsp;(_)&nbsp;|&nbsp;|_)&nbsp;|___)&nbsp;|&nbsp;|_|&nbsp;|&nbsp;|&nbsp;|&nbsp;|</p>
            <p>&nbsp;|____/&nbsp;\___/|_.__/_____/&nbsp;\__,_|_|&nbsp;|_|</p>
                                                    
        </div>
    </div>
    <br />
    <p class="fs-50 mt-20">{{ $str('I create') }} <Shifty :words="[$str('Apps'), $str('Websites'), $str('Softwares'), $str('Things')]" />.</p>
</div>
</template>

<script>
import Shifty from './Shifty'
export default {
    components: {
        Shifty
    }
}
</script>

<style lang="less" scoped>
@import '../../../styles/query.less';

.intro {
  margin: -20px auto !important;
  padding: 0px 10px;
  border-bottom: 2px solid #FFFFFF;
  min-width: 80%;
  max-width: 100%;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin-bottom: 0px !important;
  }
  .large-text {
    font-size: 70px;
    line-height: 70px;
  }
  .mt-20 {
    margin-top: 20px !important;
  }
  .fs-50 {
      font-size: 50px;
      line-height: 50px;
  }
  .banner-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  .ascii-wrapper {
    padding: 0px 0px; margin: 0px 0px;
    p {
        margin-block-start: 0px;
        margin-block-end: 0px;
    }
  }
}

@media @tablet {
  .intro {
    padding: 0px 0px;
    .ascii-wrapper {
        p {
          font-size: 16px;
        }
      }
  }
}

@media @phone {
  .intro {
    padding: 0px 0px;
    .ascii-wrapper {
      p {
        font-size: 14px;
      }
    }
  }
}
</style>