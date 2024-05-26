<template>
    <div class="rubric-block">
        <div class="rubric-block__header">
            <h2 class="h2">
                Рубрики
            </h2>
            <button class="button m--arrow" v-if="$route.name !== 'rubric'" @click="next('rubric')">Смотреть все</button>
        </div>
        <div class="p rubric-block__description">
            IT-радио - это уникальная платформа для обмена опытом, знаниями и обсуждения актуальных вопросов, связанных с разработкой программного обеспечения, искусственного интеллекта, интернета вещей и других направлений IT-индустрии
        </div>
        <div class="rubric-block__list">
            <div class="rubric-block__item">
                <div class="title rubric-block__title">IT-эксперт на связи</div>
                <div class="p rubric-block__description m--50">Ведущие приглашают IT-специалиста, который отвечает на вопросы слушателей и обсуждает актуальные темы и проблемы</div>
                <button class="button m--arrow rubric-block__btn" @click="showModalRubric">Узнать больше</button>
            </div>
            <div class="rubric-block__item">
                <div class="title rubric-block__title">IT и музыка</div>
                <div class="p rubric-block__description m--50">Обсуждение влияния информационных технологий на музыку, история создания IT-групп и их влияние на индустрию.</div>
                <button class="button m--arrow rubric-block__btn" @click="showModalRubric">Узнать больше</button>
            </div>
            <div class="rubric-block__item">
                <div class="title rubric-block__title">Виртуальный мир</div>
                <div class="p rubric-block__description m--50">Программа о последних новинках в игровой индустрии и развитии виртуальной реальности..</div>
                <button class="button m--arrow rubric-block__btn" @click="showModalRubric">Узнать больше</button>
            </div>
        </div>
    </div>
    <RubricModal :showModal="isShowModalRubric" @hideModal="hiddenModalRubric"/>
</template>

<script>
import RubricModal from "@/components/rubric-modal.vue";

export default {
    name: 'rubric-block',
    components: {RubricModal},
    data(){
        return{
            isShowModalRubric: false
        }
    },
    methods:{
        showModalRubric(){
            this.isShowModalRubric = true;
        },
        hiddenModalRubric(){
            this.isShowModalRubric = false;
        },
        next(name){
            this.$router.push({name})
        }
    }
}
</script>
