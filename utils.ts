import * as fs from 'fs';
import * as path from 'path';
import * as chalk from 'chalk'

export function readFile(filePath: string): string {
    try {
        const fullPath = path.resolve(filePath);
        const data = fs.readFileSync(fullPath, 'utf8');
        return data;
    } catch (err) {
        console.error(`Error reading file from disk: ${err}`);
        return '';
    }
}

export function prettyPrint(title: string, answer: string | number) {
    console.log(chalk.cyan(`\n--- ${title} ---\n`), chalk.green(answer), '\n');
}