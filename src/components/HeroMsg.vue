<template>
    <div class="container">
        <div class="hero-wrapper">
            <!-- <h2>Zalim Tsorionov</h2> -->
            <h2>UI/UX / WEB DEVELOPER</h2>
            <!-- <h1>Web Developer</h1> -->
            <h1>Zalim Tsorionov<span>:</span></h1>
            <p>Dedicated multidisciplinary designer who pays special attention to the details.<br>My goal is to create both: visually appealing and practical design.</p>
            <Button href="#digital" btnStyle="btn-dark" style="margin-right: 15px" btnTitle="VIEW WORKS"/>
            <Button href="#contact" btnStyle="btn-light" btnTitle="CONTACT ME"/>
        </div>
    </div>
</template>

<script>
import Button from "./Button.vue"

export default {
    components: {
        Button
    }

}
</script>

<style lang="scss">
    
    @import "../styles/common";
    @import "../styles/hero-msg";

</style>