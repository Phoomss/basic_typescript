export const fuctiontype = () =>{
    const greet = (namme:string, title?:string):string =>{
        return `Hello ${title ? title + " " : ""}${namme}`;
    }

    // console.log(greet("John"));
    // console.log(greet("John", "Mr."));

    // parameter rest operator
    const sum = (...numbers:number[]):number =>{
        return numbers.reduce((prev, curr) => prev + curr, 0);
    }
    // console.log(sum(1, 2, 3, 4, 5)); // 15

    // overload signature
    function process(x: string): string;
    function process(x: number): number;
    function process(x: boolean, y:number):boolean;

    // implementation
    function process(x: number | string | boolean, y?: number): string | number | boolean {
        if (typeof x === "string") {
            return `String: ${x}`;
        } else if (typeof x === "number") {
            return x * 2;
        } else if (typeof x === "boolean" && typeof y === "number") {
            return x && y > 0;
        } else {
            throw new Error("Invalid arguments");
        }
    }

    console.log(process(5))
    console.log(process("Hello"));
    console.log(process(true, 1));
    console.log(process(false, 0));

}