
import * as fs from 'fs';
import * as yaml from 'yaml';

export default class YamlParser {
    public constructor() {}
    
    public parseFile<T>(filename: string): Promise<T> {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, { encoding: 'utf8' }, (err, data) => {
                if(err) reject(err);

                const parsedData: T = yaml.parse(data);
                resolve(parsedData);
            })
        });
    }
}