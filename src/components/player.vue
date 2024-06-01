<template>
    <div class="player">
        <div class="player__cover">
            <img src="@/assets/img/icon/remove-player-1.png" alt="player"/>
        </div>
        <div class="player__content">
            <div class="player__top">
                <button v-if="isPlay" @click="handlerPlay" class="button player__btn m--play">
                </button>
                <button v-else @click="handlerPause" class="button player__btn m--pause">
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
                        <input type="range">
                    </div>
                </div>
            </div>
            <div class="player__bottom">
                <div class="player__time m--ether">
                    Эфир
                </div>
                <div class="player__progress">
                    <input type="range">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'player',
    data() {
        return {
            isPlay: false,
            isFavorites: false,
            isPlayRadio: true,
        }
    },
    methods: {
        handlerPlay() {
            this.isPlay = false;
        },
        handlerPause() {
            this.isPlay = true;
        },
        handlerFavorites(){
            this.isFavorites = !this.isFavorites;
        }
    }
}
</script>
