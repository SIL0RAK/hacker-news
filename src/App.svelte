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
		flex-direction: column;
		align-items: center;
	}

	.content {
		width: 1200px;
		background-color: #f6f6f3;
	}
</style>
