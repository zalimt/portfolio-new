<template>
<div id="web" class="container-full">
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

@import "../styles/common";
@import "../styles/carousel";

</style>