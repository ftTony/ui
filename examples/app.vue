<template>
  <div>
    <!-- <main-header></main-header> -->
    <main-aside>
    </main-aside>
    <main>
      <router-view></router-view>
    </main>
    <main-footer></main-footer>
  </div>

</template>

<style lang="sass" scoped>

</style>

<script>

import MainHeader from '@/components/main-header'
import MainAside from '@/components/main-aside'
import MainFooter from '@/components/main-footer'
export default {
  components: {
    MainHeader,
    MainFooter,
    MainAside
  },
  watch: {

  },
  mounted () {

  }
}
</script>
