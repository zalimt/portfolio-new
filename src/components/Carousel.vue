<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide"/>
    <!-- Navigation -->
    <div class="navigate">
        <div class="toggle-page left">
            <i @click="prevSlide" class="fas fa-chevron-left"></i>
        </div>
        <div class="toggle-page right">
            <i @click="nextSlide" class="fas fa-chevron-right"></i>
        </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"

export default {
    name: "CarouselComp",
    setup() {
      const currentSlide = ref(1);
      const slideCount = ref(null);

      // Previous Slide
      const prevSlide = () => {
        if (currentSlide.value === slideCount.value - slideCount.value + 1) {
          currentSlide.value = slideCount.value;
          return;
        }
        currentSlide.value -= 1;
      };

      // Next Slide
      const nextSlide = () => {
        if (currentSlide.value === slideCount.value) {
          currentSlide.value = 1
          return;
        }
        currentSlide.value += 1;
      };

      // Slide Count
      onMounted(() => {
        slideCount.value = document.querySelectorAll(".slide").length;
      });

      return { currentSlide, prevSlide, nextSlide, slideCount }
    }

    
}
</script>

<style lang="scss">

.navigate {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 1px;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .toggle-page {
    &.left {
      margin-right: 1000px;
    }

      i {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #333;
          color: #FFD600;
      }
  }
  
  @media (max-width: 1000px) {
    .toggle-page {
      &.left {
        margin-right: 300px;
      }
    }
  }
}


</style>