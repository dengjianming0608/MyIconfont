<template>
  <div class="homepage">
    <div class="homepageHeader">
      <div class="companyName">
        <span>{{companyName}}</span>
      </div>
      <div class="toolbar">
        <ul @click.stop="show" ref="isBindMouseover">
          <li index="1" :class="{active: currentIndexL === 1}">文件(F)</li>
          <li index="2" :class="{active: currentIndexL === 2}">主菜单(M)</li>
          <li index="3" :class="{active: currentIndexL === 3}">模块导入(E)</li>
          <li index="4" :class="{active: currentIndexL === 4}">帮助(H)</li>
        </ul>
        <div class="file" v-show="currentIndexL === 1">
          <ul>
            <li>注销</li>
            <li>修改密码</li>
            <li>退出</li>
            <li>锁屏</li>
            <li>设置邮箱参数</li>
          </ul>
        </div>
        <div class="menu" v-show="currentIndexL === 2">
          <ul>
            <li>显示</li>
            <li>隐藏</li>
          </ul>
        </div>
        <div class="import" v-show="currentIndexL === 3">
          <ul>
            <li>导入模块</li>
          </ul>
        </div>
        <div class="help" v-show="currentIndexL === 4">
          <ul>
            <li>aa</li>
            <li>bb</li>
            <li>cc</li>
            <li>dd</li>
            <li>ee</li>
            <li>ff</li>
            <li>gg</li>
            <li>ii</li>
          </ul>
        </div>
      </div>
      <div class="bookmarkList"></div>
    </div>
    <div class="main_content">
      <div class="homepageLeft" @click="addClass">
        <div class="function_introduction" >功能模块</div>
        <a v-for="(value,index) in name" :key="index" :style="image[index]" :index="index" :class="{active: index===currentIndex}">{{value}}</a>
      </div>
      <div class="homepageRight" >
        <div class="top">
          <ul>
            <li>{{name[currentIndex]}}</li>
          </ul>
        </div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
    </div>
    <div class="homepageFooter"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      companyName: '君临世界',
      name: ['生产模块', '客户供应商', '进销存管理', '人力资源', '财务管理', '会计凭证', '报表中心', '协同办公', '设备管理', '系统维护'],
      image: [
        {backgroundImage: 'url(' + require('../assets/image-list/0.png') + ')'},
        {backgroundImage: 'url(' + require('../assets/image-list/1.png') + ')'},
        {backgroundImage: 'url(' + require('../assets/image-list/2.png') + ')'},
        {backgroundImage: 'url(' + require('../assets/image-list/3.png') + ')'},
        {backgroundImage: 'url(' + require('../assets/image-list/4.png') + ')'},
        {backgroundImage: 'url(' + require('../assets/image-list/5.png') + ')'},
        {backgroundImage: 'url(' + require('../assets/image-list/6.png') + ')'},
        {backgroundImage: 'url(' + require('../assets/image-list/7.png') + ')'},
        {backgroundImage: 'url(' + require('../assets/image-list/8.png') + ')'},
        {backgroundImage: 'url(' + require('../assets/image-list/9.png') + ')'}
      ],
      isActive: 'active', // 选中样式类名
      index: 1,
      showIndex: '',
      currentIndex: 0, // 保存当前选中a标签的index
      currentIndexL: 0 // 保存当前选中li标签的index
    }
  },
  methods: {
    addClass (event) {
      let e = event || window.event
      this.currentIndex = e.target.getAttribute('index') * 1
    },
    toogle () {
      let e = event || window.event
      this.currentIndexL = e.target.getAttribute('index') * 1
    },
    show () {
      // 点击切换显示隐藏 并给对应的li增加active类
      let e = event || window.event
      this.currentIndexL = e.target.getAttribute('index') * 1
      // li点击后绑定onmouseover事件
      this.$refs.isBindMouseover.addEventListener('mouseover', this.toogle)
      // 给document绑定click监听取消onmouseover事件
      document.onclick = () => {
        this.$refs.isBindMouseover.removeEventListener('mouseover', this.toogle)
        document.onclick = null
        this.currentIndexL = 0
      }
    }
  },
  mounted () {

  },
  components: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .homepage
    width:100%
    height:100%
    .homepageHeader
      width:100%
      height:10%
      font:13px '微软雅黑'
      background: rgb(231,239,247)
      .companyName
        height:30%
        font-weight:bold
        background: rgb(206,223,239)
      .toolbar
        position:relative
        & li:hover
          background:deepskyblue
      .toolbar > ul > li
        height: 20px
        line-height: 20px
        text-align:center
        float:left
        list-style:none
        &[class=active]
          background:deepskyblue
        &:nth-of-type(1)
          width:59px
        &:nth-of-type(2)
          width:72px
        &:nth-of-type(3)
          width:85px
        &:nth-of-type(4)
          width:59px
      .toolbar > div
        width:140px
        border:1px solid gray
        background:rgb(231,239,247)
        position:absolute
        z-index:1
        &:nth-of-type(1)
          height:100px
          top:20px
          left:0
        &:nth-of-type(2)
          height:40px
          top:20px
          left:59px
        &:nth-of-type(3)
          height:20px
          top:20px
          left:131px
        &:nth-of-type(4)
          height:160px
          top:20px
          left:216px
        & > ul > li
          list-style:none
          padding-left: 30px
          height: 20px
          width: 110px
    .main_content
      position:relative
      width:100%
      height:85%
      .homepageLeft
        position:relative
        width:10%
        height:100%
        background: rgb(231,239,247)
        .function_introduction
          background:rgb(222,227,231)
          border-width:1px 0
          border-style:solid
          border-color:gray
          width:calc(100% - 12px)
          height:28px
          font:13px/28px '微软雅黑'
          text-align:center
        a
          display:block
          width:calc(100% - 12px)
          background-position:15px 8px
          background-repeat:no-repeat
          height:40px
          color:black
          font:17px/40px '微软雅黑'
          text-indent:50px
          &[class=active]
            background-color:rgb(156,178,214)
          &:hover
            background-color:gray
        &:after
          content:''
          position:absolute
          top:0
          right:0
          display:block
          height:100%
          width:10px
          background:rgb(239,247,255)
          border-width:0 1px
          border-color:rgb(206,219,239)
          border-style:solid
      .homepageRight
        position:absolute
        top:0
        right:0
        width:calc(90% - 2px)
        height:calc(100% - 7px)
        border:1px solid gray
        background: white
        .top
          background: rgb(222,227,231)
          height: 20px
          widht:100%
          & li
            display:block
            background:white
            height: 20px
            width: 70px
            text-align:center
            font:13px/20px '微软雅黑'
        .middle
          background:rgb(231,239,247)
          margin:8px 5px 0 5px
          border: 1px solid gray
          height:calc(100% - 37px)
          width:calc(100% - 12px)
    .homepageFooter
      width:100%
      height:calc(5% - 2px)
      border-width:1px 0
      border-style solid
      border-color gray
      background: rgb(247,243,247)
</style>
