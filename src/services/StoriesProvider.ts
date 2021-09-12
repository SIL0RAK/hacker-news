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

    constructor(pageSize) {
        this.pageSize = pageSize || 50;
    }

    async fetchIds () {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        this.ids = await response.json();
    }

    fetchArticles () {
        
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