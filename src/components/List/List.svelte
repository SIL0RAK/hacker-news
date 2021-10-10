<script lang="ts">
    import { onMount } from 'svelte';
    import getTopStories from '../../services/getTopStories';
    import Loader from '../Loader/Loader.svelte';
    import ListItem from './ListItem.svelte';
    
    let isLoading = true;
    let errorMessage = null;
    let items: Array<any> = [];

    onMount(async () => {
        isLoading = true;
        errorMessage = null;

        try {
            items = await getTopStories();
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

