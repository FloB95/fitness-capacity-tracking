<script>
	import StatsCard from './statsCard.svelte';
</script>

<div class="mt-16">
	<dl class="mt-5 grid gap-5 grid-cols-2 lg:grid-cols-3">
		<StatsCard title="Montag" value="120" />
		<StatsCard title="Dienstag" value="150" />
		<StatsCard title="Mittwoch" value="98" />
		<StatsCard title="Donnerstag" value="112" />
		<StatsCard title="Freitag" value="178" />
		<StatsCard title="Samstag" value="50" />
		<StatsCard title="Sonntag" value="78" />
	</dl>
</div>
