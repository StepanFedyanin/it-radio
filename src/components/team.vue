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
                    Имя Фамилия
                    <span>Основатель</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="team__cover">
                    <img src="@/assets/img/icon/remove-user.png" alt="user"/>
                </div>
                <div class="team__name">
                    Имя Фамилия
                    <span>Основатель</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="team__cover">
                    <img src="@/assets/img/icon/remove-user.png" alt="user"/>
                </div>
                <div class="team__name">
                    Имя Фамилия
                    <span>Основатель</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="team__cover">
                    <img src="@/assets/img/icon/remove-user.png" alt="user"/>
                </div>
                <div class="team__name">
                    Имя Фамилия
                    <span>Основатель</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="team__cover">
                    <img src="@/assets/img/icon/remove-user.png" alt="user"/>
                </div>
                <div class="team__name">
                    Имя Фамилия
                    <span>Основатель</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="team__cover">
                    <img src="@/assets/img/icon/remove-user.png" alt="user"/>
                </div>
                <div class="team__name">
                    Имя Фамилия
                    <span>Основатель</span>
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
