<template>
  <div class="home">
    <IndexWrap msg="e.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import IndexWrap from '@/components/IndexWrap.vue'

export default {
  name: 'Home',
  components: {
    IndexWrap
  }
}
</script>
