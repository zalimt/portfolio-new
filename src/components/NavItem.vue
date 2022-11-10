<template>
  <li class="nav-item">
     <a :href="navLink">{{ navTitle }}</a>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    navTitle: {
      type: String,
      required: true
    },
    navLink: {
      type: String,
      required: true
    },
  }
  // props: ["navTitle", "navLink"]
}
</script>

<style lang="scss">

@import "../styles/common";
@import "../styles/nav";
  
</style>