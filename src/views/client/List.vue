<template>
    <div class="list">
        <Header />
        <div class="container-fluid" id="seetype">
            <div class="row">
                <div class="col-10 offset-1 seetype-title">
                    <span class="seetype-title-b">正在浏览动作类型的游戏</span>
                    <span class="seetype-title-s">浏览最新、最热销和打折的 动作 产品</span>
                </div>
            </div>
            <div class="row pattern"></div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
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
    }
}
</script>

<style src="../../assets/css/list.css" scoped></style>