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
                <div class="title rubric-block__title">Новости</div>
                <div class="p rubric-block__description m--50">Новости из мира цифровых и около цифровых технологий, рассказанные понятным языком.</div>
                <button class="button m--arrow rubric-block__btn" @click="showModalRubric('news')">Узнать больше</button>
            </div>
            <div class="rubric-block__item">
                <div class="title rubric-block__title">Подкасты</div>
                <div class="p rubric-block__description m--50">Диалоги, записанные нашей командой с интересными гостями из мира IT.</div>
                <button class="button m--arrow rubric-block__btn" @click="showModalRubric('podcast')">Узнать больше</button>
            </div>
            <div class="rubric-block__item">
                <div class="title rubric-block__title">Поговори с ИИ</div>
                <div class="p rubric-block__description m--50">Общаемся с искусственным интеллектом и нейросетями. Пытаемся понять на что он способен и что может.</div>
                <button class="button m--arrow rubric-block__btn" @click="showModalRubric('AI')">Узнать больше</button>
            </div>
            <div class="rubric-block__item">
                <div class="title rubric-block__title">Ликбез</div>
                <div class="p rubric-block__description m--50">Ликвидация безграмотности в сфере IT. Объяснить понятия так, чтобы понял и ребёнок и подросток и старшее поколение. Рубрика, направленная на повышение уровня осведомленности в IT.</div>
                <button class="button m--arrow rubric-block__btn" @click="showModalRubric('educational')">Узнать больше</button>
            </div>
        </div>
    </div>
    <RubricModal :showModal="isShowModalRubric" @hideModal="hiddenModalRubric" :ModalTemplate="ModalTemplate"/>
</template>

<script>
import RubricModal from "@/components/rubric-modal.vue";

export default {
    name: 'rubric-block',
    components: {RubricModal},
    data(){
        return{
            isShowModalRubric: false,
            ModalTemplate:null
        }
    },
    methods:{
        showModalRubric(key){
            this.ModalTemplate = key
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
