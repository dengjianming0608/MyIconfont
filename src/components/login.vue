<template>
  <div class="login_page_background">
    <div class="center" >
      <div class="login">
        <div class="headline">新页生产ERP</div>
        <div class="login_input">
          <label>公司名：</label><select class="companyName">
          <option v-for="(item,key) in companyName" :value="key" :key="key">{{item}}</option>
        </select><br>
          <label for="1">用户名：</label><input type="text" id="1" autocomplete="off" name="username" placeholder="手机号/邮箱"/><br>
          <label for="2">密码：</label><input type="password" id="2" name="password" placeholder="8到12位字母或数字"/><br>
          <label for="3">验证码：</label><input type="text" id="3" autocomplete="off" name="verification_code" placeholder="请输入下图验证码"/><br><span class="verification_code"></span>
          <div class="login_button" @mouseover="show" @mouseout="hidden" @click="login">
            <button>登录</button>
            <div class="login_button_picture" v-show="isTrue"></div>
          </div>
        </div>
      </div>
      <div class="introduce">
        <div class="logo">
          <div class="logo_background"></div>
          <span>广州新页信息科技有限公司 版权所有</span>
        </div>
        <div class="link">
          <a href="#javascript:;">生产视频教学中心</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      companyName: {
        wxj: '君临世界',
        lp: '花开月圆',
        djm: '金枪不倒',
        zc: '日久生津'
      },
      isTrue: false
    }
  },
  methods: {
    skip () {
      this.$router.push({path: '/homepage'})
    },
    show () {
      this.isTrue = !this.isTrue
    },
    hidden () {
      this.isTrue = !this.isTrue
    },
    login (event) {
      var e = event || window.event
      e.target.previousElementSibling.style.boxShadow = 'inset 0 0 50px 0px black'
      setTimeout(this.skip, 2000)
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login_page_background
    width:100%
    height:100%
    background-image: url('../assets/login-page-background.png')
    background-repeat: no-repeat
    background-size: 100% 100%
    .center
      position: absolute
      top: 0
      bottom: 0
      right: 0
      left: 0
      margin: auto
      width: 490px
      height: 417px
      .login
        overflow: hidden
        height: 204px
        background-image: url('../assets/login-background.png')
        background-repeat: repeat
        background-size: 5px 5px
        .headline
          height: 30px
          margin-top: 10px
          text-align: center
          color: white
          font: 20px / 30px '微软雅黑'
          -webkit-box-reflect: below 1px -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 1)), to(rgba(0, 0, 0, 0.1)))
        .login_input
          position: relative
          padding: 0px 40px
          font: 15px '微软雅黑'
          height: 130px
          margin: 30px 0 0 30px
          & > label
            display: inline-block
            width: 60px
            text-align: right
          & > input
            width: 150px
          & > select
            width: 154px
          & > div[class=login_button]
            width: 80px
            height: 80px
            position: absolute
            right: 50px
            top: 0px
            & > button
              display: block
              width: 80px
              height: 80px
              border: 1px solid rgb(90, 190, 239)
              border-radius: 50%
              background: radial-gradient(farthest-side circle at 40px 0px, rgb(255, 255, 255), rgb(90, 200, 200), rgb(8, 69, 74))
              color: white
              font-size: 25px
            & > div[class=login_button_picture]
              position: absolute
              left: 0
              top: 0
              width: 80px
              height: 80px
              background: rgb(100, 100, 100)
              opacity: 0.5
          & > span[class=verification_code]
            display: inline-block
            width: 100px
            height: 40px
            margin-left: 60px
            background-image: url('../assets/verification-code.png')
            background-repeat: no-repeat
            background-size: 100% 100%

      .introduce
        padding-top: 60px
        display: flex
        align-items: flex-end
        flex-direction: column
        height: 153px
        background: rgb(115, 186, 231)
        & > div
          width: 200px
          height: 70px
          margin-right: 10px
          &[class=logo]
            font-size: 10px
            .logo_background
              width: 100%
              height: 30px
              background-position: top right
              background-image: url('../assets/logo.png')
              background-repeat: no-repeat
              background-size: 96px 30px
            span
              text-align: right
          &[class=link]
            font-size: 20px
          & > a
            display: inline-block
            width: 100%
            text-decoration: none
            text-align: right
</style>
