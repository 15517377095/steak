<template>
    <div class="gameManage">
        <Header />
        <div class="container-fluid">
            <div class="row mt-4">
                <div class="col-auto offset-xl-1 title anim-2">用户管理</div>
                <div class="col-auto ml-auto">
                    <span class="nav-root">Steak</span>
                    <i class="nav-ico fas fa-angle-right"></i>
                    <span class="nav-child">用户管理</span>
                </div>
                <div class="col-0 col-xl-1" />
            </div>
            <div class="row mt-4">
                <div class="col-12 offset-xl-1 anim-2">
                    <div class="system-info-box">
                        <span class="info-title">用户总数</span>
                        <span class="info-logo mdui-ripple">
                            <i class="fas fa-layer-group"></i>
                        </span><br/>
                        <span class="info-num">{{ gameCount }}</span><br/>
                        <span class="info-scoll">
                            <span class="info-scroll-have" :style="'width:' + (1+gameCount/10000) + '%'"></span>
                        </span><br/>
                        <span class="info-scrollinfo">存储占比</span>
                        <span class="info-scrollbl">＜{{ Math.ceil(gameCount/10000) }} %</span>
                    </div>
                    <div class="add-box">
                        <span class="add-title">注册用户</span>
                        <router-link to="/reg" class="add-logo anim-2 mdui-ripple">
                            <i class="fas fa-plus"></i>
                        </router-link><br/>
                        <hr/>
                        <span class="add-title">查看所有</span>
                        <a class="look-logo anim-2 mdui-ripple" href="#game-table">
                            <i class="fas fa-angle-double-down"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row mt-4 pl-3 pr-3" id="game-table">
                <div class="col-xl-10 offset-xl-1 game-table anim-2">
                    <div class="table-title">用户列表</div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">邮箱</th>
                                <th scope="col">密码</th>
                                <th scope="col">用户组</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="game in games" :key="game.id">
                                <th scope="row">{{ game.id }}</th>
                                <td>{{ game.email }}</td>
                                <td>{{ game.password }}</td>
                                <td>
                                    <span v-if="game.permissions == 1">管理员</span>
                                    <span v-if="game.permissions == 0">普通用户</span>
                                </td>
                                <td>
                                    <button class="edit-btn">修改</button>
                                    <button class="delete-btn" mdui-dialog="{target: '#exampleDialog'}" @click="willDeleteId = game.id">删除</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- 删除确定模态框 -->
        <div class="mdui-dialog" id="exampleDialog">
            <div class="mdui-dialog-title">确认删除？</div>
            <div class="mdui-dialog-content">您将删除 ID 为 {{ willDeleteId }} 的记录</div>
            <div class="mdui-dialog-actions">
                <button class="mdui-btn mdui-ripple" mdui-dialog-close>取消</button>
                <button class="mdui-btn mdui-ripple" mdui-dialog-confirm @click="deleteById">确认</button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import mdui from 'mdui/dist/js/mdui.min.js'

export default {
    components:{
        Header
    },
    data(){
        return{
            gameCount: 0,
            games: [],
            willDeleteId: null
        }
    },
    methods:{
        getGames(){
            this.$http({
                method: 'post',
                url: '/user/getAll'
            }).then((response) => {
                this.games=response.data;
                this.gameCount=this.games.length;
            })
        },
        deleteById(){
            this.$http({
                method: 'post',
                params:{
                    id: this.willDeleteId
                },
                url: '/user/deleteById'
            }).then((response) => {
                this.getGames();
                mdui.snackbar({
                    message: '已删除',
                    position: 'right-bottom'
                });
            })
        }
    },
    mounted(){
        this.getGames();
    }
}
</script>

<style src="../../assets/adminCss/gameManage.css"></style>