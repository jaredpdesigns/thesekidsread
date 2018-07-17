<template>
  <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" v-for="icon in filtered" :key="icon.name" :width="icon.width ? icon.width:size" :height="icon.height ? icon.height:size" :viewBox="icon.width ? '0 0 ' + icon.width + ' ' + icon.height: '0 0 24 24'">
      <path fill="currentColor" :d="icon.path"></path>
    </svg>
  </span>
</template>
<script>
export default {
  name: 'Icon',
  computed: {
    icons() { return this.$store.state.icons },
    filtered() {
      let name = this.name
      return this.icons.filter(function(icon) {
        return icon.name === name
      })
    }
  },
  props: {
    name: { default: null },
    size: { default: 24, type: Number }
  }
}
</script>
<style lang="scss" scoped>
.icon {
  align-items: center;
  display: inline-flex;
  justify-content: center;
}
</style>