<template>
     <ul class="navbar-nav">
        <NavItem :key="link.id" v-for="link in links" :nav-link="link.link" :nav-title="link.title" />
    </ul>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
  name: "MenuNav",
  components: {
    NavItem
  },
  data() {
    return {
      links: [
        {
            id: 1,
            title: "About",
            link: "#"
        },
        {
            id: 2,
            title: "Web",
            link: "#carousel"
        },
        {
            id: 3,
            title: "Digital",
            link: "#gallery"
        },
        {
            id: 4,
            title: "Service",
            link: "#"
        },
        {
            id: 5,
            title: "Contact",
            link: "#contact"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  
  ul {
      display: flex;
  }

//---------------RESPONSIVE

  @media (max-width: 600px) {
    ul {
      padding: 0;
    }
  }
     
</style>
