<template>
    <div class="add-game">
        <Header />
        <div class="container-fluid">
            <div class="row mt-4">
                <div class="col-auto offset-xl-1 title anim-2">添加游戏</div>
                <div class="col-auto ml-auto">
                    <span class="nav-root">Steak</span>
                    <i class="nav-ico fas fa-angle-right"></i>
                    <span class="nav-child">添加游戏</span>
                </div>
                <div class="col-0 col-xl-1" />
            </div>
            <div class="row mt-4 pl-2 pr-2" >
                <div class="col-xl-10 offset-xl-1 add-form anim-2">
                    <mu-form :model="gameForm" class="row mu-demo-form" label-width="100">
                        <mu-form-item class="col-md-6 col-xl-4" label="游戏名称">
                            <mu-text-field v-model="gameForm.name"></mu-text-field>
                        </mu-form-item>
                        <mu-form-item class="col-md-6 col-xl-4" label="开发商">
                            <mu-text-field v-model="gameForm.developers"></mu-text-field>
                        </mu-form-item>
                        <mu-form-item class="col-md-6 col-xl-4" label="发行商">
                            <mu-text-field v-model="gameForm.publisher"></mu-text-field>
                        </mu-form-item>
                        <mu-form-item class="col-md-6 col-xl-4" label="发布日期">
                            <mu-date-input v-model="gameForm.releasedate" format="YYYY 年 MM 月 DD 日" type="date"></mu-date-input>
                        </mu-form-item>
                        <mu-form-item class="col-md-6 col-xl-4" label="游戏类型">
                            <mu-select filterable v-model="gameForm.typeId" full-width>
                                <mu-option v-for="type in types" :key="type.id" :label="type.name" :value="type.id"></mu-option>
                            </mu-select>
                        </mu-form-item>
                        <mu-form-item class="col-md-6 col-xl-4" label="支持语言">
                            <mu-select filterable multiple chips v-model="gameForm.language" full-width>
                                <mu-option v-for="(language,index) in languages" :key="index" :label="language" :value="language"></mu-option>
                            </mu-select>
                        </mu-form-item>
                        <mu-form-item class="col-12" label="售价">
                            <el-input-number v-model="gameForm.money" controls-position="right" :min="0"></el-input-number>
                        </mu-form-item>
                        <mu-form-item class="col-12" label="展示图集" id="upload-imgs">
                            <uploadimgitem :imgurl="uploadimgitem.imgurl" :index="index" v-for="(uploadimgitem,index) in uploadimgitems" :key="index" />
                            <div @dragenter="stopPrevent" @dragover="stopPreventAndAddClass" @dragleave="stopPreventAndRemoveClass" @drop="headImgChangeForImgsOfDrop" class="img-item cur-p" onclick="document.getElementById('exampleFormControlFile2').click()">
                                <i class="fas fa-plus"></i>
                                <span>支持拖拽上传</span>
                            </div>
                            <form id="uploadPic2" action="" enctype="multipart/form-data">
                                <input type="file" @change="headImgChangeForImgs" name="multipartFile" accept="image/*" style="display:none" id="exampleFormControlFile2">
                            </form>
                        </mu-form-item>
                        <mu-form-item class="col-12" label="简介">
                            <mu-text-field v-model="gameForm.introduction" placeholder="不可超过300个字符，请避免使用换行" multi-line :rows="3" :max-length="300"></mu-text-field>
                        </mu-form-item>
                        <mu-form-item class="col-xl-6" label="详情">
                            <mu-text-field v-model="gameForm.mdfile" @keyup="showMd" placeholder="支持 markdown 语法，不可超过2500个字符" multi-line :rows="10" :max-length="2500"></mu-text-field>
                            <mu-button small round color="indigo" onclick="document.getElementById('exampleFormControlFile1').click()">上传图片</mu-button>
                            <form id="uploadPic" action="" enctype="multipart/form-data">
                                <input type="file" @change="headImgChange" name="multipartFile" accept="image/*" style="display:none" id="exampleFormControlFile1">
                            </form>
                        </mu-form-item>
                        <mu-form-item class="col-xl-6" label="详情预览">
                            <div class="w-100" id="test-editormd">
                                <textarea style="display:none"></textarea>  
                                <div id="test-editormd-view">
                                    <textarea style='display:none'></textarea>
                                </div>
                            </div>
                        </mu-form-item>
                        <mu-form-item class="col-auto ml-auto">
                            <mu-button color="#08f" @click="save">上传信息</mu-button>
                        </mu-form-item>
                    </mu-form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Header from './Header'
