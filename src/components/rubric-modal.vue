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
            <div class="title m--white rubric-modal__title">
                <template v-if="ModalTemplate==='news'">Новости</template>
                <template v-else-if="ModalTemplate==='podcast'">Подкасты</template>
                <template v-else-if="ModalTemplate==='AI'">Поговори с ИИ</template>
                <template v-else-if="ModalTemplate==='educational'">Ликбез</template>
            </div>
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
            <template v-if="ModalTemplate==='news'">
                В этой рубрике будут выходить ежедневные и еженедельные новостные выпуски, освещающие ключевые события в мире IT, включая новые разработки, релизы продуктов, изменения в законодательстве, касающиеся технологий, и другие важные события.<br/><br/> Так же будем выдавать аналитические материалы - глубокие и не очень глубокие обзоры, в которых рассматриваются тенденции развития IT-индустрии, анализируются стратегические направления развития крупных компаний и перспективы новых технологий
            </template>
            <template v-else-if="ModalTemplate==='podcast'">
                В подкастах мы будем задавать вопросы айтишникам, специалистам из около айтишной среды, цифровым музыкантам, чиновникам от IT, бизнесменам, геймерам и киберспортсменам, криптовалютчикам и сами будем отвечать на вопросы простых людей, которые хотят разобраться в нашей сфере, которая пронизывает все сферы современной жизни. А если сами не сможем ответить, то будем искать тех, кто сможет ответить.
            </template>
            <template v-else-if="ModalTemplate==='AI'">
                Редакция IT-Радио собирается за круглым столом и задаёт ИИ вопросы, которые приходят к нам на почту на разные темы.<br/><br/> Цель - понять насколько далеко ИИ уходит в своём развитии от человека, дать ответы на вопросы. Попытаемся разобрать ответы искусственного интеллекта, дать свои комментарии, дополнить. Попытаемся понять его логику и логику его разработчиков, которую закладывали в работу нейросети.
            </template>
            <template v-else-if="ModalTemplate==='educational'">
                Будем рассказывать что такое IT-сфера. Какие у неё составляющие. Кого можно назвать айтишником, а кого нет и почему. Почему кому-то сложно понять IT и при чём тут точные науки.
            </template>
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
        ModalTemplate:{
            type: String,
            default() {
                return '';
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
