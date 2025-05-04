<template>
  <div>
    <div class="pt-r" style="min-height: 85vh;">
      <div class="search-head">
        <div class="search-div" :style="this.STYLES.searchDivStyle[theme]">
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
                  <button type="button" class="home-btn1 m-r-10" @click="changeLanguage"
                   :style="this.STYLES.homeBtn1Style[theme]">{{ this.LOCAL.lbh[t] }}</button>
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
              <div><input ref="searchInputRef" type="text" class="search-input" id="searchInput" autocomplete="off" v-model="searchValue"
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
      <!--收藏夹整体区域-->
      <div class="category-body">
        <div class="area-container new-container" v-bind:style="{ maxWidth: areaContainerWidth }">
          <div class="pt-r">
            <div class="week-hot-title c-183a3a t-a-l m-l-30" :style="this.STYLES.weekHotTitleStyle[theme]">
              <div class="f-l m-t-3">
                <span class="div-cursor top-1 f-s-16 c-183a3a" :style="this.STYLES.c183Style[theme]"
                      @click="showCateBox(1)">{{ this.LOCAL.tb11[t] }}</span>
                <span class="div-cursor top-2 m-l-20 f-s-16 c-969696" 
                      @click="showCateBox(2)">{{ this.LOCAL.tb12[t] }}</span>
              </div>
              <!-- 文件夹控制面板 -->
              <div v-show="showCogBox" class="pt-a edit-btn-box b-r-5" 
                    :style="this.STYLES.editBtnBoxStyle[theme]">
                <div class="edit-btn-div">
                  <button type="button" class="edit-btn b-r-5 btn-sort" :style="this.STYLES.editBtnStyle[theme]"
                          @click="openEditMode('.sort-box')">
                    <span class="icon-sort">{{ this.LOCAL.bsort[t] }}</span>
                  </button>
                </div>
                <div class="edit-btn-div">
                  <button type="button" class="edit-btn b-r-5 btn-delete" :style="this.STYLES.editBtnStyle[theme]"
                          @click="openEditMode('.delete-box')">
                    <span class="icon-trash">{{ this.LOCAL.bdel[t] }}</span>
                  </button>
                </div>
                <div class="edit-btn-div">
                  <button type="button" class="edit-btn b-r-5 btn-edit" :style="this.STYLES.editBtnStyle[theme]"
                          @click="openEditMode('.edit-box')">
                    <span class="icon-edit">{{ this.LOCAL.bedit[t] }}</span>
                  </button>
                </div>
                <div class="edit-btn-div">
                  <button type="button" class="edit-btn b-r-5 btn-add" :style="this.STYLES.editBtnStyle[theme]"
                          @click="openEditMode('.add-box')">
                    <span class="icon-plus">{{ this.LOCAL.bnew[t] }}</span>
                  </button>
                </div>
              </div>
              <div class="f-r m-l-20 m-t-6">
                <span class="icon-cog-1 f-s-16 c-969696 div-cursor btn-cog" @click="showCogBox=!showCogBox"></span>
                <span class="icon-ok-circle f-s-16 c-2880cc div-cursor btn-done d-n" @click="closeEditMode"></span>
              </div>
            </div>
          </div>
        </div>
        <!--收藏夹展示区域-->
        <div class="area-container new-container area-box-1" v-bind:style="{maxWidth: areaContainerWidth}">
          <div class="category-area">
            <div class="loading-div" v-show="loading">
              <!-- <img src="@/assets/images/icons/loading-1.gif" /> -->
            </div>
            <div class="favor-box">
              <!--展示收藏夹及网站的地方，需要通过循环语句（v-for）动态展示-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeJs from '@/views/home/home.js'
export default {
  ...homeJs
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