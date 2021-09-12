
export interface IStory {
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

const getTopStories = async (): Promise<Array<IStory>> => {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    const storiesIds: Array<string> = await response.json();

    return Promise.all(storiesIds.map( async (id: string) => {
        const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return storyResponse.json();
    }));
};

export default getTopStories;