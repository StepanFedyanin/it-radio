<template>
    <div class="player">
        <div class="player__cover">
            <img :src="currentPlay.art" alt="player"/>
        </div>
        <div class="player__content">
            <div class="player__top">
                <button v-if="isPlay" @click="handlerPause" class="button player__btn m--pause">
                </button>
                <button v-else @click="handlerPlay" class="button player__btn m--play">
                </button>
                <div class="player__executor">
                    {{currentPlay.title || '—'}}
                    <span>{{currentPlay.artist || '—'}}</span>
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
                        <input type="range" v-model="player.volume" @change="changeVolume">
                    </div>
                </div>
            </div>
            <div class="player__bottom">
                <div class="player__time m--ether">
                    Эфир
                </div>
                <div class="player__progress">
                    <input :disabled="player.live" type="range" v-model="player.progress">
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
			connection: null,
			currentPlay: {},
			player: {
				target: null,
				volume: 50,
				progress: 100,
				live: false
			}
		}
    },
	created() {
		this.connectionPlayer();
	},
	mounted() {
		this.initPlayer();
        // this.$refs.player.addEventListener('timeupdate', this.updateProgress);
    },
    methods: {
		initPlayer(){
			this.player.target = document.createElement('audio')
			this.player.target.src = '';
			this.player.target.preload = 'auto';
			this.player.target.controls = true
		},
		connectionPlayer() {
			if (this.connection) {
				this.connection.removePlay();
			}
			this.connection = new Player();
			this.connection.init();
			this.connection.onHandler(this.getPlaying);
		},
		getPlaying (e){
			const jsonData = JSON.parse(e.data)
			if (jsonData?.pub?.data){
				const data = jsonData?.pub?.data;
				if (data.np.station.listen_url!==this.player.target.src){
					this.player.target.src = data.np.station.listen_url;
				}
				this.player.live = true;
				this.currentPlay = data.np.now_playing.song;
			}
		},
        updateProgress(){
            console.log(this.$refs.player.currentTime)
            console.log(this.$refs.player.duration)
        },
        handlerPlay() {
			if (this.player.target?.play){
				this.player.target.play();
				this.isPlay = true;
			}
        },
        handlerPause() {
			console.log(this.player.target?.pause)
			if (this.player.target.src) {
				this.player.target.pause();
				this.isPlay = false;
			}
        },
        handlerFavorites(){
            this.isFavorites = !this.isFavorites;
        },
        setVolume(){
			this.player.volume = this.player.volume === 0? 50: 0;
			this.player.target.volume = this.player.volume / 100;
        },
        changeVolume() {
			this.player.target.volume = this.player.volume / 100;
        },

    }
}
</script>
