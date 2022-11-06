<template>
<div class="container">
    <div id="about" class="about">
        <h1>Hi, my name is Zalim!</h1>
        <h2>It is really nice to meet you on my personal page.</h2>
        <p>Let me tell you a few words about myself:<br>I am a multidisciplinary Web Developer located in Limassol (Cyprus).</p>
        <p>I specialise in responsive Websites and Landing pages, WordPress, Functional User Interfaces and Corporate Identity.</p>
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
        <p>I believe that devil is in the details so I pay special attention to them. My goal is to create both: visually appealing and practical projects. Feel free to check out the services I offer or contact me if you have any questions.</p>
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
            ]
        }
    }
}
</script>

<style lang="scss">
    $yellow: #FFD600;
    
    .about {
        text-align: left;
        padding: 50px 0;
        color: #151515;
        width: 80%;
        margin: 0 auto;

        h1 {
            font-size: 45px;
            line-height: 120%;
        }

        h2 {
            font-size: 25px;
            margin-bottom: 20px;
        }

        p {
            margin-top: 10px;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 10px;
        
            .skill-icon {
                position: relative;
                cursor: pointer;

                .tool-tip {
                    position: absolute;
                    opacity: 0;
                    left: 50%;
                    bottom: 170%;
                    background: #000;
                    color: $yellow;
                    z-index: 2;
                    padding: 3px 7px;
                    font-size: 12px;
                    transition: .3s all;
                }

                &:hover {
                    .tool-tip {
                        opacity: 1;
                    }
                }
            }
        }

    }
</style>