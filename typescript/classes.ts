/**
 * Classes group functionality together.
 */
class Point {
    private x: number;
    private y: number;

    protected sum: number;

    /**
     * You can declare parameters and assign them inside constructor like this:
     * constructor(private x?: number, private y?: number) { }
     */
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    public drawPoint() {
        let length = this.x;
        if (this.y > this.x) length = this.y;

        for (let i = 1; i <= length; i++) {
            let row = '';
            for (let j = 1; j <= length; j++) {
                if (j == this.x && i == this.y) row += this.x;
                else row += '-';
            }
            console.log(row);
        }
    }

    public findDistanceFrom(other: Point) {
        let dist: Point = new Point(0, 0);
        dist.x = other.x - this.x;
        dist.y = other.y - this.y;
        return dist;
    }

    /**
     * Properies are functions that look like fields
     */

    public get X() : number {
        return this.x
    }
    
    public set X(x : number) {
        this.x = x;
    }
    
}

let myPosition = new Point(5, 6);
let otherPosition = new Point(7, 8);


myPosition.drawPoint();
otherPosition.drawPoint();
myPosition.findDistanceFrom(otherPosition).drawPoint();