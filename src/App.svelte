<script lang="ts">
	import Router from 'svelte-spa-router';
	import List from './components/List/List.svelte';
	import Header from './components/Header/Header.svelte';

	const routes = {
		'*': List,
	}

</script>

<div class="app">
	<div class="content">
		<Header />
		<Router {routes}/>
	</div>
</div>

<style>
	.app {
		display: flex;
		justify-content: center;
		min-height: 100%;
	}

	.content {
		width: 1200px;
		min-height: 100%;
		background-color: #f6f6f3;
	}
</style>
