import { prettyPrint, readFile } from "./utils";

function getLists(data: string): [number[], number[]] {
    const colA: number[] = []
    const colB: number[] = []

    data.split("\n").forEach((line) => {
        const cleanLine = line.replace(/ /g, '-').split('-').filter(Boolean)
        const [a, b] = cleanLine

        colA.push(+a)
        colB.push(+b)
    })

    return [colA, colB]
}

function main() {
    const data = readFile('day1.txt');
    const [colA, colB] = getLists(data)
    const ans1 = pt1(colA, colB)
    const ans2 = pt2(colA, colB)

    prettyPrint('Part 1', ans1)
    prettyPrint('Part 2', ans2)
}

function pt1(colA: number[], colB: number[]): number{
    const sortedA = colA.sort();
    const sortedB = colB.sort();

    return sortedA.reduce((acc, curr, index) => acc += Math.abs(curr - sortedB[index]), 0)
}

function pt2(colA: number[], colB: number[]): number {
    const frequencyMap = colB.reduce((acc: { [key: number]: number }, curr) => {
        if (!acc[curr]) {
            acc[curr] = 0
        }

        acc[curr] += 1
        return acc
    }, {})

    return colA.reduce((acc, curr) => acc += (+curr * (frequencyMap[curr] ?? 0)), 0)
}

main()

