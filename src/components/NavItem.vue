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

<style lang="scss" scoped>
  .nav-item {
        list-style-type: none;

        &:not(:last-child) {
          margin-right: 20px;
        }

      a {
        text-decoration: none;
        color: #333;
        font-size: 18px;

        &:hover {
          color: #ffa500;
        }
      }
  }

  //---------------RESPONSIVE
  
  @media (max-width: 600px) {
    .nav-item {
      font-size: 1px;
    }
  }
  
</style>