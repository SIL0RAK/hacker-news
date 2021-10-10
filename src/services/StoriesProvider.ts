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

class StoriesProvider {
    private loading: boolean = false;
    private errorMessage:string = null;
    private ids: Array<number> = [];
    private pageSize: number;
    public page: number;
    private stories: Array<IStory>;

    constructor(pageSize?: number) {
        this.pageSize = pageSize || 50;
    }

    public async fetchTopStories (): Promise<Array<string>> {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        return await response.json();
    }

    public fetchArticles (storiesIds: Array<string>): Promise<Array<IStory>> {
        return Promise.all(storiesIds.map( async (id: string) => {
            const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            return storyResponse.json();
        }));
    }

    setPageSize (size: number) {
        this.pageSize = size;
    }

    get hasError (): boolean {
        return !!this.errorMessage
    }

    get isLoading (): boolean {
        return this.loading;
    }

}

export default StoriesProvider