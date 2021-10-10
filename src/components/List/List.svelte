<script lang="ts">
    import { onMount } from 'svelte';
    import getTopStories from '../../services/getTopStories';
    import StoriesProvider from '../../services/StoriesProvider';
    import Loader from '../Loader/Loader.svelte';
    import ListItem from './ListItem.svelte';
    
    let isLoading = true;
    let errorMessage = null;
    let items: Array<any> = [];
    const storyProvider = new StoriesProvider();

    onMount(async () => {
        isLoading = true;
        errorMessage = null;

        try {
            const ids = await storyProvider.fetchTopStories();
            
            items = await storyProvider.fetchArticles(ids.slice(0, storyProvider.page));
        } catch (error) {
            errorMessage = error.message;
            console.log(error);
        }
        
        isLoading = false;
    })
</script>

<div class="list">
    {#if isLoading}
        <Loader />
    {:else if errorMessage}
        <div>
            Whoops: {errorMessage}
        </div>
    {:else}
        <ul>
            {#each items as item, index}
                <ListItem item={item} />
            {/each}
        </ul>
    {/if}
</div>

<style>
    ul {
        padding-left: 25px;
    }
</style>

