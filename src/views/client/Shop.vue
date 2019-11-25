<template>
    <div class="shop">
        <Header />
            <div class="container-fluid" id="all">
                <div class="row">
                    <div class="col-10 offset-lg-1 from-title">我的购物车</div>
                </div>
                <!-- 购物车空 -->
                <div class="row" v-if="shops == ''">
                    <div class="col-auto ml-auto mr-auto nullcar cur-d">
                        <i class="fas fa-shopping-cart"></i>
                        <span>购物车为空</span>
                    </div>
                </div>
                <div class="row pl-3 pr-3" v-for="shop in shops" :key="shop.id">
                    <div class="col-md-10 col-lg-8 offset-lg-1" >
                        <div class="item row mdui-ripple">
                            <div class="col-auto pl-0 item-img">
                                <img :src="shop.game.imgs" />
                            </div>
                            <div class="col-3 item-content">
                                <span>{{ shop.game.name }}</span>
                                
                            </div>
                            <div class="col-auto pl-0 pr-3 ml-auto item-price">
                                ￥ {{ shop.game.money }}
                            </div>
                        </div>
                    </div>
                    <div class="col-auto delete-box mdui-ripple" @click="deleteById(shop.id)">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
            </div>
        <Bottom />
    </div>
</template>

<script>
import Header from './Header'
import Bottom from './Bottom'
import mdui from 'mdui/dist/js/mdui.min.js'

export default {
    components: {
        Header,
        Bottom
    },
    data(){
        return{
            shops: '',
            loginUser: ''
        }
    },
    methods:{
        getLoginUser(){
            this.$http({
                methods: 'post',
                url: '/api/user/getLoginUser'
            }).then((response) => {
                this.loginUser=response.data;
                if(this.loginUser == ''){
                    this.$router.push({path:"/login"});
                    mdui.snackbar({
                        message: '登录后可以使用购物车',
                        position: 'right-bottom'
                    });
                    return;
                }
                this.getShops();
            })
        },
        getShops(){
            this.$http({
                methods: 'post',
                params: {
                    id: this.loginUser.id
                },
                url: '/api/shop/gatByUserId'
            }).then((response) => {
                this.shops=response.data;
            })
        },
        deleteById(shopId){
            this.$http({
                methods: 'post',
                params: {
                    id: shopId
                },
                url: '/api/shop/deleteById'
            }).then((response) => {
                this.getShops();
                mdui.snackbar({
                    message: '已删除',
                    position: 'right-bottom'
                });
            })
        }
    },
    mounted(){
        this.getLoginUser();
    }
}
</script>

<style src="../../assets/css/shop.css" scoped></style>