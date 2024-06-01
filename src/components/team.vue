<template>
    <div class="team">
        <div class="team__header">
            <h2 class="h2 team__title">
                Наша команда
            </h2>
            <div class="team__description">
                На IT волне команда профессионалов неутомимо трудится, чтобы дарить слушателям самые свежие и актуальные
                новости из мира технологий, отвечать на их вопросы и обсуждать горячие темы на IT радио.
            </div>
        </div>
        <Swiper
            :slides-per-view="4"
            :space-between="20"
            :modules="modules"
            :pagination="{
                el: '.team__progress',
                clickable: true,
                type: 'progressbar',
            }"
            class="team__slider"
        >
            <SwiperSlide class="team__item">
                <div class="team__cover">
                    <img src="@/assets/img/icon/remove-user.png" alt="user"/>
                </div>
                <div class="team__name">
                    Иван Некрасов
                    <span>Директор по развитию ООО "Флексайтс"</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="team__cover">
                    <img src="@/assets/img/icon/remove-user-2.jpg" alt="user"/>
                </div>
                <div class="team__name">
                    Снежана Барышникова
                    <span>-</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="team__cover">
                    <img src="@/assets/img/icon/remove-user-3.jpg" alt="user"/>
                </div>
                <div class="team__name">
                    Даниил Мартьянов
                    <span>Дизайнер</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="team__cover">
                    <img src="@/assets/img/icon/remove-user-4.jpg" alt="user"/>
                </div>
                <div class="team__name">
                    Михаил Майоров
                    <span>Программист (Backend, Python)</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="team__cover">
                    <img src="@/assets/img/icon/remove-user-5.jpg" alt="user"/>
                </div>
                <div class="team__name">
                    Ксения Деркунова
                    <span>Журналист</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="team__cover">
                    <img src="@/assets/img/icon/remove-user-6.jpg" alt="user"/>
                </div>
                <div class="team__name">
                    Анастасия Артамонова
                    <span>Дизайнер</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="team__cover">
                    <img src="@/assets/img/icon/remove-user-7.jpg" alt="user"/>
                </div>
                <div class="team__name">
                    -
                    <span>-</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="team__cover">
                    <img src="@/assets/img/icon/remove-user-8.jpg" alt="user"/>
                </div>
                <div class="team__name">
                    Никита Гынгазов
                    <span>-</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="team__cover">
                    <img src="@/assets/img/icon/remove-user-9.jpg" alt="user"/>
                </div>
                <div class="team__name">
                    Анна Чистякова
                    <span>-</span>
                </div>
            </SwiperSlide>
        </Swiper>
        <div class="team__tools">
            <div class="team__progress" ref="progressBar">
                <span></span>
            </div>
            <router-link :to="{name: 'about'}" class="m--link">
                Больше о нас
            </router-link>
        </div>
    </div>
</template>

<script>
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination, Scrollbar} from "swiper/modules";

export default {
    name: 'team',
    components: {Swiper, SwiperSlide},
    data() {
        return {
            modules: [Scrollbar, Pagination],
        }
    }
}
</script>
