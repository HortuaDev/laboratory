class Point implements Points {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public add(other: Point): Point {
        this.x += other.x;
        this.y += other.y;

        return this;
    }

    public subtract(other: Point): Point {
        this.x -= other.x;
        this.y -= other.y;

        return this;
    }

    public scale(factor: number): Point {
        this.x *= factor;
        this.y *= factor;

        return this;
    }

    public distanceTo(other: Point): number {
        let result: number = Math.sqrt(Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2));

        return result;
    }

}

interface Points {

    x: number,
    y: number,
    add(other: Point): Point,
    subtract(other: Point): Point,
    scale(factor: number): Point,
    distanceTo(other: Point): number

}












