<script lang="ts">
	import Chart, { type ChartItem } from 'chart.js/auto';
	import type { PageData } from '../../routes/$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	onMount(() => {
		const ctx = document.getElementById('myChart') as ChartItem | null;
		if (ctx) {
			console.log(ctx);
			new Chart(ctx, {
				type: 'line',
				data: {
					labels: [
						'11:00 Uhr',
						'12:00 Uhr',
						'13:00 Uhr',
						'14:00 Uhr',
						'15:00 Uhr',
						'16:00 Uhr',
						'17:00 Uhr',
						'18:00 Uhr',
						'19:00 Uhr',
						'20:00 Uhr',
						'21:00 Uhr',
						'22:00 Uhr'
					],
					datasets: data.datasets
				},
				options: {
					scales: {
						y: {
							beginAtZero: true
						}
					}
				}
			});
		}
	});
</script>

<div class="mx-auto max-w-5xl">
  <canvas id="myChart" class="m-0" />
</div>
