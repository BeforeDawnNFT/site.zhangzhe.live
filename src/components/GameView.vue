<template>
  <div class="mx-auto content container text-center">
    <img style="max-width: 60%; width: 280px;" class="my-3" src="@/assets/glass.png" />
    <div class="my-4">
      <div class="row my-2">
        <div class="col" style="font-size: 1.5rem;">
          当前总共为长者增加 <span class="highlight-text">{{ totalSeconds }}</span> 秒
        </div>
      </div>
      <div class="row">
        <div class="col">
          共计 <span class="highlight-text">{{ year }}</span> 年 <span class="highlight-text">{{ month }}</span> 月 <span
            class="highlight-text">{{ day }}</span> 天 <span class="highlight-text">{{ hour }}</span> 时 <span
            class="highlight-text">{{ minute }}</span> 分 <span class="highlight-text">{{ second }}</span> 秒
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h4>你已经为长者增加 <span class="highlight-text">{{ addedSeconds}}</span> 秒</h4>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h5>{{gameTimeLeft / 1000}} 秒内疯狂点击 +1s!</h5>
      </div>
    </div>
    <div class="row my-2">
      <div class="col">
        <b-button variant="success" size="lg" v-if="!gameStart" @click="startGame()">倒数 3 秒开始 <br /> <span
            style="font-size: 0.8rem">续续倒计时</span></b-button>
        <b-button class="p-3 px-5" style="font-size: 1.5rem; font-style: bold;" variant="warning" size="lg"
          v-if="gameStart" :disabled="gameButtonDisabled" @click="addSeconds()">{{ gameButtonText }}</b-button>
      </div>
    </div>
    <hr class="my-4" />
    <div>
      <div class="row my-3" style="font-weight: bold;">
        <div class="col">
          你需要关注的点:
        </div>
      </div>
      <div class="mx-auto text-left p-2">
        <p>1. 同年出生的女皇已经离开, 我们衷心希望 96 岁高龄的长者能一直坚挺下去: 请大家帮我们一起祈福</p>
        <p>2. <span class="highlight-text">续续总秒数排名靠前</span>的记者们, 将会有高概率于近期获得<span class="highlight-text">长者系列 NFT
            空投</span> (请密切关注twitter: <a target="_blank" href="https://google.com">zhangzhe.live</a>)</p>
        <p>3. 我们将有后续玩法于近日推出，敬请大家期待</p>
      </div>
    </div>

    <b-modal id="game-end-modal" hide-footer hide-header no-close-on-esc no-close-on-backdrop>
      <div class="p-3">
        <div class="modal-card text-center p-4">

          <h2>听我说续续你</h2>
          <img style="max-width: 60%; width: 220px;" class="my-3" src="@/assets/glass.png" />

          <div class="row">
            <div class="col">
              苟利国家生死以
            </div>
          </div>
          <div class="row">
            <div class="col">
              岂因祸福避趋之
            </div>
          </div>

          <div class="row my-3">
            <div class="col">
              您在 +1S 续续活动中<br />总共贡献了 <span class="highlight-text">{{ addedSeconds }}</span> 秒
            </div>
          </div>

          <div class="row mt-4">
            <div class="col">
              <h2>超越了 <span class="highlight-text">xxx%</span> 的参与者</h2>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col">
              <b-button variant="success" size="lg" @click="startGame()">连接钱包获得额外 10 秒续续！</b-button>
            </div>
          </div>

          <img style="width: 80px;" class="mt-3" src="@/assets/qrcode.png" />
          <div class="row mt-4">
            <div class="col">
              截图分享，一起帮长者续续！
            </div>
          </div>
        </div>

        <div class="mx-auto text-left p-2">
          <div>1. 连接钱包后可获得额外 10 秒续续</div>
          <div class="mt-2">2. <span class="highlight-text">续续总秒数排名靠前</span>的记者们, 将会有高概率于近期获得<span class="highlight-text">长者系列 NFT
              空投</span> (请密切关注twitter: <a target="_blank" href="https://google.com">zhangzhe.live</a>)</div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
  
<style scoped>
.modal-card {
  border: 2px solid;
  border-radius: 10px;
}
</style>
    
<script>
export default {
  name: 'GameView',
  components: {

  },
  data() {
    return {
      totalSeconds: 0,
      addedSeconds: 0,
      gameStartTimeout: 3,
      gameTimeLeft: 3000,
      gameStart: false,
    }
  },
  methods: {
    startGame() {
      this.gameStart = true;
      this.gameStartTimeout = 3;
      this.gameTimeLeft = 3000;
      setInterval(() => {
        if (!this.gameStart || this.gameStartTimeout <= 0) {
          return;
        }
        this.gameStartTimeout -= 1;
      }, 1000);
      setInterval(() => {
        if (!this.gameStart || this.gameTimeLeft <= 0 || this.gameStartTimeout > 0) {
          return;
        }
        this.gameTimeLeft -= 10;

        if (this.gameTimeLeft <= 0) {
          this.onGameEnd();
        }
      }, 10);
    },
    addSeconds() {
      if (!this.gameStart || this.gameTimeLeft <= 0 || this.gameStartTimeout > 0) {
        return;
      }
      this.addedSeconds++;
    },
    onGameEnd() {
      this.$bvModal.show('game-end-modal');
    }
  },
  computed: {
    constants() {
      const minSeconds = 60;
      const hourSeconds = minSeconds * 60;
      const daySeconds = hourSeconds * 24;
      const monthSeconds = daySeconds * 30;
      const yearSeconds = monthSeconds * 12;
      return { minSeconds, hourSeconds, daySeconds, monthSeconds, yearSeconds }
    },
    year() {
      return Math.floor(this.totalSeconds / this.constants.yearSeconds);
    },
    month() {
      return Math.floor((this.totalSeconds - this.year * this.constants.yearSeconds) / this.constants.monthSeconds);
    },
    day() {
      return Math.floor((this.totalSeconds - this.year * this.constants.yearSeconds - this.month * this.constants.monthSeconds) / this.constants.daySeconds);
    },
    hour() {
      return Math.floor((this.totalSeconds - this.year * this.constants.yearSeconds - this.month * this.constants.monthSeconds - this.day * this.constants.daySeconds) / this.constants.hourSeconds);
    },
    minute() {
      return Math.floor((this.totalSeconds - this.year * this.constants.yearSeconds - this.month * this.constants.monthSeconds - this.day * this.constants.daySeconds - this.hour * this.constants.hourSeconds) / this.constants.minSeconds);
    },
    second() {
      return this.totalSeconds - this.year * this.constants.yearSeconds - this.month * this.constants.monthSeconds - this.day * this.constants.daySeconds - this.hour * this.constants.hourSeconds - this.minute * this.constants.minSeconds;
    },
    gameButtonDisabled() {
      return !this.gameStart || this.gameTimeLeft <= 0 || this.gameStartTimeout > 0;
    },
    gameButtonText() {
      if (this.gameStartTimeout > 0) {
        return `倒计时 ${this.gameStartTimeout} 秒后开始`;
      }
      return "+1s!";
    }
  }
}
</script>
  