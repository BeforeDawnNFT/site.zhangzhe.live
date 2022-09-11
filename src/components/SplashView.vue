<template>
    <div class="mx-auto content container text-center" style="max-width: 540px;">
        <b-card class="my-3">
            <img id="photo" class="my-3 rounded" src="@/assets/photo.png" />

            <div class="row text">
                <div class="col-6">
                    长者 <br />
                    (1926 - 现今)<br />
                    万寿无疆
                </div>
                <div class="col-6">
                    女王 <br />
                    (1926 - 2022)<br />
                    驾鹤归去
                </div>
            </div>

            <div class="row my-1 mt-5">
                <div class="col">
                    <h4>斯人已逝，生者如斯</h4>
                </div>
            </div>
            <div class="row my-1">
                <div class="col">
                    <h4>欢迎参加 <span class="highlight-text">听我说续续你</span> 活动</h4>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <b-button variant="success" size="lg" @click="startGame()">点击继续</b-button>
                </div>
            </div>
        </b-card>
    </div>
</template>

<style scoped>
#photo {
    width: 80%;
}

.text {
    font-weight: bold;
}
</style>

<script>
export default {
    name: "SplashView",
    methods: {
        startGame() {
            this.$router.push({ name: "GameView" });
        }
    }
}
</script>