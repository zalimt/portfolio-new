<template>
    <header>
        <div class="container d-fsb menu-wrap">
            <div class="left">
                <a href="">
                    <img :src="logo" alt="">
                </a>
            </div>
            <div class="right">
                 <Menu />
            </div>
        </div>
    </header>
</template>

<script>
import Menu from "./Menu.vue"

export default {
    name: "HeaderMain",
    components: {
        Menu
    },
    data() {
        return {
            logo: require('../assets/zt_logo.svg'),
        }
    }
}
</script>

<style lang="scss" scoped>

    
  //---------------RESPONSIVE

    @media (max-width: 600px) {
        .menu-wrap {
            flex-direction: column;
        }
    }
</style>
