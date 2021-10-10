<script lang="ts">
    import Loader from '../Loader/Loader.svelte';
    import ListItem from './ListItem.svelte';
    import Center from "../Center.svelte";
    import Error from '../Error/Error.svelte'
    import useStoriesProvider from '../../hooks/useStoriesProvider';
    import { API, Routes } from '../../constants';
    
    const {
        next,
        items,
        isLoading,
        errorMessage,
    } = useStoriesProvider(API[window.location.pathname] || API[Routes.New] )
</script>

<div class="list">
    {#if $isLoading}
        <Center>
            <Loader />
        </Center>
    {:else if $errorMessage}
        <Center>
            <Error>Whoops: {$errorMessage}</Error>
        </Center>
    {:else}
        <ul>
            {#each $items as item, index}
                <ListItem item={item} />
            {/each}
        </ul>
        <center>
            <button on:click={next}>
                More
            </button>
        </center>
    {/if}
</div>

<style>
    ul {
        padding-left: 25px;
    }

    .list {
        height: 95%;
    }
</style>

