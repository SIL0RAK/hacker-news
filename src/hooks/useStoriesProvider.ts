import { onMount } from 'svelte';
import { writable } from "svelte/store";

interface IStory {
    by: string,
    descendants: number,
    id: number,
    kids: Array<number>,
    score: number,
    time: number,
    title: string,
    type: string
    url: string,
}

const useStoriesProvider = () => { 
    let isLoading = writable(true);
    let errorMessage = writable(null);
    let items = writable([] as Array<any>);
    let ids: Array<string> = [];
    let page = 0;
    let pageSize = 25;
    
    const fetchTopStories = async () => {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        ids = await response.json();
    }

    const fetchArticles = (storiesIds: Array<string>): Promise<Array<IStory>> => {
        return Promise.all(storiesIds.map( async (id: string) => {
            const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            return storyResponse.json();
        }));
    }

    const next = async () => {
        page ++;

        const start = page * pageSize;
        const pageIds = ids.slice(start, start + pageSize)
        const stories = await fetchArticles(pageIds);

        items.update(i => ([...i, ...stories]));
    }

    onMount(async () => {
        isLoading.update(() => true);
        errorMessage.update(() => null);

        try {
            await fetchTopStories();
            await next();
        } catch (error) {
            errorMessage = error.message;
        }

        isLoading.update(() => false);
    })

    return { errorMessage, isLoading, items, next }
}

export default useStoriesProvider;