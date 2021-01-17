<script lang="ts">
	import Router from 'svelte-spa-router';
	import List from './components/List/List.svelte';
	import Header from './components/Header/Header.svelte';

	const routes = {
		'*': List,
	}

</script>

<Header />
<Router {routes}/>