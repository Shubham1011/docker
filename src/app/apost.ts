import { AComment } from './acomment';

export class APost {
    constructor(
        public title: string,
        public content: string,
        public comments:Array<AComment>,
        public _id:string
    ){

    }
}
