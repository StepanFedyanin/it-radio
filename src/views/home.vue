<template>
	<div class="app__content home">
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
			<div>
				<div>
					IT-RADIO. 2023
					<span>
						Сегодня IT-сфера развивается настолько быстро, что следить за всеми новинками и изменениями в ней становится все сложнее.
							<br/>
						Но есть способ всегда быть в курсе последних новостей и событий — это IT-радио.
					</span>
				</div>
				<h2 class="h2">
					Открывая новые горизонты в мире технологий
				</h2>
				<div>
					IT-RADIO. 2023
					<span>
						IT-радио — это уникальный проект, который объединяет в себе самых ярких представителей IT-индустрии, а также экспертов из различных областей, чтобы поделиться своими знаниями и опытом с широкой аудиторией.
						Каждое шоу на IT-радио включает в себя актуальные темы, новости, обзоры, интервью с экспертами и многое другое.
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {TweenMax, Linear, gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default {
	name: 'home',
	created() {
	},
	mounted() {
		this.initScene();
	},
	methods: {
		initScene() {
			gsap.registerPlugin(ScrollTrigger);
			gsap.to(this.$refs.target, {
					scale: 1.2,
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
