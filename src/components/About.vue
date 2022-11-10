<template>
    <div id="about" class="container-full">
        <div class="container">
            <div class="about">
                <div class="left">
                    <h1>Hi, I am Zalim!</h1>
                    <h2>It is really nice to meet you on my personal page.</h2>
                    <Transition>
                        <p v-show="showInfo">Let me tell you a few words about myself:<br>I am a multidisciplinary Web Developer located in Limassol (Cyprus). I specialise in responsive Websites and Landing pages, WordPress, Functional User Interfaces and Corporate Identity.</p>
                    </Transition>
                    <p><strong>My skills include, but not limited to:</strong></p>
                        <div class="skills">
                            <span v-for="(skill, id) in skills" :key="id">
                                    <span class="skill-icon">
                                        <span class="tool-tip">{{ skill.title }}</span>
                                        <img
                                        :src="skill.icon"
                                        :alt="skill.title">
                                    </span>
                            </span>
                        </div>
                    <Transition>
                        <p v-show="showInfo">As I am sure, that devil is in the details, I pay special attention to it. Feel free to check out my works or contact me if you have any questions.</p>
                    </Transition>
                    <div class="show-info">
                        <img @click="showInfo=!showInfo" src="../assets/expand.svg" alt="">
                    </div>
                </div>
                <div class="right">
                    <img src="../assets/zt-pic.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutComp",

    data() {
        return {
            skills: [
                {
                    id: 1,
                    title: "HTML",
                    icon: require("../assets/skills/html.svg"),
                },
                {
                    id: 2,
                    title: "CSS",
                    icon: require("../assets/skills/ss3.svg"),
                },
                {
                    id: 3,
                    title: "SASS/SCSS",
                    icon: require("../assets/skills/sass.svg"),
                },
                {
                    id: 4,
                    title: "JavaScript",
                    icon: require("../assets/skills/javascript.svg"),
                },
                {
                    id: 5,
                    title: "Vue.js",
                    icon: require("../assets/skills/vue.svg"),
                },
                {
                    id: 6,
                    title: "Git",
                    icon: require("../assets/skills/git.svg"),
                },
                {
                    id: 7,
                    title: "WordPress",
                    icon: require("../assets/skills/wordpress.svg"),
                },
                {
                    id: 8,
                    title: "PhotoShop",
                    icon: require("../assets/skills/photoshop.svg"),
                },
                {
                    id: 9,
                    title: "Illustrator",
                    icon: require("../assets/skills/illustrator.svg"),
                },
                {
                    id: 10,
                    title: "Figma",
                    icon: require("../assets/skills/figma.svg"),
                },
            ],
            showInfo: false,
        }
    }
}
</script>

<style lang="scss">
    
    @import "../styles/common";
    @import "../styles/about";

</style>