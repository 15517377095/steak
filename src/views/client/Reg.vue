<template>
    <div class="reg">
        <Header />
        <div class="container-fluid" id="all">
            <div class="row">
                <div class="col-10 offset-lg-1 from-title">创建帐户</div>
            </div>
            <div class="row pl-3 pr-3">
                <div class="col-12 col-lg-7 offset-lg-1 reg-form-box">
                    <div class="row">
                        <div class="col-7">
                            <div class="mdui-textfield mdui-textfield-floating-label">
                                <label class="mdui-textfield-label">您当前的电子邮件地址</label>
                                <input v-model="regForm.email" class="mdui-textfield-input" type="email" required/>
                                <div class="mdui-textfield-error">邮箱格式错误</div>
                            </div>
                        </div>
                        <div class="col-5 input-info pl-0">
                            您的电子邮件地址用于确认购买并帮助您管理对 Steam 帐户的访问。
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-7">
                            <div class="mdui-textfield mdui-textfield-floating-label">
                                <label class="mdui-textfield-label">输入密码</label>
                                <input v-model="regForm.password" class="mdui-textfield-input" type="password" pattern="^.*(?=.{6,}).*$" required/>
                                <div class="mdui-textfield-error">请输入至少 6 位字符</div>
                            </div>
                        </div>
                        <div class="col-5 input-info pl-0">
                            您的密码将作为登录平台时唯一的身份凭证，请谨慎输入并妥善保管。
                        </div>
                    </div>
                    <div class="row hr-row" />
                    <div class="row">
                        <div class="col">
                            <div id="dragverify"></div>
                        </div>
                    </div>
                    <div class="row hr-row" />
                    <div class="row">
                        <div class="col-12 xy-title">
                            请复查以上协议，并通过选择页面底部的复选框同意此协议。 您必须同意这些协议条款才能继续。
                        </div>
                        <div class="col-12">
                            <div class="xy-box">
                            <h4>STEAK® SUBSCRIBER AGREEMENT</h4>
                            <ol class="pl-3">
                                <li>Registration as a subscriber; application of terms to you; your account</li>
                                <li>Licenses</li>
                                <li>Billing, payment and other subscriptions</li>
                                <li>Online conduct, cheating and illegal behavior</li>
                                <li>Third-party content</li>
                                <li>User generated content</li>
                                <li>Disclaimers; limitation of liability; no guarantees; limited warranty & agreement</li>
                                <li>Amendments to this agreement</li>
                                <li>Term and termination</li>
                                <li>Applicable law/mediation/jurisdiction/attorney’s fees</li>
                                <li>Dispute resolution/binding arbitration/class action waiver</li>
                                <li>Miscellaneous</li>
                            </ol>
                            <p>This Steam Subscriber Agreement ("Agreement") is a legal document that explains your rights and obligations as a subscriber of Steam from Valve Corporation, a corporation under the laws of the State of Washington, with its registered office at 10400 NE 4th St., Bellevue, WA 98004, United States, registered with the Washington Secretary of State under number 60 22 90 773, VAT ID No. EU 8260 00671 ("Valve"). Please read it carefully.SECTION 11 CONTAINS A BINDING ARBITRATION AGREEMENT AND CLASS ACTION WAIVER. IT AFFECTS HOW DISPUTES ARE RESOLVED. PLEASE READ IT. IF YOU LIVE IN THE PROVINCE OF QUEBEC (CANADA) OR THE EUROPEAN UNION, SECTION 11 DOES NOT APPLY TO YOU.</p>
                            <p>As a Subscriber you may obtain access to certain services, software and content available to Subscribers. The Steam client software and any other software, content, and updates you download or access via Steam, including but not limited to Valve or third-party video games and in-game content, software associated with Hardware and any virtual items you trade, sell or purchase in a Steam Subscription Marketplace are referred to in this Agreement as "Content and Services;" the rights to access and/or use any Content and Services accessible through Steam are referred to in this Agreement as "Subscriptions."Each Subscription allows you to access particular Content and Services. Some Subscriptions may impose additional terms specific to that Subscription ("Subscription Terms") (for example, an end user license agreement specific to a particular game, or terms of use specific to a particular product or feature of Steam). Also, additional terms (for example, payment and billing procedures) may be posted on http://www.steampowered.com or within the Steam service ("Rules of Use"). Rules of Use include the Steam Online Conduct Rules http://steampowered.com/index.php?area=online_conduct and the Steam Refund Policy http://store.steampowered.com/steam_refunds. The Subscription Terms, the Rules of Use, and the Valve Privacy Policy (which can be found at http://www.valvesoftware.com/privacy.htm) are binding on you once you indicate your acceptance of them or of this Agreement, or otherwise become bound by them as described in Section 8 (Amendments to this Agreement).</p>
                            </div>
                        </div>
                        <div class="col-12 form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" @click="changeAgree">
                            <label class="form-check-label" for="defaultCheck1">我同意并且已年满 13 周岁</label>
                        </div>
                        <div class="col-12">
                            <button class="sub-btn mdui-ripple" @click="regUser">注册</button>
                        </div>
                    </div>
                </div>              
                <div class="col-12 col-lg-3 why-box">
                    <div class="why-title">为什么加入 STEAK？</div>
                    <ul class="why-ul">
                        <li>购买和下载完整零售游戏</li>
                        <li>加入 Steak 社区</li>
                        <li>游戏时与好友聊天</li>
                        <li>在任何电脑上都能玩</li>
                        <li>安排游戏、比赛或 LAN 聚会</li>
                        <li>获取自动游戏更新以及更多！</li>
                    </ul>
                    <img class="why-img" src="https://store.st.dl.bscstorage.net/public/images/v6/why_join_preview.png" />
                    <p>支持的操作系统</p>
                    <p>Windows 7、8、8.1、10 或更新版本。</p>
                    <p>Intel Mac、OS X 版本 10.11（El Capitan）或更新版本。</p>
                    <p>Ubuntu Linux（最新版本）。</p>
                    <p>互联网连接（推荐使用宽带）</p>
                </div>
            </div>
        </div>
        <Bottom />
    </div>
</template>

<script>
import Header from './Header'
import Bottom from './Bottom'
import Dragverify from '../../assets/js/dragverify.js'
import mdui from 'mdui/dist/js/mdui.min.js'

export default {
    components: {
        Header,
        Bottom
    },
    data(){
        return {
            regForm:{
                email: null,
                password: null
            },
            formAgree: false
        }
    },
    methods:{
        changeAgree(){
            this.formAgree = !this.formAgree;
        },
        regUser(){
            var emailReg= /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ ;
            var passwordReg= /^.{6,}$/;
            if(!emailReg.test(this.regForm.email) || !passwordReg.test(this.regForm.password)){
                mdui.snackbar({
                    message: '请按提示填写表单',
                    position: 'right-bottom'
                });
                return;
            }
            if(!this.formAgree){
                mdui.snackbar({
                    message: '同意协议即可注册',
                    position: 'right-bottom'
                });
                return;
            }
            this.$http({
                methods: 'post',
                params: this.regForm,
                url: '/api/user/addUser'
            }).then((response) => {
                mdui.snackbar({
                    message: '注册成功',
                    position: 'right-bottom'
                });
                this.$router.push({ path: '/login' })
            })
        }
    },
    mounted(){
        $("#dragverify").dragverify();
        $("html,body").animate({scrollTop:0},100); 
    }
}
</script>

<style src="../../assets/css/dragverify.css"></style>
<style src="../../assets/css/reg.css" scoped></style>