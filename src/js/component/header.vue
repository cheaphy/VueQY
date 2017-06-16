<template>
    <div>
        <div class="topNavWrap-player" v-global-scroll="onScroll">
            <div class="navPlayer topNav-player" style="position:relative"  v-global-scroll="onScroll">
                <div class="navcont clearfix">
                    <ui-logo></ui-logo>
                    <div class="topNavMid">
                        <div class="dhome">
                            <a href="http://www.iqiyi.com/" title="返回爱奇艺首页" alt="返回爱奇艺首页"></a>
                        </div>
                        <div class="dhBox">
                            <div :class="['dhGuide', isShowNavList ? 'dhGuide_hover': '']" @click="onNavSwitchClick" v-global-close="onHide">
                                <div>导航</div>
                            </div>
                            <div class="ydBox">
                                <div class="gtips-bg"></div>
                                <div class="gtips-txt" v-show="isShowNavTip">
                                    <p><span>更多频道内容在这里查看</span>
                                        <a href="javascript:void(0);" class="xclose" rseat="知道了">知道了</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navboxFirst navboxFirst-channel navboxWx" data-widget-navctrl-elem="first" :style="{display: isShowNavList ? 'block' : 'none'}">
                        <div class="mod-navPop clearfix">
                            <div class="navPop_bd clearfix">
                                <ul v-for="(item, index) in navList" :class="item.cls + ' clearfix'">
                                    <li v-for="(jtem, jndex) in item.items" :class="jtem.cls">
                                        <a :href="jtem.url" @click="onNavItemClick(index, jndex)">
                                            {{jtem.text}}
                                            <i v-show="item.hoty" class="tip_dot"></i>
                                        </a>
                                    </li>        
                                </ul>
                            </div>
                            <!-- app download start -->
                            <div class="mod-appDownload-nav">
                                <a href="" pubarea="pcltdown_1501192" data-widget-geturl="layerDownloadUrl" class="appDownload-nav_img" title=""></a>
                                <p class="appDownload-nav_desc"><span>提高3倍流畅度！</span><a href="" pubarea="pcltdown_1501192" data-widget-geturl="layerDownloadUrl" class="appDownload-nav_link">立即下载</a></p>
                            </div>
                            <!-- app download end -->
                        </div>
                    </div>
                    <ui-login />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import uiLogo from "./ui/uiLogo.vue"
import uiLogin from "./ui/uiLogin.vue"
import "../directive/globalClose.js"
import "../directive/globalScroll.js"

export default {
    name: 'header',
    components: { uiLogo, uiLogin },
    created: function(){
    },
    data() {
        return {
            isShowNavList: false,
            isShowNavTip: false,
            navList : [
                {
                    cls: "nav_one",
                    items: [
                        {text: "娱乐", url: "http://yule.iqiyi.com", cls: ""},
                        {text: "体育", url: "http://yule.iqiyi.com", cls: ""},
                        {text: "资讯", url: "http://yule.iqiyi.com", cls: ""},
                    ]
                },
                {
                    cls: "nav_two",
                    items: [
                        {text: "电影", url: "http://yule.iqiyi.com", cls: ""},
                        {text: "电视剧", url: "http://yule.iqiyi.com", cls: "nav_3z", hot: 1},
                        {text: "片花", url: "http://yule.iqiyi.com", cls: ""},
                        {text: "综艺", url: "http://yule.iqiyi.com", cls: "nav_3z"},
                        {text: "网络电影", url: "http://yule.iqiyi.com", cls: ""},
                        {text: "脱口秀", url: "http://yule.iqiyi.com", cls: "nav_3z"},
                    ]
                }
            ]
        };
    },
    methods: {
        onScroll: function(){
            console.info("x,y1");
        },
        onHide: function(){
            if(this.isShowNavList){
                this.isShowNavList = false;   
            }
        },
        onNavItemClick: function(i, j){
            var item = null;
            if(this.navList[i] && this.navList[i].items && this.navList[i].items[j]){
                item = this.navList[i].items[j];
                item.hot = 0;
            }
            return true;
        },
        onNavSwitchClick: function(){
            this.isShowNavList = ! this.isShowNavList;
        }
    },
    ready: function(){
        var me = this;
        this._hideFunction = function(event){
            var e = event | window.event;
            var target = event.srcElement || event.target;
        }   
    },
    destroyed: function(){

    }
}
</script>