<template>
  <div>
    <SplashView v-if="!game"></SplashView>
    <GameView v-if="game"></GameView>
  </div>
</template>

<script>
import SplashView from '@/components/SplashView.vue'
import GameView from '@/components/GameView.vue'

export default {
  name: 'App',
  components: {
    SplashView,
    GameView
  },
  data() {
    return {
      game: false
    }
  }
}
</script>