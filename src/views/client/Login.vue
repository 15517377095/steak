<template>
    <div class="login">
        <Header />
        <div class="container-fluid" id="seetype">
            
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
    }
}
</script>

<style src="../../assets/css/login.css" scoped></style>