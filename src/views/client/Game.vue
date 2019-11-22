<template>
    <div class="game">
        <Header />
        <div class="container-fluid">
            <div class="row">
                <div class="col" id="top_bg"></div>
            </div>
            <div class="row" id="top_nav">
                <div class="col offset-0 offset-sm-1">
                    <router-link to="/list" id="top_nav_type">游戏</router-link>
                    <i id="top_nav_fenge" class="fas fa-chevron-right"></i>
                    <router-link :to="'/list/' + game.type.id" id="top_nav_name">{{ game.type.name }}</router-link>
                    <i id="top_nav_fenge" class="fas fa-chevron-right"></i>
                    <span id="top_nav_name">{{ game.name }}</span>
                </div>
            </div>
            <div class="row" id="top_info">
                <div class="col-auto offset-0 offset-sm-1">
                    <div id="top_img" :style="'background:url(' + gameImgs[gameImgs.length-1] + ')'"></div>
                </div>
                <div class="col-auto">
                    <span id="top_name">{{ game.name }}</span>
                </div>
            </div>
        </div>
        <div class="container-fluid" id="game_details_all">
            <div class="row" id="main">
                <div class="col-sm-10 col-xl-7 offset-0 offset-sm-1 pl-0 pr-0">
                    <div id="main_imgs">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="4000">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" :class="index == 0 ? 'active' : ''" v-for="(gameImg,index) in gameImgs" :key="index" :data-slide-to="index"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div :class="index == 0 ? 'carousel-item active' : 'carousel-item'" v-for="(gameImg,index) in gameImgs" :key="index">
                                    <img :src="gameImg" class="d-block w-100" alt="scrollimg">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-10 col-xl-3 pl-0 pr-0 offset-0 offset-sm-1 offset-xl-0" id="main_game_message">
                    <div class="row s_message">
                        <div class="col-4">上架时间</div>
                        <div class="col-8">{{ game.releasedate }}</div>
                    </div>
                    <div class="row s_message">
                        <div class="col-4">开发商</div>
                        <div class="col-8">{{ game.developers }}</div>
                    </div>
                    <div class="row s_message">
                        <div class="col-4">运营商</div>
                        <div class="col-8">{{ game.publisher }}</div>
                    </div>
                    <div class="row" id="main_game_Introduction">
                        {{ game.introduction }}
                    </div>
                    <div class="row">
                        <div class="col-10 pl-0 d-none d-xl-block p-abs game_price_xl" id="game_price">￥{{ game.money }} RMB</div>
                        <div class="col-10 d-none d-xl-block p-abs join_shop_xl" id="join_shop">
                            <a href="#" >加入购物车</a><br/>
                            <input type="checkbox" checked="checked" /><span>已了解<a href="#">Steak协议</a></span>
                        </div>
                        <div class="col-10 pl-0 d-block d-xl-none" id="game_price">￥{{ game.money }} RMB</div>
                        <div class="col-6 d-block d-xl-none" id="join_shop">
                            <a href="#" >加入购物车</a><br/>
                            <input type="checkbox" checked="checked" /><span>已了解<a href="#">Steak协议</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-0 offset-sm-1 title">游戏详情</div>
                <div class="col-sm-10 col-xl-7 offset-0 offset-sm-1 pl-0 pr-0">
                    <textarea style="display:none"></textarea>  
                    <div id="test-editormd-view">
                        <textarea style="display:none">a</textarea>
                    </div>
                </div>
                <div class="col-sm-10 col-xl-3 offset-0 offset-sm-1 offset-xl-0">
                    <div class="row">
                        <div class="col-12 col-xl-11 offset-xl-1 title">语言支持</div>
                        <div class="col-12 col-xl-11 offset-xl-1 info_card">
                            <div class="row s_message" v-for="(gameLangage,index) in gameLangages" :key="index">
                                <div class="col-4">{{ gameLangage }}</div>
                                <div class="col-8">√</div>
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

import Editormd from '../../assets/lib/editormd.js'
import Marked from '../../assets/lib/marked.min.js'
import Prettify from '../../assets/lib/prettify.min.js'

export default {
    components: {
        Header,
        Bottom
    },
    data(){
        return {
            gameId: '',
            game: {id:'',type:{id:''}},
            gameImgs: [],
            gameLangages: []
        }
    },
    methods:{
        getGame(){
            this.$http({
                methods: 'post',
                params: {
                    id: this.gameId
                },
                url: '/api/game/getById'
            }).then((response) => {
                this.game=response.data
                this.gameImgs=this.game.imgs.split(";");  //拆分滚播图片
                this.gameLangages=this.game.language.split(";");  //拆分语言
                this.game.releasedate=/^[0-9]+-[0-9]+-[0-9]+/.exec(this.game.releasedate)[0];  //格式化日期
                $("#test-editormd-view textarea").text(this.game.mdfile);  //操作dom并转换md字符
                editormd.markdownToHTML("test-editormd-view");
            })
        },
        getGameId(){
            var path=this.$route.path;
            var reg = /[0-9]+/
            if(path.search(reg) >= 0){
                this.gameId=path.match(reg)[0];
                this.getGame();
            }
        }
    },
    mounted(){
        this.getGameId();
        $("html,body").animate({scrollTop:0},100); 
    },
    watch:{
        $route(from,to){
            
        }
    }
}
</script>

<style src="../../assets/css/editormd.min.css"></style>
<style src="../../assets/css/game.css" scoped></style>