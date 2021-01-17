<script lang="ts">
    import { onMount } from 'svelte';
    import getTopStories from '../../services/getTopStories';
    
    let isLoading = true;
    let items = new Set();

    onMount(async () => {
        const data = await getTopStories();
        console.log(data);
    })

</script>


<div>
    listas
</div>