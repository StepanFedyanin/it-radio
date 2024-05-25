<template>
    <div class="home">
        <div class="app__content">
            <div class="home__meaning" ref="targetWrapper">
                <p class="home__subtitle">
                    Мы — <span>диджитал радио</span><br/>
                    Помогаем чему-то решить задачи в интернете.<br/>
                    Находимся в Челябинске. <span>Работаем по всей России и Миру.</span><br/>
                </p>
                <h1 class="home__title" ref="targetTitle">
                    IT Радио —
                    <span id="targetTitleSpan">радиостанция</span>
                    <br/>
                    <span id="targetTitleSpan">про  сферу</span> технологий<br/>
                    и развитие <span id="targetTitleSpan">в IT</span><br/>
                </h1>
                <div class="home__banner" ref="target">
                </div>
            </div>

            <div class="home__description">
                <div class="home__info">
                    <div class="text home__info--item">
                        IT-RADIO. 2023
                        <span>
						Сегодня IT-сфера развивается настолько быстро, что следить за всеми новинками и изменениями в ней становится все сложнее.
                        <br/>
                        <br/>						Но есть способ всегда быть в курсе последних новостей и событий — это IT-радио.
					</span>
                    </div>
                    <h2 class="h2 m--border">
                        Открывая новые горизонты в мире технологий
                    </h2>
                    <div class="text home__info--item m--circle">
                    <span>
						IT-радио — это уникальный проект, который объединяет в себе самых ярких представителей IT-индустрии, а также экспертов из различных областей, чтобы поделиться своими знаниями и опытом с широкой аудиторией.
                        <br/>
                        <br/>
						Каждое шоу на IT-радио включает в себя актуальные темы, новости, обзоры, интервью с экспертами и многое другое.
					</span>
                    </div>
                </div>
                <div class="home__content">
                    <div class="home__content--item m--one-circle">
                        <span class="title">Музыка</span>
                        Нам важно создать комфортную атмосферу, которая поможет сосредоточиться на задачах и улучшит продуктивность.
                    </div>
                    <div class="home__content--item m--two-circle">
                        <span class="title">Подкасты</span>
                        Возможность задать вопросы профессионалам из разных областей IT
                    </div>
                    <div class="home__content--item m--three-circle">
                        <span class="title">Новости</span>
                        Обзоры последних новинок и изменений в IT-индустрии
                    </div>
                </div>
            </div>
        </div>
        <team/>
    </div>
</template>

<script>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Team from "@/components/team.vue";

export default {
    name: 'home',
    components: {Team},
    created() {
    },
    mounted() {
        this.initScene();
    },
    methods: {
        initScene() {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(this.$refs.target, {
                    scale: 1,
                    scrollTrigger: {
                        trigger: this.$refs.targetWrapper,
                        scrub: true,
                        start: 0,
                        end: 600,
                        pin: true,
                    },
                },
            );
            gsap.to(this.$refs.targetTitle, {
                    color: 'transparent',
                    backgroundImage: 'linear-gradient(to right, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
                    scrollTrigger: {
                        trigger: this.$refs.targetWrapper,
                        scrub: true,
                        start: 0,
                        end: 600,
                    },
                },
            );
            const collageItems = Array.from(document.querySelectorAll("#targetTitleSpan"));
            collageItems.forEach((elem) => {
                gsap.to(elem, {
                        color: '#232323',
                        webkitTextStroke: '3px transparent',
                        scrollTrigger: {
                            trigger: this.$refs.targetWrapper,
                            scrub: true,
                            start: 0,
                            end: 600,
                        },
                    },
                )
            });
        }
    }
}
</script>
