import { writeFile, readFile, appendFile } from 'fs/promises';
import http from "http"

for(let i=1;i<1000000;i++){
    await writeFile("big.txt", `Hello there!: ${i}\n`, {flag: "a"});
}