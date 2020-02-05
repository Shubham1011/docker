import { comment } from './comment';

export interface Ipost{
    comments: Array<comment>,
    _id: string,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string,

}