<script lang="ts">
    import Loader from '../Loader/Loader.svelte';
    import ListItem from './ListItem.svelte';
    import Center from "../Center.svelte";
    import useStoriesProvider from '../../hooks/useStoriesProvider';
    
    const { isLoading, items, errorMessage, next } = useStoriesProvider()
</script>

<div class="list">
    {#if $isLoading}
        <Center>
            <Loader />
        </Center>
    {:else if $errorMessage}
        <Center>
            Whoops: {errorMessage}
        </Center>
    {:else}
        <ul>
            {#each $items as item, index}
                <ListItem item={item} />
            {/each}
        </ul>
    {/if}
    <div>
        <button on:click={next}>
            More
        </button>
    </div>
</div>

<style>
    ul {
        padding-left: 25px;
    }

    .list {
        height: 95%;
    }
</style>

