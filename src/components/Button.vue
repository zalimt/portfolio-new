<template>
  <a :class="btnStyle">{{ btnTitle }}</a>
</template>

<script>
export default {
    name: "ButtonComp",

    props: ['btnTitle', 'btnStyle']
}
</script>

<style lang="scss">

    @import "../styles/common";
    @import "../styles/buttons";

</style>