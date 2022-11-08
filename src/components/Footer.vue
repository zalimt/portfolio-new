<template>
    <footer>
        <div class="footer-wrapper">
            <div class="socials">
                <div class="scial">
                    <a href="">
                        <img src="../assets/skills/html.svg" alt="">
                    </a>
                </div>
            </div>
            <p>{{ copyright }}</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComp",

    data() {
        return {
            copyright: "© 2022 tsorionov.com",
        }
    }
}
</script>

<style lang="scss">
    .footer-wrapper {
        display: flex;
    }
</style>