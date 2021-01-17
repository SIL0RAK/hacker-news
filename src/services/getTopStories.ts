const getTopStories = async () => {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    const data = await response.json();

    return data;
};

export default getTopStories;