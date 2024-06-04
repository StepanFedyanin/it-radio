<template>
	<div class="song-list">
		<SongItem
			v-for="i in 10"
			:key="i"
			:song="i"
			:playSong="i===selectSong"
			:selectSong="selectSong"
			@changeSelect="changeSelectSong"
		/>
	</div>
</template>

<script>
import SongItem from "@/components/song-item.vue";

export default {
	name: 'song-list',
	components: {SongItem},
	data(){
		return{
			selectSong: null
		}
	},
	methods:{
		changeSelectSong(id){
			this.selectSong = id;
		}
	}
}
</script>
