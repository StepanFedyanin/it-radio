<template>
    <vue-final-modal
        v-model="show"
        class="modal__container m--right"
        content-class="modal__block m--half rubric-modal"
        content-transition="vfm-fade"
        overlay-transition="vfm-fade"
        :clickToClose="false"
        @click-outside="$emit('hideModal')"
    >
        <div class="rubric-modal__header">
            <div class="title m--white rubric-modal__title">Подкасты</div>
            <button
                class="button modal__close rubric-modal__close"
                @click="$emit('hideModal')"
            >
            </button>
        </div>
        <div class="rubric-modal__cover">
            <img src="@/assets/img/icon/remove-rubrics.png" alt=""/>
        </div>
        <div class="rubric-modal__description">
            Обсуждение влияния информационных технологий на музыку, история создания IT-групп и их влияние на индустрию.
            <br/>
            <br/>
            С развитием цифровых технологий процесс создания и записи музыки стал гораздо доступнее и эффективнее. Профессиональные звукозаписывающие программы предоставляют музыкантам и звукорежиссёрам широкие возможности для обработки и микширования аудиоматериала.
        </div>
        <button class="button m--fit-content m--white m--arrow">Написать</button>
    </vue-final-modal>

</template>

<script>
export default {
    name: 'RubricModal',
    props: {
        showModal: {
            type: Boolean,
            default() {
                return false;
            }
        },
    },
    computed: {
        show() {
            return this.showModal;
        },
    },
}
</script>
