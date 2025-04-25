<template>
  <div>
    <div class="pt-r" style="min-height: 85vh;">
      <div class="search-head">
        <div class="search-div">
          <div class="new-container header-container">
            <div>
              <div class="head-div m-l-20 f-l">
                <a href="https://favorsites.com" target="_self">
                  <img class="mark-icon" src="@/assets/images/icons/favorsites.png" alt="favorsites"
                    v-show="showMark" />
                </a>
              </div>
              <div class="m-t-10 m-r-20 f-r pt-r d-f userinfo-box">
                <div>
                  <button type="button" class="home-btn1 m-r-10" @click="changeLanguage">{{ this.LOCAL.lbh[t] }}</button>
                </div>
                <div v-if="userName != '' && picture != ''" @click="showUserBox = !showUserBox">
                  <img class="login-pic b-r-5" :src="picture" :title="userName" />
                </div>
                <div v-if="userName != '' && picture == ''" class="no-head-img" @click="showUserBox = !showUserBox">
                  <span class="icon-user-5"></span>
                </div>
                <div v-show="showUserBox" v-if="userName != ''" class="login-box"
                  :style="this.STYLES.loginBoxStyle[theme]">
                  <div v-if="picture != ''">
                    <img class="login-box-img" :src="picture" :title="userName" />
                  </div>
                  <div v-if="picture == ''" class="no-head-img-big">
                    <span class="icon-user-5"></span>
                  </div>
                  <div class="login-box-name">{{ userName }}</div>
                  <div class="login-box-logout">
                    <input type="radio" class="div-cursor" id="theme1" value="0" v-model="themeType"
                      @change="changeTheme(0)" />
                    <label for="theme1" class="div-cursor" style="padding-right:5px;">{{ ' ' +
                      this.LOCAL.themeLight[t] }}</label>
                    <input type="radio" class="div-cursor" id="theme2" value="1" v-model="themeType"
                      @change="changeTheme(1)" />
                    <label for="theme2" class="div-cursor" style="padding-right:5px;">{{ ' ' +
                      this.LOCAL.themeDark[t] }}</label>
                    <input type="radio" class="div-cursor" id="theme3" value="2" v-model="themeType"
                      @change="changeTheme(2)" />
                    <label for="theme3" class="div-cursor">{{ ' ' + this.LOCAL.themeAuto[t]
                    }}</label>
                  </div>
                  <div class="login-box-logout">
                    <button type="button" class="edit-btn b-r-5 btn-merge" :style="this.STYLES.editBtnStyle1[theme]"
                      @click="showUpdate">
                      <span class="icon-th-list-2">{{ ' ' + this.LOCAL.updateMemo[t] }} </span>
                    </button>
                  </div>
                  <div class="login-box-logout">
                    <button type="button" class="edit-btn b-r-5 btn-merge" :style="this.STYLES.editBtnStyle1[theme]"
                      @click="setPass">
                      <span class="icon-key">{{ ' ' + this.LOCAL.setpass[t] }} </span>
                    </button>
                  </div>
                  <div class="login-box-logout">
                    <button type="button" class="edit-btn b-r-5 btn-logout" :style="this.STYLES.editBtnStyle1[theme]"
                      @click="logout">
                      <span class="icon-logout">{{ this.LOCAL.lob[t] }} </span>
                    </button>
                  </div>
                </div>
                <div v-if="userName == ''">
                  <button type="button" class="home-btn2 m-r-5" @click="showLogin">{{ this.LOCAL.lb[t]
                  }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 搜索区域  start -->
        <div class="search-area-box" :style="{ width: searchAreaBoxWidth }">
          <div class="area-container new-container pt-r" :style="{ maxWidth: searchAreaPrtWidth }">
            <div class="d-f search-area" :style="{ maxWidth: searchAreaWidth }">
              <div>
                <button type="button" class="search-type" :style='this.STYLES.searchTypeStyle[theme]'
                  @click="showSearchType = !showSearchType">
                  <span class="search-type-title">{{ searchNameArr[searchType] }}</span>
                </button>
              </div>
              <div><input type="text" class="search-input" id="searchInput" autocomplete="off" v-model="searchValue"
                  :style="[this.STYLES.searchInputStyle[theme], { maxWidth: searchInputWidth }]" />
              </div>
              <div>
                <button type="button" class="search-btn" :style="this.STYLES.searchBtnStyle[theme]" @click="search()">
                  <span class="icon-search"></span>
                </button>
              </div>
            </div>
            <div v-show="showSearchType" class="search-type-box" :style="this.STYLES.searchTypeBoxStyle[theme]">
              <div class="">
                <button type="button" class="search-type-btn" @click="changeType(1)"
                  :style="this.STYLES.searchTypeBtnStyle[theme]">Google</button>
              </div>
              <div class="">
                <button type="button" class="search-type-btn" @click="changeType(7)"
                  :style="this.STYLES.searchTypeBtnStyle[theme]">DuckDuckGo</button>
              </div>
              <div class="">
                <button type="button" class="search-type-btn" @click="changeType(8)"
                  :style="this.STYLES.searchTypeBtnStyle[theme]">Wikipedia</button>
              </div>
              <div class="">
                <button type="button" class="search-type-btn" @click="changeType(2)"
                  :style="this.STYLES.searchTypeBtnStyle[theme]">Bing</button>
              </div>
              <div class="">
                <button type="button" class="search-type-btn" @click="changeType(3)"
                  :style="this.STYLES.searchTypeBtnStyle[theme]">Baidu</button>
              </div>
              <div class="">
                <button type="button" class="search-type-btn" @click="changeType(4)"
                  :style="this.STYLES.searchTypeBtnStyle[theme]">360</button>
              </div>
              <div class="">
                <button type="button" class="search-type-btn" @click="changeType(5)"
                  :style="this.STYLES.searchTypeBtnStyle[theme]">Sogou</button>
              </div>
              <div class="">
                <button type="button" class="search-type-btn" @click="changeType(6)"
                  :style="this.STYLES.searchTypeBtnStyle[theme]">Yahoo</button>
              </div>
              <div class="">
                <button type="button" class="search-type-btn" @click="changeType(0)"
                  :style="this.STYLES.searchTypeBtnStyle[theme]">Local</button>
              </div>
            </div>
          </div>
        </div>
        <!-- 搜索区域  end -->
      </div>
      <div style="height:150px;"></div>
    </div>
  </div>
</template>
<script>
import { queryUserData } from '@/api/user/index.js'
import { getCookie, setCookie } from '@/utils/util'

export default {
  data() {
    return {
      picture: '', // 用户头像
      theme: 0, // 当前主题，0白色/1黑色
      themeType: 2, // 当前主题，0白色/1黑色/2自动
      t: 0, // 语言：0中文，1英文
      userName: '',
      searchAreaBoxWidth: '100%',
      searchAreaPrtWidth: 'none',
      searchAreaWidth: '740px',
      searchNameArr: ['L', 'G', 'B', 'BD', '360', 'S', 'Y', 'D', 'W'],
      searchType: 1,
      searchValue: '',
      searchInputWidth: '640px',
      showSearchType: false,
      showMark: true,
      autoThemeTimer: null,
      userId: null
    }
  },
  created() {
    // 设置系统主题（亮色或暗色）
    this.autoTheme()
    // 页面数据初始化
    this.initPage()
  },
  methods: {
    initPage() {
      setCookie("_UID", "1")
      // 设置语言
      this.initLocale()
      // 根据浏览器宽度自动调整显示内容
      this.setWindowWidth()
      // 初始化用户信息
      this.initUserInfo()
    },
    initUserInfo() {
      // 首先就是获取cookie，从cookie中获取用户信息
      let cookie = document.cookie
      // 判断用户信息是否为空，如果为空，就表示用户还没登录，
      // 不需要去查询后端接口，所有内容只需要默认即可
      if (cookie != null && cookie != '') {
      // 如果用户信息不为空，直接根据用户ID查询相关数据
      // （语言、主题、用户信息（用户名、收藏夹及保存网站信息）等等）
        this.userId = getCookie('_UID')
      }
      // 执行查询用户信息
      this.handleUserData(this.userId)
    },
    handleUserData(userId) {
      if (userId != null && userId != '') {
        // 根据用户id查询用户信息
        queryUserData(userId).then(res => {
          if (res.data != null) {
            console.log(res.data)
            // todo 根据用户信息再初始化相关数据（语言、主题、搜索等等）

            // todo 查询用户的收藏夹信息

          } else {
            // 用户信息是空，所有设置均为默认
            this.showDefaultInfo()
          }
        })
      } else {
        // 用户id是空，所有设置均为默认
        this.showDefaultInfo()
      }
    },
    showDefaultInfo() {
      // 语言是默认，比如显示中文
      // 主题是默认，显示自动
      // todo 收藏夹的展示信息也是默认

    },
    initLocale() {
      // 提前写好多种语言作为常量
      // 当用户切换语言的时候，直接获取并替换
    },
    setWindowWidth() {
      this.w = $(window).width();
      const width = this.w
      this.showMark = true
      this.showMin = false
      this.showHeit = true
      this.showMinCopy = false
      this.searchAreaBoxWidth = '100%'
      // $('.copyright-text').css('padding-top', '18px').css('margin-left', '30px');
      if (width > 1100) {
        this.widthNum = 0
        this.searchAreaWidth = '740px'
        this.searchInputWidth = '640px'
        this.areaContainerWidth = '800px'
        this.searchAreaPrtWidth = ''
      }
      if (width > 1000 && width <= 1100) {
        this.widthNum = 1
        this.searchAreaWidth = '700px'
        this.searchInputWidth = '600px'
        this.areaContainerWidth = 'none'
        this.searchAreaPrtWidth = '700px'
      }
      if (width > 900 && width <= 1000) {
        this.widthNum = 2
        this.searchAreaWidth = '600px'
        this.searchInputWidth = '500px'
        this.areaContainerWidth = 'none'
        this.searchAreaPrtWidth = '600px'
      }
      if (width > 800 && width <= 900) {
        this.widthNum = 3
        this.searchAreaWidth = '500px'
        this.searchInputWidth = '400px'
        this.areaContainerWidth = 'none'
        this.searchAreaPrtWidth = '500px'
      }
      if (width > 700 && width <= 800) {
        this.widthNum = 4
        this.searchAreaWidth = '400px'
        this.searchInputWidth = '300px'
        this.areaContainerWidth = 'none'
        this.searchAreaPrtWidth = '400px'
      }
      if (width > 600 && width <= 700) {
        this.widthNum = 5
        this.searchAreaWidth = '300px'
        this.searchInputWidth = '200px'
        this.areaContainerWidth = 'none'
        this.searchAreaPrtWidth = '300px'
      }
      if (width > 500 && width <= 600) {
        this.widthNum = 6
        this.searchAreaWidth = '200px'
        this.searchInputWidth = '100px'
        this.areaContainerWidth = 'none'
        this.searchAreaPrtWidth = '200px'
        this.showMin = true
      }
      if (width > 420 && width <= 500) {
        this.widthNum = 7
        this.searchAreaWidth = '180px'
        this.searchInputWidth = '80px'
        this.areaContainerWidth = 'none'
        this.searchAreaPrtWidth = '180px'
        this.showMin = true
      }
      if (width <= 420) {
        this.widthNum = 8
        this.showMark = false
        let ww = width - 165
        this.searchAreaWidth = (width - 165) + 'px'
        this.searchInputWidth = (width - 265) + 'px'
        this.areaContainerWidth = width + 'px'
        this.searchAreaPrtWidth = width + 'px'
        this.showMin = true
        // this.showHeit = false
        this.showMinCopy = true
        this.searchAreaBoxWidth = ww + 'px'
      }
    },
    changeLanguage() {
      console.info("修改语言")
      if (this.t == 0) {
        this.t = 1
      } else {
        this.t = 0
      }
      // todo 如果是登录用户，需要将t值上传到服务端保存，下次用户登录后直接切换为用户的语言

    },
    showLogin() {
      // this.$refs.login.showLogin()
    },
    autoTheme() {
      // 先获取系统的时间
      const date = new Date()
      const nowTime = date.getHours()
      if (this.themeType == 2) {
        // 判断当前时间，比如早6到晚6，使用亮色，否则就使用暗色
        this.autoThemeTimer = setInterval(() => {
          if (nowTime >= 6 && nowTime <= 18) {
            // 将系统主题设置成亮色
            setThemeLight()
          } else {
            // 将系统主题设置成暗色
            setThemeDark()
          }
        }, 1000 * 60 * 10)
      } else if (this.themeType == 1) {
        setThemeDark()
      } else {
        setThemeLight()
      }
      // todo clearInterval(this.autoThemeTimer)
    },
    setThemeLight() {
      // todo 修改css样式
    },
    setThemeDark() {
      // todo 修改css样式
    },
    showUpdate() {
      if (process.env.NODE_ENV === 'development') {
        if (this.t == 0) {
          window.open("http://localhost:8081/update_cn", "_blank");
        } else if (this.t == 1) {
          window.open("http://localhost:8081/update_en", "_blank");
        }
      } else {
        if (this.t == 0) {
          window.open("https://favorsites.com/update_cn", "_blank");
        } else if (this.t == 1) {
          window.open("https://favorsites.com/update_en", "_blank");
        }
      }

    }
  },
  mounted: function () {
    // 监听用户是否手动调整浏览器窗口大小
    // 如果有调整则实时调用遄显示的内容
    window.onresize = () => {
      this.setWindowWidth()
    }
  }
}
</script>
<style>
.mark-icon {
  width: 120px;
}

.min-category-icon {
  width: 50px !important;
  padding: 11px 0 !important;
  font-size: 24px !important;
  border-radius: 5px !important;
  -webkit-border-radius: 5px !important;
  -moz-border-radius: 5px !important;
}

.min-copy-text {
  padding-top: 8px !important;
  margin-left: 0 !important;
}
</style>