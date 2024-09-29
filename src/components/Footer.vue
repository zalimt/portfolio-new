<template>
    <footer>
        <div class="footer-wrapper">
            <div class="socials">
                <div v-for="(social, index) in socials" :key="index" class="social">
                    <a :href="social.socialUrl" target="_blank">
                        <img :src="social.logo" alt="">
                    </a>
                </div>
            </div>
            <p><i class="fa-regular fa-copyright"></i>{{ copyright }}</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComp",
    

    data() {
        
        const currentYear = new Date().getFullYear();
        
        return {
<<<<<<< HEAD
            copyright: "2024 tsorionov.com",
=======
            copyright: `© ${currentYear} tsorionov.com`,
>>>>>>> 43182bdbd5a1cae734904bcd68c716e7c55bd70c

            socials: [
                {
                    name: "LinkedIn",
                    logo: require("../assets/social/linkedin.svg"),
                    socialUrl: "https://www.linkedin.com/in/zalim-tsorionov-06353226"
                },
                {
                    name: "Instagram",
                    logo: require("../assets/social/instagram.svg"),
                    socialUrl: "https://www.instagram.com/unstamatable"
                },
                {
                    name: "Facebook",
                    logo: require("../assets/social/facebook.svg"),
                    socialUrl: "https://www.facebook.com/zalim.tsorionov"
                }
            ]
        }
    }
}
</script>

<style lang="scss">

@import "../styles/common";
@import "../styles/footer";

</style>