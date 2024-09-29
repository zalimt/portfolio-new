<template>
  <div id="web" class="container-full" 
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd">
    <div class="carousel" ref="carousel">
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
import { ref, onMounted } from "vue";

export default {
  name: "CarouselComp",
  setup() {
    const currentSlide = ref(1);
    const slideCount = ref(null);
    const startX = ref(null);
    const startY = ref(null);

    const handleTouchStart = (event) => {
      startX.value = event.touches[0].clientX;
      startY.value = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      if (!startX.value || !startY.value) {
        return;
      }

      const deltaX = event.touches[0].clientX - startX.value;
      const deltaY = event.touches[0].clientY - startY.value;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        event.preventDefault();
      }
    };

    const handleTouchEnd = (event) => {
      const deltaX = event.changedTouches[0].clientX - startX.value;
      const deltaY = event.changedTouches[0].clientY - startY.value;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }

      startX.value = null;
      startY.value = null;
    };

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
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    // Slide Count
    onMounted(() => {
      slideCount.value = document.querySelectorAll(".slide").length;
    });

    return { currentSlide, prevSlide, nextSlide, slideCount, handleTouchStart, handleTouchMove, handleTouchEnd };
  },
};
</script>
<style lang="scss">

@import "../styles/common";
@import "../styles/carousel";

</style>