import Editormd from '../../assets/lib/editormd.js'
import mdui from 'mdui/dist/js/mdui.min.js'

export default {
    components:{
        Header,
        uploadimgitem:{
            template:`
                <div class="uploadimgitem" :style="'background:url(' + imgurl + ')'">
                    <i class="cur-p uploadimgitem-delete fas fa-trash-alt" @click="deleteImg"></i>
                </div>
            `,
            props:["imgurl"],
            methods:{
                deleteImg(e){
                    // 获取服务器图片文件名(带后缀)
                    var styleUrl = e.target.parentNode.style.background;
                    var url = /images\/.+\"/ .exec(styleUrl)[0];
                    var filename = url.substring(7,url.length-1);
                    // 删除服务器图片
                    this.$http({
                        method: 'post',
                        params: {
                            name: filename
                        },
                        contentType: false,
                        processData: false,
                        url: '/game/deleteImgByName'
                    }).then((response) => {
                        mdui.snackbar({
                            message: '已删除',
                            position: 'right-bottom'
                        });
                    })
                    // 移除组件
                    var items = this.$parent.$parent.$parent.uploadimgitems;
                    var itemIndex = e.target.parentNode.getAttribute("index");
                    items.splice(itemIndex,1);
                }
            }
        }
    },
    data(){
        return{
            languages:[
                "简体中文",
                "英语",
                "法语",
                "意大利语",
                "德语",
                "西班牙语",
                "日语",
                "韩语",
                "俄语",
                "葡萄牙语",
                "波兰语",
                "繁体中文",
                "土耳其语",
                "丹麦语",
                "荷兰语",
                "芬兰语",
                "挪威语"
            ],
            gameForm:{
                name: '',
                typeId: '',
                money: 0,
                releasedate: '',
                developers: '',
                publisher: '',
                language: '',
                introduction: '',
                imgs: [],
                mdfile: ''
            },
            types: [],
            headImg: null,
            uploadimgitems:[],
            addStatus: false
        }
    },
    methods:{
        getTypes(){
            this.$http({
                method: 'post',
                url: '/type/getAll'
            }).then((response) => {
                this.types=response.data;
            })
        },
        dateFormat(date,formatStr){
            Date.prototype.format = function(fmt){ //author: meizz   
                var o = {   
                    "M+" : this.getMonth()+1,                 //月份
                    "d+" : this.getDate(),                    //日   
                    "h+" : this.getHours(),                   //小时
                    "m+" : this.getMinutes(),                 //分   
                    "s+" : this.getSeconds(),                 //秒   
                    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
                    "S"  : this.getMilliseconds()             //毫秒   
                };   
                if(/(y+)/.test(fmt))   
                fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
                for(var k in o)   
                if(new RegExp("("+ k +")").test(fmt))   
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
                return fmt;   
            }
            return date.format(formatStr);
        },
        showMd(){
            $("#test-editormd-view").html("<textarea></textarea>");
            $("#test-editormd-view textarea").text(this.gameForm.mdfile);
            editormd.markdownToHTML("test-editormd-view");
        },
        headImgChange(){
            var _this=this;
            var formData=new FormData($("#uploadPic")[0]);
            this.$http({
                method: 'post',
                data: formData,
                contentType: false,
                processData: false,
                url: '/game/saveImage'
            }).then((response) => {
                console.log(response.data);
                _this.gameForm.mdfile += "![在这里插入图片描述](" + response.data + ")";
                _this.showMd();
            })
        },
        headImgChangeForImgs(){
            var _this=this;
            var formData=new FormData($("#uploadPic2")[0]);
            this.$http({
                method: 'post',
                data: formData,
                contentType: false,
                processData: false,
                url: '/game/saveImage'
            }).then((response) => {
                this.uploadimgitems.push({imgurl:response.data});
            })
        },
        stopPrevent(e){
            e.preventDefault();
        },
        stopPreventAndAddClass(e){
            e.preventDefault();
            $(".img-item").addClass("img-item-hover");
        },
        stopPreventAndRemoveClass(e){
            e.preventDefault();
            $(".img-item").removeClass("img-item-hover");
        },
        headImgChangeForImgsOfDrop(e){
            e.preventDefault();
            $(".img-item").removeClass("img-item-hover");
            if(!/image*/.test(e.dataTransfer.files[0].type)){
                mdui.snackbar({
                    message: '只能上传图片类型的文件',
                    position: 'right-bottom'
                });
                return;
            }
            var _this=this;
            var formData=new FormData();
            formData.append("multipartFile",e.dataTransfer.files[0]);
            this.$http({
                method: 'post',
                data: formData,
                contentType: false,
                processData: false,
                url: '/game/saveImage'
            }).then((response) => {
                this.uploadimgitems.push({imgurl:response.data});
            })
        },
        save(){
            //表单正确性检测
            if(this.gameForm.money == null){
                this.gameForm.money = 0;
            }
            if(this.gameForm.name == ""){
                mdui.snackbar({
                    message: '请填写 游戏名称',
                    position: 'right-bottom'
                });
                return;
            }
            if(this.gameForm.developers == ""){
                mdui.snackbar({
                    message: '请填写 开发商',
                    position: 'right-bottom'
                });
                return;
            }
            if(this.gameForm.publisher == ""){
                mdui.snackbar({
                    message: '请填写 发行商',
                    position: 'right-bottom'
                });
                return;
            }
            if(this.gameForm.introduction == ""){
                mdui.snackbar({
                    message: '请填写 简介',
                    position: 'right-bottom'
                });
                return;
            }
            if(this.gameForm.releasedate == ""){
                mdui.snackbar({
                    message: '请填写 发布日期',
                    position: 'right-bottom'
                });
                return;
            }
            if(this.gameForm.mdfile == ""){
                mdui.snackbar({
                    message: '请填写 详情',
                    position: 'right-bottom'
                });
                return;
            }
            this.gameForm.imgs=this.uploadimgitems;
            if(this.gameForm.imgs == ""){
                console.log(this.gameForm.imgs);
                mdui.snackbar({
                    message: '请至少添加一张展示图',
                    position: 'right-bottom'
                });
                return;
            }
            //日期格式化
            this.gameForm.releasedate=this.dateFormat(this.gameForm.releasedate,"yyyy-MM-dd");
            //语言格式化
            var newLanguage="";
            for(let index in this.gameForm.language){
                newLanguage += this.gameForm.language[index]+";"
            }
            this.gameForm.language = newLanguage.substring(0,newLanguage.length-1);
            //图集格式化
            var newImgs="";
            for(let index in this.gameForm.imgs){
                newImgs += this.gameForm.imgs[index]+";"
            }
            this.gameForm.imgs = newImgs.substring(0,newImgs.length-1);
            //发送数据
            this.$http({
                method: 'post',
                data: this.gameForm ,
                url: '/game/insertOne'
            }).then((response) => {
                this.addStatus = true;
                mdui.snackbar({
                    message: '添加成功',
                    position: 'right-bottom'
                });
                this.$router.push("/admin");
            })
        }
    },
    mounted(){
        this.getTypes();
        editormd.markdownToHTML("test-editormd-view");
    },
    beforeDestroy(){
        if(!this.addStatus){
            this.$http({
                method: 'post',
                contentType: false,
                processData: false,
                url: '/game/deleteImgsByAutoId'
            }).then((response) => {
                mdui.snackbar({
                    message: '弃填表单已销毁',
                    position: 'right-bottom'
                });
            })
        }
    }
}
</script>

<style src="../../assets/adminCss/addGame.css" ></style>
<style src="../../assets/css/editormd.min.css"></style>