export enum Routes {
    New = '/new/',
    Top = '/top/',
    Ask = '/ask/',
    Show = '/show/',
    Job = '/job/',
    Best = '/best/'
};

export const API = {
    [Routes.New]: '/v0/newstories',
    [Routes.Best]: '/v0/beststories',
    [Routes.Ask]: '/v0/askstories',
    [Routes.Job]: '/v0/jobstories',
    [Routes.Show]: '/v0/showstories',
    [Routes.Top]: '/v0/topstories'
}