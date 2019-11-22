<template>
    <div class="index">
        <Header />
        <div class="container-fluid" id="header_scroll">
            <div class="row">
                <div class="col d-block d-lg-none" id="header_scroll_space"></div>
            </div>
            <div class="row">
                <div class="col" id="header_scroll_imgbox">
                    <div class="header_scroll_imgbox_item d-none" v-for="headerScrollGame in headerScrollGames" :key="headerScrollGame.id">
                        <img class="header_scroll_imgbox_img header_scroll_imgbox_img_an_source" :src="headerScrollGame.imgs" />
                        <div class="header_scroll_imgcontent p-abs">
                            <span class="header_scroll_imgcontent_name cur-d header_scroll_imgcontent_name_source">
                                {{ headerScrollGame.name }}
                            </span><br/>
                            <span class="header_scroll_imgcontent_message cur-d header_scroll_imgcontent_name_source">
                                {{ headerScrollGame.introduction }} . . .
                            </span><br/>
                            <router-link class="game_button opa-0" :to="'/game/' + headerScrollGame.id">了解更多</router-link>
                        </div>
                    </div>
                </div>
                <div id="header_scroll_conBtn">
                    <i @click="nextImgbox" id="header_scroll_conBtn_right" class="fa fa-chevron-right cur-p"></i>
                </div>
            </div>
        </div>

        <div class="container-fluid" id="new_games">
            <div class="row">
                <div id="new_games_title" class="col">
                    <span id="new_games_btitle">最新</span><br/>
                    <span id="new_games_stitle">新闻、精选、游戏与更多内容！</span>
                </div>
            </div>
            <div id="new_games_items"  class="row">
                <div :class="index==0||index==5 ? 'col-12 col-md-6 col-lg-'+6 : 'col-12 col-md-6 col-lg-'+3" v-for="(newGame,index) in newGames" :key="newGame.id">
                    <router-link :to="'/game/' + newGame.id" :style="'background:url(' + newGame.imgs + ')'" class="new_games_item cur-p">
                        <div class="row">
                            <div class="col-12 new_games_item_name">
                                {{ newGame.name }}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 new_games_item_message">
                                {{ newGame.introduction }} . . .
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 new_games_item_type">
                                <i class="fas fa-gamepad"></i>
                                <span class="space-5"></span>
                                <span>{{ newGame.type.name }}</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div id="main_login" class="col">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-0 col-md-6 col-lg-6"></div>
                            <div class="col-0 col-md-6 col-lg-4" id="main_login_content">
                                <span>加入社区<br/></span>
                                <span>定制体验<br/></span>
                                <span>拥有 Steak 帐户，即可关注游戏、视频和其他内容，让你的体验更加丰富独特。<br/></span>
                                <router-link to="/login" id="main_login_log">登陆</router-link>
                                <router-link to="/reg" id="main_login_reg">注册</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Bottom />
    </div>
</template>

<script>
import Header from './Header'
import Bottom from './Bottom'

export default {
    components: {
        Header,
        Bottom
    },
    data(){
        return {
            headerScrollGames: [{"id":'',"name":'',"introduction":'', "imgs":''}],
            newGames: []
        }
    },
    methods: {
        headerScrollAnim(){
            var sourceClassName="header_scroll_imgbox_img_an_source";
            var targetClassName="header_scroll_imgbox_img_an_target";
            var firstItem=$(".header_scroll_imgbox_item:first-child");
            firstItem.switchClass("d-none","d-block",0);
            next_imgbox_item();
            function next_imgbox_item(){
                var currentItem=$(".header_scroll_imgbox_item.d-block");
                var currentItem_img=currentItem.find(".header_scroll_imgbox_img");
                var currentItem_name=currentItem.find(".header_scroll_imgcontent_name");
                var currentItem_message=currentItem.find(".header_scroll_imgcontent_message");
                var currentItem_btn=currentItem.find(".game_button");
                currentItem_name.addClass("header_scroll_imgcontent_name_source",100);
                currentItem_message.addClass("header_scroll_imgcontent_name_source",100);
                currentItem_btn.addClass("opa-0",100);
                currentItem_img.addClass("opa-0",600,function(){
                    currentItem_img.switchClass(targetClassName,sourceClassName,0);
                    currentItem_img.removeClass("opa-0",0);
                    var nextItem=$(".header_scroll_imgbox_item.d-block + .header_scroll_imgbox_item");
                    if(nextItem.length==0){
                        nextItem=$(".header_scroll_imgbox_item:first-child");
                    }
                    var nextItem_img=nextItem.find(".header_scroll_imgbox_img");
                    var top=$(window).scrollTop();  //记录替换前的滚动条位置
                    nextItem.switchClass("d-none","d-block",0,function(){
                        currentItem.switchClass("d-block","d-none",0,function(){
                            $(window).scrollTop(top);  //还原位置
                        });
                    });
                    nextItem.addClass("opa-0",0);
                    nextItem.removeClass("opa-0",400,function(){
                        var nextItem_name=nextItem.find(".header_scroll_imgcontent_name");
                        var nextItem_message=nextItem.find(".header_scroll_imgcontent_message");
                        var nextItem_btn=nextItem.find(".game_button");
                        nextItem_name.removeClass("header_scroll_imgcontent_name_source",1000);
                        nextItem_message.removeClass("header_scroll_imgcontent_name_source",1200);
                        nextItem_btn.removeClass("opa-0",1000);
                        nextItem_img.switchClass(sourceClassName,targetClassName,4000,function(){
                            next_imgbox_item();
                        })
                    })
                })
            }
        },
        nextImgbox(){
            var nowAn=$(".header_scroll_imgbox_item.d-block").find(".header_scroll_imgbox_img");
            nowAn.stop(true,true);
        },
        winresizeForHeaderScroll(){
            var _this=this;
            window.addEventListener("resize",function(){
                _this.nextImgbox();
            })
        },
        getHeaderScrollGames(){
            this.$http({
                methods: 'post',
                url: '/api/game/getIndexScrollInfo'
            }).then((response) => {
                this.headerScrollGames=response.data;
            })
        },
        getIndexNewGames(){
            this.$http({
                methods: 'post',
                url: '/api/game/getIndexNewInfo'
            }).then((response) => {
                this.newGames=response.data;
            })
        }
    },
    mounted(){
        this.winresizeForHeaderScroll();
        this.getHeaderScrollGames();
        this.getIndexNewGames();
        this.headerScrollAnim();
    }
}
</script>

<style src="../../assets/css/index.css" scoped></style>