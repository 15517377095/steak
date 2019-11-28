<template>
    <div class="list">
        <Header />
        <div class="container-fluid" id="seetype">
            <div class="row">
                <div class="col-md-10 offset-md-1 seetype-title">
                    <span class="seetype-title-b">正在浏览{{ typeName }}类型的游戏</span>
                    <span class="seetype-title-s">浏览最新、最热销和打折的 {{ typeName }} 产品</span>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-10 offset-md-1 bd-example">
                    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" :class="index == 0 ? 'active' : ''" v-for="(headerScrollGame,index) in headerScrollGames" :key="index" :data-slide-to="index"></li>
                        </ol>
                        <div class="carousel-inner">
                        <router-link :to="'/game/' + headerScrollGame.id" :class="index == 0 ? 'carousel-item active mdui-ripple' : 'carousel-item mdui-ripple'" v-for="(headerScrollGame,index) in headerScrollGames" :key="headerScrollGame.id">
                            <div class="carousel-item-imgbox">
                                <img :src="headerScrollGame.imgs" class="d-block w-100">
                            </div>
                            <div class="carousel-caption">
                                <h5>{{ headerScrollGame.name }}</h5>
                                <p>{{ headerScrollGame.introduction }} . . .</p>
                            </div>
                        </router-link>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row pattern"></div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10 col-lg-8 offset-0 offset-md-1">
                    <span class="list-title">搜索结果</span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 col-lg-8 offset-0 offset-md-1">
                    <span class="nogames" v-if="games == ''"><i class="fas fa-frown mr-2"></i>该分类暂无内容</span>
                    <router-link :to="'/game/' + game.id" class="item row mdui-ripple" v-for="game in games" :key="game.id">
                        <div class="col-auto pl-0 item-img">
                            <img :src="game.imgs" />
                        </div>
                        <div class="col-3 item-content">
                            <span>{{ game.name }}</span>
                            <span>{{ /^[0-9]+-[0-9]+-[0-9]+/ .exec(game.releasedate)[0] }} 上线</span>
                            <span>{{ game.type.name }}</span>
                        </div>
                        <div class="col-auto pl-0 pr-3 ml-auto item-price">
                            ￥ {{ game.money }}
                        </div>
                    </router-link>
                </div>
                <div class="col-md-10 col-lg-2 offset-0 offset-md-1 offset-lg-0">
                    <div class="types-list">
                        <router-link to="/list/free" class="types-list-item mdui-ripple">免费游玩</router-link>
                        <router-link to="/list/new" class="types-list-item mdui-ripple">抢先体验</router-link>
                        <router-link to="/list" class="types-list-item mdui-ripple">所有类型</router-link>
                        <router-link :to="'/list/' + gameType.id" class="types-list-item mdui-ripple" v-for="gameType in gameTypes" :key="gameType.id">
                            {{ gameType.name }}
                        </router-link>
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
            type: '',   //类型id
            typeName: '',   //类型名称
            headerScrollGames: [],
            games: [],
            gameTypes: []
        }
    },
    methods:{
        getHeaderScrollGames(){
            this.$http({
                method: 'post',
                url: '/game/getIndexScrollInfo'
            }).then((response) => {
                this.headerScrollGames=response.data;
            })
        },
        getGames(type){
            switch(type){
                case 'free':
                    this.$http({
                        method: 'post',
                        url: '/game/getAllFree'
                    }).then((response) => {
                        this.games=response.data;
                    })
                    break;
                case 'new':
                    this.$http({
                        method: 'post',
                        url: '/game/getAllOrderByNew'
                    }).then((response) => {
                        this.games=response.data;
                    })
                    break;
                case 'all':
                    this.$http({
                        method: 'post',
                        url: '/game/getAll'
                    }).then((response) => {
                        this.games=response.data;
                    })
                    break;
                default:
                    this.$http({
                        method: 'post',
                        params: {
                            type: this.type
                        },
                        url: '/game/getByType'
                    }).then((response) => {
                        this.games=response.data;
                    })
            }
        },
        getTypeAndGames(){
            var path=this.$route.path;
            var reg = /[0-9]+/    // 匹配id类型
            var regFree = /^\/list\/free/i   //匹配free类型
            var regNew = /^\/list\/new/i   //匹配new类型
            if(path.search(reg) >= 0){  //id
                this.type=path.match(reg)[0];
                this.getTypeName();
                this.getGames();
            }else if(path.search(regFree) >= 0){    //free
                this.typeName='免费';
                this.getGames('free');
            }else if(path.search(regNew) >= 0){ //new
                this.typeName='抢先体验';
                this.getGames('new');
            }else{  //all
                this.typeName='所有';
                this.getGames('all');
            }
        },
        getTypeName(){
            this.$http({
                method: 'post',
                params:{
                    id: this.type
                },
                url: '/type/getById'
            }).then((response) => {
                this.typeName=response.data.name;
            })
        },
        getGameTypes(){
            this.$http({
                method: 'post',
                url: '/type/getAll'
            }).then((response) => {
                this.gameTypes=response.data
            })
        }
    },
    mounted(){
        this.getTypeAndGames();
        this.getHeaderScrollGames();
        this.getGameTypes();
    },
    watch:{
        $route(from,to){
            this.getTypeAndGames();
        }
    }
}
</script>

<style src="../../assets/css/list.css" scoped></style>