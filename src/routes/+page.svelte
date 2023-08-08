<script lang="ts">
	import Chart from '$lib/components/chart.svelte';
	import StatsGrid from '$lib/components/statsGrid.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="text-center my-14">
	<h1 class="text-3xl font-bold text-slate-300">Auslastung im Fitnessstudio</h1>

	<p class="mt-6 text-lg font-semibold">Aktuell: {data.currentUsers}</p>
</div>


<Chart {data} />
<StatsGrid  />