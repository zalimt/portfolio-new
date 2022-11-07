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

    $yellow: #FFD600;

    .btn-light {
        position: relative;
        color: #333;
        text-decoration: none;
        padding: 10px 15px;
        font-weight: 500;
        border: 1px solid #333;
        z-index: 0;
        cursor: pointer;
        font-size: 20px;
        font-weight: 700;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          z-index: -1;
          transition: .4s all;
        }

        &:hover::before {
          background-color: $yellow;
        }

        &:hover {
          transition: .4s all;
          color: #151515;
        }
    }

    .btn-dark {
        position: relative;
        color: $yellow;
        text-decoration: none;
        padding: 10px 15px;
        font-weight: 500;
        border: 1px solid #333;
        z-index: 0;
        cursor: pointer;
        font-size: 20px;
        font-weight: 700;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: #151515;
          z-index: -1;
          transition: .4s all;
        }

        &:hover::before {
          background: $yellow;
        }

        &:hover {
          transition: .4s all;
          color: #151515;
        }
      }

</style>