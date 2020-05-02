

export class Blog {
    
    constructor(
        public image: string,
        public title: string,
        public description: string,
        public date: Date,
        public id?: number,
    ){}
}