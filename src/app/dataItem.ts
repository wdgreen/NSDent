// >> listview-angular-data-item
export class DataItem {
    constructor(public id?: number,
        public name?: string,
        public description?: string,
        public title?: string,
        public text?: string,
        public image?: string,
        public selected?: boolean,
        public type?: string,
        public category?: string,
        public size?: number,
        public color?: string,
        public opacity?: number) {
    }
}
// << listview-angular-data-item
export class DataItem2 {
    constructor(public id?: number,
        public name?: string,
        public description?: string,
        public title?: string,
        public text?: string,
        public image?: string,
        public selected?: boolean,
        public type?: string,
        public category?: string,
        public size?: number,
        public color?: string) {
    }
}