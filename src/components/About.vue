<template>
    <div class="container-full">
        <div class="container">
            <div id="about" class="about">
                <div class="left">
                    <h1>Hi, I am Zalim!</h1>
                    <h2>It is really nice to meet you on my personal page.</h2>
                    <Transition>
                        <p v-show="showInfo">Let me tell you a few words about myself:<br>I am a multidisciplinary Web Developer located in Limassol (Cyprus).</p>
                    </Transition>
                    <Transition>
                        <p v-show="showInfo">I specialise in responsive Websites and Landing pages, WordPress, Functional User Interfaces and Corporate Identity.</p>
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
                        <p v-show="showInfo">I believe that devil is in the details so I pay special attention to them. My goal is to create both: visually appealing and practical projects. Feel free to check out the services I offer or contact me if you have any questions.</p>
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

<style lang="scss" scoped>
    $yellow: #FFD600;

    .container-full {
        background: #151515;
        // padding: 70px 0;
        // margin-bottom: 150px;
    }
    
    .about {
        text-align: left;
        padding: 40px;
        border: 2px solid #151515;
        color: #151515;
        display: flex;
        gap: 30px;
        height: 650px;
        background: #fff;
        // margin: 0 auto;

        .left {
            width: 65%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;

            h1 {
                font-size: 70px;
                line-height: 120%;
            }
    
            h2 {
                font-size: 30px;
                margin-bottom: 20px;
            }
    
            p {
                margin-top: 10px;
                font-size: 20px;
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
            .show-info {
                width: 25px;
                height: 25px;
                cursor: pointer;
                position: absolute;
                top: -15px;
                left: -15px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .v-enter-active,
            .v-leave-active {
                transition: opacity 0.3s ease;
            }

            .v-enter-from,
            .v-leave-to {
                opacity: 0;
            }
        }
        .right {
            width: 35%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    // RESPONSIVE
    @media (max-width: 800px) {
        .container {
            padding: 30px 30px !important;
        }
        .about {
            flex-direction: column;
            height: auto;
            padding: 25px;

            .left {
                width: 100%;

                h1 {
                    font-size: 40px;
                }
                h2 {
                    font-size: 18px;
                }
                p {
                    font-size: 18px;
                }
                .skills {
                    gap: 0;
                }
                .show-info {
                    left: unset;
                    right: -15px;
                    top: -15px;
                }
            }

            .right {
                width: 100%;
            }
        }
    }
    @media (max-width: 600px) {
        .container {
            padding: 30px 30px !important;
        }
        .about {
            flex-direction: column;
            height: auto;
            padding: 25px;

            .left {
                width: 100%;

                h1 {
                    font-size: 40px;
                }
                h2 {
                    font-size: 18px;
                }
                p {
                    font-size: 18px;
                }
                .skills {
                    gap: 0;
                }
                .show-info {
                    left: unset;
                    right: -15px;
                    top: -15px;
                }
            }

            .right {
                width: 100%;
            }
        }
    }
</style>