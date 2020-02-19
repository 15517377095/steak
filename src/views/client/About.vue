<template>
    <div class="about">
        <Header />
            <div class="cardsbox">
            <div class="mdui-col-sm-6 mdui-col-md-4">
                <div class="mdui-card">
                    <div class="mdui-card-media">
                        <img src="../../assets/images/card.jpg"/>
                        <div class="mdui-card-media-covered">
                        <div class="mdui-card-primary">
                            <div class="mdui-card-primary-title">杨佳乐</div>
                            <div class="mdui-card-primary-subtitle">20174141007</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mdui-col-sm-6 mdui-col-md-4">
                <div class="mdui-card">
                    <div class="mdui-card-media">
                        <img src="../../assets/images/card.jpg"/>
                        <div class="mdui-card-media-covered">
                        <div class="mdui-card-primary">
                            <div class="mdui-card-primary-title">王连杰</div>
                            <div class="mdui-card-primary-subtitle">20174141008</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        <Bottom />
    </div>
</template>

<style>
    .about {
        background: linear-gradient(190deg, #000, #191654);
    }
    .cardsbox {
        width: 100%;
        display: flex;
        padding: 60px 10%;
        justify-content: space-around;
    }
</style>

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