<template>
	<div class="song-item" :class="[selectSong===song&&'m--select']" @click="handlerSelectSong">
		<div class="song-item__selected" :class="[!isPlay&&'m--stop']">
			<svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path class="" d="M0 15C0 13.6193 1.11929 12.5 2.5 12.5C3.88071 12.5 5 13.6193 5 15V27.5H0V15Z" fill="#7138F4"/>
				<path d="M7 9C7 7.61929 8.11929 6.5 9.5 6.5C10.8807 6.5 12 7.61929 12 9V27.5H7V9Z" fill="#7138F4"/>
				<path d="M14 12C14 10.6193 15.1193 9.5 16.5 9.5C17.8807 9.5 19 10.6193 19 12V27.5H14V12Z" fill="#7138F4"/>
				<path d="M21 3C21 1.61929 22.1193 0.5 23.5 0.5C24.8807 0.5 26 1.61929 26 3V27.5H21V3Z" fill="#7138F4"/>
				<path d="M28 20C28 18.6193 29.1193 17.5 30.5 17.5C31.8807 17.5 33 18.6193 33 20V27.5H28V20Z" fill="#7138F4"/>
			</svg>
		</div>
		<div>
			<button v-if="isPlay" @click="handlerPause" class="button song-item__btn m--pause">
			</button>
			<button v-else @click="handlerPlay" class="button song-item__btn m--play">
			</button>
		</div>
		<div class="song-item__info">
			<span>Название трека</span>
			Исполнитель
		</div>
		<div class="song-item__tools">
			<button class="button song-item__btn m--small m--favorites"></button>
			<button class="button song-item__btn m--small m--add"></button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'song-item',
	props:{
		selectSong:{
			type: Number,
			default(){
				return null
			}
		},
		song:{
			type: Number,
			default(){
				return null
			}
		},
		playSong:{
			type: Boolean,
			default(){
				return false
			}
		}
	},
	watch: {
		'playSong': {
			immediate: true,
			handler() {
				this.isPlay = this.playSong;
			},
		}
	},
	data(){
		return{
			isPlay: this.playSong
		}
	},
	methods:{
		handlerPlay() {
			this.isPlay = true;
		},
		handlerPause() {
			this.isPlay = false;
		},
		handlerSelectSong(){
			this.$emit('changeSelect', this.song)
		}
	}
}
</script>
