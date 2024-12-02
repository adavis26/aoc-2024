import { prettyPrint, readFile } from "../utils";

function paraseData(data: string) {
}

function main() {
    const data = readFile('input.txt');
    const parsedData = paraseData(data);

    const ans1 = pt1()
    const ans2 = pt2()

    prettyPrint('Part 1', ans1)
    prettyPrint('Part 2', ans2)
}

function pt1(): number {
    // Implement part 2 here
}

function pt2(): number {
    // Implement part 2 here
}

main()

