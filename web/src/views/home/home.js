import { queryUserData } from '@/api/user/index.js'
import { getCookie, setCookie } from '@/utils/util'

export default {
  data() {
    return {
      userName: '',
      userId: null,
      picture: '', // 用户头像
      theme: 0, // 当前主题，0白色/1黑色
      themeType: 2, // 当前主题，0白色/1黑色/2自动
      autoThemeTimer: null,
      t: 0, // 语言：0中文，1英文
      searchNameArr: ['L', 'G', 'B', 'BD', '360', 'S', 'Y', 'D', 'W'],
      searchType: 1,
      searchValue: '',

      searchAreaBoxWidth: '100%',
      searchAreaPrtWidth: 'none',
      searchAreaWidth: '740px',
      areaContainerWidth: '800px',
      searchInputWidth: '640px',

      showSearchType: false,
      showCogBox: false,
      showMark: true,
      showUserBox: false,
      showCogBox: false,
      loading: true
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
            this.refreshUserCustomData(res.data)
            // todo 查询用户的收藏夹信息
            this.refreshUserFavoriteData()
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
    refreshUserCustomData(userData) {
      this.searchType = userData.searchType
      this.t = userData.localType
      this.themeType = userData.themeType
      this.autoTheme()
      // 用户头像设置
      this.picture = userData.headImgUrl
      this.userName = userData.userName
      console.log(this.themeType)
    },
    refreshUserFavoriteData() {

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
        this.setThemeDark()
      } else {
        this.setThemeLight()
      }
      // todo clearInterval(this.autoThemeTimer)
    },
    setThemeLight() {
      // todo 修改css样式
      this.theme = 0
      console.log(this.theme)
      document.querySelector("html").setAttribute("style", "background-color:#ffffff;")
    },
    setThemeDark() {
      // todo 修改css样式
      this.theme = 1
      console.log(this.theme)
      document.querySelector("html").setAttribute("style", "background-color:#17191a;")
    },
    changeTheme(themeVal) {
      this.themeType = themeVal
      this.autoTheme()
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

    },
    changeType(searchVal) {
      this.searchType = searchVal
      this.$refs.searchInputRef.focus()
      this.showSearchType = !this.showSearchType
    },
    search() {
      let url = "";
      let isLoacl = false;
      let key = this.searchValue
      key = flagReplace(key)
      if (this.searchType == '0') {
        isLoacl = true;
      } else if (this.searchType == '1') {
        url = "https://www.google.com/search?q=" + key
      } else if (this.searchType == '2') {
        url = "https://www.bing.com/search?q=" + key
      } else if (this.searchType == '3') {
        url = "https://www.baidu.com/s?wd=" + key
      } else if (this.searchType == '4') {
        url = "https://www.so.com/s?q=" + key
      } else if (this.searchType == '5') {
        url = "https://www.sogou.com/web?query=" + key
      } else if (this.searchType == '6') {
        url = "https://www.yahoo.com/search?p=" + key
      } else if (this.searchType == '7') {
        url = "https://www.duckduckgo.com/?q=" + key
      } else if (this.searchType == '8') {
        url = this.t == 0 ? "https://zh.wikipedia.org/wiki/" + key
                            : "https://en.wikipedia.org/wiki/" + key
      } else {
        url = "https://www.google.com/search?q=" + key
      }
      if (!isLoacl) {
        window.open(url, "_blank")
      } else {
        // 搜索本地
      }
    },
    flagReplace(key) {
      key = key.replace("!", "%21")
      key = key.replace("@", "%40")
      key = key.replace("#", "%23")
      key = key.replace("$", "%24")
      key = key.replace("%", "%25")
      key = key.replace("^", "%5E")
      key = key.replace("&", "%26")
      key = key.replace("(", "%28")
      key = key.replace(")", "%29")

      key = key.replace("[", "%5B")
      key = key.replace("]", "%5D")
      key = key.replace("{", "%7B")
      key = key.replace("}", "%7D")
      key = key.replace(";", "%3B")
      key = key.replace("'", "%27")
      key = key.replace(":", "%3A")
      key = key.replace(",", "%2C")
      key = key.replace("/", "%2F")
      key = key.replace("?", "%3F")
      key = key.replace("\\", "%5C")
      key = key.replace("|", "%7C")
      key = key.replace("`", "%60")

      return key
    },
    showCateBox() {

    },
    closeEditMode() {

    },
    setPass() {

    },
    logout() {

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