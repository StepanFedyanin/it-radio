<template>
    <div class="player">
        <div class="player__cover">
            <img src="@/assets/img/icon/remove-player-1.png" alt="player"/>
        </div>
        <div class="player__content">
            <div class="player__top">
                <button v-if="isPlay" @click="handlerPause" class="button player__btn m--pause">
                </button>
                <button v-else @click="handlerPlay" class="button player__btn m--play">
                </button>
                <div class="player__executor">
                    Название подкаста
                    <span>Подкаст</span>
                </div>
                <div class="player__favorites" :class="[isFavorites&&'m--active']" @click="handlerFavorites">
                </div>
                <div class="player__tools">
                    <FormKit
                        v-model="isPlayRadio"
                        type="toggle"
                        label="Включить мою музыку"
                    />
                    <div class="player__volume">
                        <span @click="setVolume"/>
                        <input type="range" v-model="volume" @change="changeVolume">
                    </div>
                </div>
            </div>
            <audio ref="player" :src="audioUrl"></audio>
            <div class="player__bottom">
                <div class="player__time m--ether">
                    Эфир
                </div>
                <div class="player__progress">
                    <input type="range" v-model="progress">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {audio as Player} from "@/services";

export default {
    name: 'player',
    data() {
        return {
            audioUrl: 'http://82.97.242.49:18000/radio.mp3',
            isPlay: false,
            isFavorites: false,
            isPlayRadio: true,
            volume: 100,
            progress: 100,
			connection: null,
		}
    },
	created() {
		this.connectionPlayer();
	},
	mounted() {
        // this.$refs.player.addEventListener('timeupdate', this.updateProgress);
    },
    methods: {
		connectionPlayer() {
			if (this.connection) {
				this.connection.removePlay();
			}
			this.connection = new Player();
			this.connection.play();
			this.connection.songs();
			
			console.log(this.connection)
		},
        updateProgress(){
            console.log(this.$refs.player.currentTime)
            console.log(this.$refs.player.duration)
        },
        handlerPlay() {
            this.$refs.player.play();
            this.isPlay = true;
        },
        handlerPause() {
            this.$refs.player.pause();
            this.isPlay = false;
        },
        handlerFavorites(){
            this.isFavorites = !this.isFavorites;
        },
        setVolume(){
            this.volume = this.volume === 0? 100: 0;
            this.$refs.player.volume = this.volume / 100;
        },
        changeVolume() {
            this.$refs.player.volume = this.volume / 100;
        },

    }
}
</script>
