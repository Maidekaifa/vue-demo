<template>
	<div>
		<navbar style="background: #FFFFFF;" class="text-center" title="运动介绍"></navbar>
		<hr />
		<div class="container" id="title">
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{msg}}</p>
		</div>
		<div class="container">
			<vue-preview class="previews" :slides="list" @close="handleClose" :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}" :previewBoxStyle="{border: '1px solid #eee'}" :tapToClose="true" />
		</div>
		<div style="width: 100%;height: 58px;"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:"体育运动具有强身健体、娱乐，另外还有教育、政治、经济等功能。也可以说所处的历史阶段不同，体育就具有不同的功能，但是自从体育产生以来，强身健体及其娱乐自始至终是体育的主要功能。体育是一种复杂的社会文化现象，以身体活动为基本手段，增强体质、增进健康及其培养人的各种心理品质为目的。尤其是随着社会经济的发展，人们的生活水平得到了提高，人们对精神方面的需要高于对物质方面的需要。人们对于体育的认识不只限于强身健体的方面，希望通过体育活动的参与得到更多的精神享受。例如，人们观看体育比赛，优美的体育动作，扣人心弦的竞赛等都给人们以美的享受，还有在比赛现场，随着比赛的进行，人们可以大声的叫喊，可以尽情的发泄自己的情感，使人们在精神上有一种轻松感。一次成功的射门，一个漂亮的投篮，随着快节奏的音乐跳健美操等，不只是健身，更重要的是给人们的一种精神与神经方面的释放感，愉快感、成就感和心情的舒畅感。这些都是体育带给人们精神方面的价值。生活水平越高，人们越是注重体育精神层面的价值。(点击下图查看详情)",
				list:[
					{
						src: '../../static/img/basketball.jpg',
						msrc: '../../static/img/basketballmin.png',
						alt: 'picture1',
						title: '一位外国父亲陪着孩子们打篮球。',
						w: 600,
						h: 400
					},
					{
						src: '../../static/img/football.jpg',
						msrc: '../../static/img/footballmin.png',
						alt: 'picture2',
						title: '足球（football），有“世界第一运动”的美誉，是全球体育界最具影响力的单项体育运动。',
						w: 1200,
						h: 900
					},
					{
						src: '../../static/img/running.jpg',
						msrc: '../../static/img/runningmin.png',
						alt: 'picture3',
						title: '跑步最佳时间是上午9点到10点和下午4点到6点。前者时空气清新，体内肾上腺皮质激素水平达峰值。而根据生物钟，约4点到6点身体的适应能力及体力的调动发挥最佳。',
						w: 600,
						h: 400
					},
					{
						src: '../../static/img/yujia.jpg',
						msrc: '../../static/img/yujiamin.png',
						alt: 'picture4',
						title: '瑜伽姿势运用古老而易于掌握的技巧，改善人们生理、心理、情感和精神方面的能力，是一种达到身体、心灵与精神和谐统一的运动方式，包括调身的体位法、调息的呼吸法、调心的冥想法等，以达至身心的合一。',
						w: 1200,
						h: 900
					}
				]
			}
		},
		methods: {
			handleClose () {
				console.log('close event')
			}
		}
	}
</script>

<style>
	#title p{
		font-size: 14px;
		font-style: initial;
		line-height: 20px;
	}
	.previews img{
		width: 50%;
		height: 140px;
		float: left;
	}
</style>