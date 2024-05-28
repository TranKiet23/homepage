<template>
  <div>
    <header_layout />
    <body class="mx-auto">
      <slot />
    </body>
    <footer_layout />
  </div>
</template>
<script>
import header_layout from './header-layout.vue'
import footer_layout from './footer-layout.vue'

export default {
  components: {
    header_layout,
    footer_layout
  }
}
</script>
<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>