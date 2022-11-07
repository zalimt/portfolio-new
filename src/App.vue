<template>
<div class="home">
  <HeaderMain />
  <HeroMsg />
  <About />
  <Carousel class="carousel"  v-slot="{ currentSlide }" >
    <Slide v-for="(slide, index) in carouselSlides" :key="index">
      <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="require(`./assets/${slide.name}.png`)" :alt="slide.webSiteName">
          <Button btnStyle="btn-light" btnTitle="VIEW MORE" :href="slide.siteUrl" target="_blank"></Button>
      </div>
    </Slide>
  </Carousel>
  <!-- GALLERY -->
  <div class="gallery-wrapper">
      <div  @click="hidePopup" v-for="(image, ind) in galleryImages" :key="ind" class="popup-image-wrapper">
        <div class="popup-image" :class="[currentImage === ind ? activeClass : '']">
          <img @click="hidePopup" :src="require(`./assets/${image.name}.png`)" :alt="ind">
          <a class="closePopup" @click="hidePopup"><i class="fa-solid fa-xmark"></i></a>
        </div>
    </div>
    <Gallery class="gallery">
      <Image class="image" v-for="(image, ind) in galleryImages" :key="ind">
        <img @click="showPopup(ind)" :src="require(`./assets/${image.name}.png`)" :alt="ind">
      </Image>
    </Gallery>
  </div>
  <!-- FORM -->
  <Form></Form>
</div>
</template>

<script>
import HeaderMain from "./components/Header"
import HeroMsg from "./components/HeroMsg"
import Carousel from "./components/Carousel"
import Button from "./components/Button"
import Slide from "./components/Slide"
import Gallery from "./components/Gallery.vue"
import Image from "./components/Image.vue"
import About from "./components/About.vue"
import Masonry from "masonry-layout"
import { ref } from "vue"
import Form from "./components/Form"

export default {
  name: 'App',
  components: {
    HeaderMain,
    HeroMsg,
    Carousel,
    Button,
    Slide,
    Gallery,
    Image,
    Form,
    About
    
  },
  setup() {
   
    // CAROUSEL IMAGES ARRAY
    const carouselSlides = [
      {
        name: "ws-1",
        webSiteName: "mysmartswimwear",
        siteUrl: "//mysmartswimwear.com/",
        poopUrl: "//mysmartswimwear.com/"
      },
      {
        name: "ws-2",
        webSiteName: "cryptalo",
        siteUrl: "//cryptalo.com/"
      },
      {
        name: "ws-3",
        webSiteName: "digikeymarket",
        siteUrl: "//digikeymarket.com/"
      },
      {
        name: "ws-4",
        webSiteName: "investmedia",
        siteUrl: "//investmedia.tech/"
      },
      {
        name: "ws-5",
        webSiteName: "fxbrokerrating",
        siteUrl: "//fxbrokerrating.com/"
      },
      {
        name: "ws-6",
        webSiteName: "trendingbrokers",
        siteUrl: "//trendingbrokers.com/"
      },
      {
        name: "ws-7",
        webSiteName: "guiadeltrading",
        siteUrl: "//guiadeltrading.com/"
      },
      {
        name: "ws-8",
        webSiteName: "forexinspect",
        siteUrl: "//forexinspect.com/"
      },
    ];

    // GALLERY IMAGES ARRAY
    const galleryImages = [
      {
        name: "img-01"
      },
      {
        name: "img-02"
      },
      {
        name: "img-03"
      },
      {
        name: "img-04"
      },
      {
        name: "img-05"
      },
      {
        name: "img-06"
      },
      {
        name: "img-07"
      },
      {
        name: "img-08"
      },
      {
        name: "img-09"
      },
      {
        name: "img-10"
      },
      {
        name: "img-11"
      },
      {
        name: "img-12"
      },
      {
        name: "img-13"
      },
      {
        name: "img-14"
      },
      {
        name: "img-15"
      },
      {
        name: "img-16"
      },
      {
        name: "img-17"
      },
      {
        name: "img-18"
      },
      {
        name: "img-19"
      },
      {
        name: "img-20"
      },
      {
        name: "img-21"
      }
    ];

    // MASONRY
    window.onload = () => {
      const grid = document.querySelector('.gallery');

      const masonry = new Masonry(grid, {
        itemSelector: ".image",
        fitWidth: true,
        gutter: 0

      });

      return { masonry }
    };

    // SHOW / HIDE POPUP
    const currentImage = ref(null);

    const hidePopup = () => {
      currentImage.value = null;
    }
    
    const showPopup = (number) => {
      currentImage.value = number;
    }

    const activeClass = 'visible';

    return { carouselSlides, galleryImages, hidePopup, showPopup, currentImage, activeClass }
  }
}
</script>

<style lang="scss">


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
}

html {
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 40px;
}

.container {
  max-width: 1366px;
  margin: auto;
  padding: 0 40px;
}

.d-f {
  display: flex;
}

.d-fc {
  display: flex;
  align-items: center;
  justify-content: center;
}

.d-fsb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.carousel {
  position: relative;
  height: auto;

  .slide {
    display: flex;
    align-items: center;
    justify-content: center;

    .slide-info {
      width: 100%;
      max-width: 1000px;
      height: auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
.gallery-wrapper {
  background: #151515;
  padding: 40px;
  margin-top: 70px;

  .gallery {
      margin: 40px auto;

      .image {
        width: 32%;
        cursor: pointer;


        img {
          width: 100%;
        }
      }
  }

  .popup-image {
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.9);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    opacity: 0;
    z-index: -1;
    transition: .4s all;
    
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
      width: 80%;
      max-width: 900px;
      object-fit: cover;
    }

    .closePopup {
      position: absolute;
      top: 3%;
      right: 3%;
      cursor: pointer;
      z-index: 300;

      i {
        font-size: 30px;
        color: #333;
        background: #FFD600;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &.visible {
      opacity: 1;
      transition: .4s all;
      z-index: 300;
    }
  }

  .form {
    padding: 50px 0;
  }
}

</style>
