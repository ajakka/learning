export class LikesCount {
    constructor(private _likesCount: number) { }

    public onClick() {
        this._likesCount++;
    }

    public get likesCount() : number{
        return this._likesCount;
    }
}