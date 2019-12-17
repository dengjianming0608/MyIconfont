<template>
  <div class="page_background">
    <div class="center" >
      <div class="login" :style="login_background">
        <div class="headline">新页生产ERP</div>
        <div class="login_input">
          <form action="" method="">
            <label for="1">用户名：</label><input type="text" id="1"><br>
            <label for="2">密码：</label><input type="password" id="2"><br>
            <label for="3">验证码：</label><input type="text" id="3"><br><span :style=" verification_code"></span>
            <input type="submit" value="登入">
          </form>
        </div>
      </div>
      <div class="introduce">
        <div class="logo">
          <div :style="logo"></div>
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
  data() {
    return {
      verification_code:{
        marginLeft:"60px",
        backgroundImage: "url(" + require("./assets/verification-code.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      },
      logo:{
        width:'100%',
        height:'30px',
        backgroundImage: "url(" + require("./assets/logo.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "96px 30px",
        backgroundPosition:"top right",
      },
//      page_background: {
//        width:"100%",
//        height:"100%",
//        backgroundImage: "url(" + require("./assets/页面背景图.png") + ")",
//        backgroundRepeat: "no-repeat",
//        backgroundSize: "100% 100%",
//      },
      login_background:{
        backgroundImage: "url(" + require("./assets/login-background.png") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "5px 5px",
      }
    }
  }
}
</script>

<style >
  .page_background {
    width: 100%;
    height: 100%;
    background-image: url('assets/page-background.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .center {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 490px;
    height: 417px;
  }
  .login {
    overflow: hidden;
    height:204px;
  }
  .headline {
    height: 30px;
    margin-top:10px;
    text-align: center;
    color: white;
    font: 20px/30px '微软雅黑';
    -webkit-box-reflect: below 1px
    -webkit-gradient(linear,left top,left bottom, from(rgba(255,255,255,1)),to(rgba(0,0,0,0.1)));
  }
  .login_input {
    position: relative;
    padding: 0px 40px;
    font: 15px '微软雅黑';
    height: 130px;
    margin: 30px;
  }
  form > label{
    display: inline-block;
    width:60px;
    text-align: right;
  }
  form > input{
    width:150px;
  }
  form > input[type=submit] {
    position: absolute;
    border: 1px solid blue;
    border-radius: 50%;
    font-size: 20px;
    width: 80px;
    height: 80px;
    right: 50px;
    top: 0px;
  }
  form > span{
    display: inline-block;
    width:100px;
    height:40px;
  }
  .introduce {
    padding-top: 60px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    height:153px;
    background: rgb(115,186,231);
  }
  .introduce > div {
    width:200px;
    height:70px;
    margin-right: 10px;
  }
  .introduce > div[class=logo]{
    font-size: 10px;
  }
  .introduce > div[class=link]{
    font-size: 20px;
  }
  .introduce > div > a {
    display: inline-block;
    width:100%;
    text-decoration: none;
    text-align: right;
  }
</style>
