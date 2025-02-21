export class MyMath {
    private static instance: MyMath;

    private constructor() {}

    public static get Instance(): MyMath {
        if (this.instance == null) {
            this.instance = new MyMath();
        }
        return this.instance;
    }

    public add(a: number, b: number): number {
        return a + b;
    }

    private add2(): void {}
}
